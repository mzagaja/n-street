// Parallax effect for images
(function() {
  'use strict';

  const parallaxElements = document.querySelectorAll('.slide-image');
  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element, index) => {
      const slide = element.closest('.hero-slide');
      const slideTop = slide.offsetTop;
      const slideHeight = slide.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if slide is in viewport
      if (scrolled + windowHeight > slideTop && scrolled < slideTop + slideHeight) {
        const yPos = -((scrolled - slideTop) * 0.3);
        element.style.transform = `translateY(${yPos}px) scale(1.1)`;
      }
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);
  window.addEventListener('resize', requestTick);

  // Initial call
  updateParallax();
})();
