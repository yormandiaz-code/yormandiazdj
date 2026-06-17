// LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    setTimeout(() => document.getElementById('loader').style.display='none', 800);
  }, 1800);
});

// NAVIGATION TOGGLE
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('nav-open');
  });
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
});
(function anim() {
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(anim);
})();
document.querySelectorAll('a,button,.genre-item,.stat-box,.g-item,.link-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width='20px'; cursor.style.height='20px';
    ring.style.width='70px'; ring.style.height='70px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width='10px'; cursor.style.height='10px';
    ring.style.width='40px'; ring.style.height='40px';
  });
});

// PARALLAX
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const bg = document.getElementById('heroBg');
  if(bg) bg.style.transform=`scale(1) translateY(${y*.3}px)`;
});

// REVEAL
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
