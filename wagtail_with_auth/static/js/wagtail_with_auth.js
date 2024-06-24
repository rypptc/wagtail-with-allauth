window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 100) { // The point at which the navbar should shrink
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });