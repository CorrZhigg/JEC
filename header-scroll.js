window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 0) {
    header.style.background = 'white';
  } else {
    header.style.background = 'transparent';
  }
});