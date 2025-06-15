const images = [
  '../images/img4.jpg',
  '../images/img2.jpg',
  '../images/img1.JPEG',
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
      // Add zoomed-out class for img1.JPEG if needed
      const zoomedOut = images[currentImg].includes('img1.JPEG');
      if (zoomedOut) {
        carouselImg.classList.add('carousel-zoomed-out');
      } else {
        carouselImg.classList.remove('carousel-zoomed-out');
      }
      carouselImg.style.opacity = 1;
    }, 150);
  }

  window.prevImg = function() { showImg(currentImg - 1); };
  window.nextImg = function() { showImg(currentImg + 1); };

  // Initialize the carousel with the first image
  showImg(currentImg);
});