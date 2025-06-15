const images = [
  'img4.jpg',
  'img2.jpg',
  'img1.JPEG',
  // Add more image filenames as needed
];

let currentImg = 0;

window.addEventListener('DOMContentLoaded', () => {
  const carouselImg = document.getElementById('carousel-img');
  if (!carouselImg) return;

  function showImg(idx) {
    currentImg = (idx + images.length) % images.length;
    carouselImg.style.opacity = 0;
    setTimeout(() => {
      carouselImg.src = images[currentImg];
      carouselImg.style.opacity = 1;
    }, 150);
  }

  window.prevImg = function() { showImg(currentImg - 1); };
  window.nextImg = function() { showImg(currentImg + 1); };

  // Initialize the carousel with the first image
  showImg(currentImg);
});