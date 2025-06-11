window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  const hero = document.getElementById('hero');
  const heroHeight = hero.offsetHeight;
  if (window.scrollY > heroHeight - header.offsetHeight) {
    header.style.background = 'white';
  } else {
    header.style.background = 'transparent';
  }
});