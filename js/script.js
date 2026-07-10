// ===== NAVBAR SCROLL STATE =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== INTRO SEQUENCE (Phase 1: simple fade cycle) =====
const overlay = document.getElementById('introOverlay');
const lines = document.querySelectorAll('.intro-line');
const heroTitle = document.getElementById('heroTitle');

heroTitle.style.opacity = '0';
heroTitle.style.transform = 'translateY(20px)';
heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';

let delay = 300;
const stepTime = 750;

lines.forEach((line) => {
  line.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { line.style.opacity = '1'; }, delay);
  setTimeout(() => { line.style.opacity = '0'; }, delay + stepTime - 150);
  delay += stepTime;
});

setTimeout(() => {
  overlay.style.transition = 'opacity 0.8s ease';
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.classList.add('done');
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
  }, 800);
}, delay + 200);