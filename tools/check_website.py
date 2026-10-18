"""Offline source checks: no live lead submissions or remote credentials."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
 def __init__(self):super().__init__();self.ids=set();self.refs=[];self.duplicate_ids=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):
   if a['id']in self.ids:self.duplicate_ids.append(a['id'])
   self.ids.add(a['id'])
  for k in ('href','src'):
   if a.get(k):self.refs.append(a[k])
p=Page();p.feed((ROOT/'index.html').read_text());assert not p.duplicate_ids,('Duplicate IDs',p.duplicate_ids)
checked=0
for ref in p.refs:
 u=urlsplit(ref)
 if u.scheme or u.netloc:continue
 if u.path:
  path=(ROOT/unquote(u.path.lstrip('/'))).resolve();assert path.is_relative_to(ROOT),'Local resource escapes repository';assert path.is_file(),f'Missing local resource: {u.path}';checked+=1
 elif u.fragment:assert unquote(u.fragment)in p.ids,f'Missing navigation target: {u.fragment}';checked+=1
assert checked>10,'Expected website resources/navigation were not checked'
print(f'PASS: {checked} local resource/navigation references; no duplicate IDs. No live form submitted.')
