const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
document.querySelectorAll('.visual-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.visual-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.visual-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');const panel=document.getElementById(tab.dataset.panel);if(panel)panel.classList.add('active')}));


// V5 interactive product experience
const xpTabs=document.querySelectorAll('.experience-tab');
const xpPanels=document.querySelectorAll('[data-experience-panel]');
xpTabs.forEach(tab=>tab.addEventListener('click',()=>{
  const key=tab.dataset.experience;
  xpTabs.forEach(t=>t.classList.toggle('active',t===tab));
  xpPanels.forEach(p=>p.classList.toggle('hidden',p.dataset.experiencePanel!==key));
}));

// V5 scroll reveal — progressive enhancement only
if('IntersectionObserver' in window){
  const revealTargets=document.querySelectorAll('.section-title,.product-card,.module-grid article,.industry-grid article,.control-grid article,.pricing article,.steps article,.resource-grid article,.trust-cards article');
  revealTargets.forEach(el=>el.classList.add('reveal'));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
  revealTargets.forEach(el=>observer.observe(el));
}

// Close sibling FAQ items for a cleaner reading experience
const faqDetails=document.querySelectorAll('.faq-list details');
faqDetails.forEach(d=>d.addEventListener('toggle',()=>{if(d.open)faqDetails.forEach(other=>{if(other!==d)other.open=false})}));

// V6 — secure website demo request → FinClarity CRM
const FC_CRM_ENDPOINT='https://jvzkzhhbqsreknwchhcg.supabase.co/rest/v1/rpc/submit_finclarity_website_lead';
const FC_PUBLIC_KEY='sb_publishable_U8IT-Gu9flt8I5GqF881qA_GkwjApIg';
const demoForm=document.getElementById('erpDemoForm');
if(demoForm){
  demoForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const status=document.getElementById('demoFormStatus');
    const btn=demoForm.querySelector('button[type="submit"]');
    const fd=new FormData(demoForm);
    const payload={
      p_site_key:'finclarity-web-v6',p_contact_name:String(fd.get('name')||'').trim(),p_company_name:String(fd.get('business')||'').trim(),
      p_email:String(fd.get('email')||'').trim(),p_phone:String(fd.get('phone')||'').trim(),p_segment:String(fd.get('industry')||'').trim(),
      p_users:String(fd.get('users')||'').trim(),p_current_system:String(fd.get('current_system')||'').trim(),p_interest:String(fd.get('interest')||'').trim(),
      p_challenge:String(fd.get('challenge')||'').trim(),p_honeypot:String(fd.get('website')||'').trim()
    };
    status.className='form-status'; status.textContent=''; btn.disabled=true; const old=btn.textContent; btn.textContent='Sending request…';
    try{
      const r=await fetch(FC_CRM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','apikey':FC_PUBLIC_KEY,'Authorization':'Bearer '+FC_PUBLIC_KEY},body:JSON.stringify(payload)});
      const body=await r.json().catch(()=>({}));
      if(!r.ok)throw new Error(body?.message||'We could not submit your request right now.');
      status.textContent='Thank you. Your ERP demo request has been received by FinClarity Solutions. We will contact you using the details provided.';
      status.className='form-status show success'; demoForm.reset(); status.scrollIntoView({behavior:'smooth',block:'center'});
    }catch(err){
      status.textContent=(err.message||'Submission failed.')+' You can also use the WhatsApp option beside this form.';
      status.className='form-status show error';
    }finally{btn.disabled=false;btn.textContent=old}
  });
}
