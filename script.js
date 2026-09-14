const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
document.querySelectorAll('.visual-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.visual-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.visual-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');const panel=document.getElementById(tab.dataset.panel);if(panel)panel.classList.add('active')}));
