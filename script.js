// Go to top button functionality
const goTopBtn = document.getElementById('goTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.add('show');
  } else {
    goTopBtn.classList.remove('show');
  }
});

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Project card interaction
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// Simplified button interaction
const buttons = document.querySelectorAll('.Documents-btn');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
    alert('Contact: 6281119339');
  });
});
