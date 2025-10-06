// Navigation dot functionality
document.addEventListener('DOMContentLoaded', function() {
  const dots = document.querySelectorAll('.nav-dot');
  const slides = document.querySelectorAll('.hero-slide');

  // Intersection Observer for slide detection
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.slideIndex;
        updateActiveDot(index);

        // Track slide view
        const event = new CustomEvent('slideView', {
          detail: { slideId: entry.target.id }
        });
        document.dispatchEvent(event);
      }
    });
  }, options);

  slides.forEach(slide => {
    observer.observe(slide);
  });

  // Dot click navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slides[index].scrollIntoView({ behavior: 'smooth' });
    });
  });

  function updateActiveDot(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // AOS-like animation trigger
  const animatedElements = document.querySelectorAll('[data-aos]');

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });
});

// Lead form functions
function openLeadForm() {
  document.getElementById('lead-modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Track form open
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead');
  }
}

function closeLeadForm() {
  document.getElementById('lead-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on outside click
document.getElementById('lead-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLeadForm();
  }
});

// Form submission
document.getElementById('lead-form').addEventListener('submit', function(e) {
  // Track form submission
  if (typeof fbq !== 'undefined') {
    fbq('track', 'CompleteRegistration');
  }
});

// Scroll indicator functionality
document.querySelectorAll('.scroll-indicator').forEach(button => {
  button.addEventListener('click', function() {
    const currentSlide = this.closest('.hero-slide');
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Easter egg: Konami code for virtual tour
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      alert('🏠 Virtual tour unlocked! Contact us to schedule.');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// Time-based messaging
const hour = new Date().getHours();
if (hour >= 20 || hour < 8) {
  setTimeout(() => {
    console.log('💡 Viewing at night? See it better in person tomorrow!');
  }, 30000);
}

// Return visitor detection
if (localStorage.getItem('visited')) {
  setTimeout(() => {
    console.log('👋 Welcome back! Ready to schedule that showing?');
  }, 5000);
} else {
  localStorage.setItem('visited', 'true');
}
