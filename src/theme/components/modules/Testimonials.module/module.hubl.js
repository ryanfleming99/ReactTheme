document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.testimonials-lead-gen__card');
  const progressBar = document.querySelector('.testimonials-lead-gen__progress-bar');
  const testimonialsSection = document.querySelector('.testimonials-lead-gen');
  let currentCard = 0;
  let isScrolling = false;
  let autoplayInterval = null;

  const isMobile = () => window.innerWidth <= 768;

  const updateCardVisibility = () => {
    cards.forEach((card, index) => {
      card.classList.remove('active', 'behind');
      card.setAttribute('aria-hidden', 'true');
      card.style.visibility = 'hidden'; // Ensure inactive cards are hidden by default

      if (index === currentCard) {
        card.classList.add('active');
        card.setAttribute('aria-hidden', 'false');
        card.style.visibility = 'visible'; // Only make the active card visible
      } else if (index < currentCard) {
        card.classList.add('behind');
      }
    });

    // On mobile, ensure last card (data-card="4") remains visible
    if (isMobile() && currentCard === cards.length - 1) {
      cards[currentCard].style.visibility = 'visible';
    }

    const progress = ((currentCard + 1) / cards.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
  };

  const startAutoplay = () => {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      if (currentCard < cards.length - 1) {
        currentCard++;
        updateCardVisibility();
      } else {
        stopAutoplay(); // Stop autoplay when reaching the last card
      }
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };

  const handleScroll = (e) => {
    e.preventDefault();
    if (isScrolling) return;

    const delta = e.deltaY > 0 ? 1 : -1;
    if (delta > 0 && currentCard < cards.length - 1) {
      currentCard++;
    } else if (delta < 0 && currentCard > 0) {
      currentCard--;
    }

    updateCardVisibility();
    isScrolling = true;
    setTimeout(() => (isScrolling = false), 1000);
  };

  const handleKeydown = (e) => {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && currentCard < cards.length - 1) {
      currentCard++;
      updateCardVisibility();
      if (isMobile()) stopAutoplay();
    } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && currentCard > 0) {
      currentCard--;
      updateCardVisibility();
      if (isMobile()) stopAutoplay();
    }
  };

  const initializeSlider = () => {
    if (isMobile()) {
      startAutoplay();
    } else {
      testimonialsSection.addEventListener('wheel', handleScroll, { passive: false });
    }
  };

  // Listen for dropdown changes
  window.addEventListener('cardChange', (e) => {
    currentCard = e.detail;
    updateCardVisibility();
    if (isMobile()) stopAutoplay();
  });

  window.addEventListener('resize', () => {
    stopAutoplay();
    if (isMobile()) {
      testimonialsSection.removeEventListener('wheel', handleScroll);
      startAutoplay();
    } else {
      testimonialsSection.addEventListener('wheel', handleScroll, { passive: false });
    }
  });

  window.addEventListener('keydown', handleKeydown);

  updateCardVisibility();
  initializeSlider();
});
