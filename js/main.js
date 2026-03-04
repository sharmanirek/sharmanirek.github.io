(function () {
  // Active nav link
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });

  // Hero carousel
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  // Transparent nav over dark hero sections
  var nav = document.querySelector('nav');
  var darkHero = document.querySelector('.hero-bg, .offline-hero');
  if (nav && darkHero) {
    nav.classList.add('nav-transparent');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        nav.classList.remove('nav-transparent');
      } else {
        nav.classList.add('nav-transparent');
      }
    });
  }
})();
