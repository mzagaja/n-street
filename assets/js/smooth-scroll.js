// Smooth scroll implementation
(function() {
  'use strict';

  // Smooth scroll for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add smooth scroll to wheel events for better control
  let isScrolling = false;

  window.addEventListener('wheel', function(e) {
    if (isScrolling) return;

    const delta = e.deltaY;
    const currentSlide = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
      .closest('.hero-slide');

    if (!currentSlide) return;

    if (delta > 0) {
      // Scrolling down
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide && nextSlide.classList.contains('hero-slide')) {
        e.preventDefault();
        isScrolling = true;
        nextSlide.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => { isScrolling = false; }, 1000);
      }
    } else {
      // Scrolling up
      const prevSlide = currentSlide.previousElementSibling;
      if (prevSlide && prevSlide.classList.contains('hero-slide')) {
        e.preventDefault();
        isScrolling = true;
        prevSlide.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => { isScrolling = false; }, 1000);
      }
    }
  }, { passive: false });
})();
