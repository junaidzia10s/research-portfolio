'use strict';
// Add verified personal links here when available. Leave blank to hide them.
const CONTACT = {
  email: '',
  linkedin: '',
  github: '',
  cvPdf: ''
};

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const opened = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}));

const optionalLinks = document.querySelector('#contact-links');
if (optionalLinks) {
  const link = (label, href) => {
    const anchor = document.createElement('a');
    anchor.className = 'button button-ghost';
    anchor.href = href;
    if (/^https?:/.test(href)) {anchor.target = '_blank';anchor.rel = 'noopener noreferrer';}
    anchor.textContent = `${label} ↗`;
    optionalLinks.appendChild(anchor);
  };
  if (CONTACT.email.trim()) link('Email me', `mailto:${CONTACT.email.trim()}`);
  if (CONTACT.linkedin.trim()) link('LinkedIn', CONTACT.linkedin.trim());
  if (CONTACT.github.trim()) link('GitHub', CONTACT.github.trim());
  if (CONTACT.cvPdf.trim()) link('Academic CV', CONTACT.cvPdf.trim());
}

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(items => {
      items.forEach(item => { if (item.isIntersecting) { item.target.classList.add('visible'); revealObserver.unobserve(item.target); } });
    }, { threshold: 0.07, rootMargin: '0px 0px -10px 0px' })
  : null;
document.querySelectorAll('.reveal').forEach(node => {
  if (revealObserver) revealObserver.observe(node);
  else node.classList.add('visible');
});

// Deterministic schematic wafer illustration, not raw classifier output.
const waferGroup = document.getElementById('wafer-cells');
if (waferGroup) {
  const namespace = 'http://www.w3.org/2000/svg';
  for (let row=0; row<19; row++) {
    for (let col=0; col<19; col++) {
      const x=151+col*11.9, y=36+row*11.9;
      if (Math.hypot(x-258,y-145)>108) continue;
      const isDefect = ((col>12&&row<7&&row>2) || (col>6&&col<10&&row>12&&row<16) || (col===7&&row>5&&row<10));
      const rect=document.createElementNS(namespace,'rect');
      rect.setAttribute('x',x.toFixed(1));rect.setAttribute('y',y.toFixed(1));
      rect.setAttribute('width','8.5');rect.setAttribute('height','8.5');rect.setAttribute('rx','1.4');
      rect.setAttribute('fill',isDefect?'#c3eb9b':((col+row)%5===0?'#448e8f':'#2c6775'));
      rect.setAttribute('opacity',isDefect?'.96':'.72');
      waferGroup.appendChild(rect);
    }
  }
}

if (window.matchMedia('(pointer:fine)').matches) {
  const halo=document.querySelector('.cursor-halo');
  document.addEventListener('pointermove',e=>{halo.style.left=e.clientX+'px';halo.style.top=e.clientY+'px';halo.style.opacity='1';},{passive:true});
  document.addEventListener('pointerleave',()=>{halo.style.opacity='0';});
}
