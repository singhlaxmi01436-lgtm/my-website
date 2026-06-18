/* ============================================
   AYUSHMAN PORTFOLIO — script.js
   ============================================ */

// ---------- NAVBAR SCROLL ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---------- HAMBURGER MENU ----------
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---------- SCROLL REVEAL ----------
const reveals = document.querySelectorAll(
  '.skill-card, .project-card, .about-text, .about-visual, .avatar-card, .contact-card, .stat'
);
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (Array.from(reveals).indexOf(entry.target) % 6));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ---------- SKILL BAR ANIMATION ----------
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const target = fill.style.width;
      fill.style.width = '0';
      requestAnimationFrame(() => {
        setTimeout(() => { fill.style.width = target; }, 100);
      });
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ---------- ACTIVE NAV LINK ----------
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navItems.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--accent)';
    }
  });
});

// ---------- SMOOTH HERO PARALLAX ----------
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.transform = `translateY(${window.scrollY * 0.18}px)`;
  }
});

console.log('%c👋 Hey, I\'m Ayushman — AI/ML Engineer!', 'font-size:18px; color:#2563EB; font-weight:bold;');
console.log('%cBuilt with love, Python, and too much coffee ☕', 'font-size:12px; color:#5A6072;');