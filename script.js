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
