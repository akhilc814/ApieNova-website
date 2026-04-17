/* ====================================================
   APIENOVA — Main JS
   ==================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── LOADER ── */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('done');
    }, 2000);
  });

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── MOBILE MENU ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobile);
  }

  // Close on link click
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', closeMobile);
  });

  /* ── HERO SLIDER ── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hdot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(i);
      startSlider();
    });
  });

  startSlider();

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-reveal]'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 80}ms`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── SMOOTH ANCHOR SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  /* ── TESTIMONIALS ── */
  const testiSlides = document.querySelectorAll('.testi-slide');
  let currentTesti = 0;

  function showTesti(n) {
    testiSlides[currentTesti].classList.remove('active');
    currentTesti = (n + testiSlides.length) % testiSlides.length;
    testiSlides[currentTesti].classList.add('active');
  }

  document.getElementById('testi-prev')?.addEventListener('click', () => showTesti(currentTesti - 1));
  document.getElementById('testi-next')?.addEventListener('click', () => showTesti(currentTesti + 1));

  // Auto-rotate
  setInterval(() => showTesti(currentTesti + 1), 7000);

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  form?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      }
    });

    if (!valid) return;

    // Simulate submission (replace with actual endpoint / Formspree / Netlify Forms)
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '…';

    setTimeout(() => {
      form.style.display = 'none';
      formSuccess.classList.remove('hidden');
    }, 1200);
  });

  /* ── PARALLAX HERO (subtle) ── */
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroSlides = document.querySelectorAll('.hero-slide.active');
    heroSlides.forEach(s => {
      s.style.transform = `translateY(${scrolled * 0.25}px)`;
    });
  }, { passive: true });

  /* ── ACTIVE NAV LINK on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active-nav');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active-nav');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

});

function closeMobile() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
