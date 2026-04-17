// =============================================
// SCROLL REVEAL
// =============================================
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observer.observe(el));


// =============================================
// ACTIVE NAV LINK ON CLICK
// =============================================
const navLinks   = document.querySelectorAll('.nav-link');
const navItems   = document.querySelectorAll('.nav-links li');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Remove active state from all
    navLinks.forEach((l) => l.classList.remove('active'));
    navItems.forEach((li) => li.classList.remove('nav-item-active'));

    // Set active on clicked
    link.classList.add('active');
    link.closest('li').classList.add('nav-item-active');
  });
});


// =============================================
// NAVBAR GLOW INTENSITY ON SCROLL
// =============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0px 0px 24px rgba(105, 218, 255, 0.18)';
  } else {
    navbar.style.boxShadow = '0px 0px 15px rgba(105, 218, 255, 0.1)';
  }
});
