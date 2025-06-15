const images = [
  'img4.jpg',
  'img2.jpg',
  'img1.JPEG'
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
      setBlurBg(images[currentImg]); // <-- Add this line
    }, 150);
  }

  window.prevImg = function() { showImg(currentImg - 1); };
  window.nextImg = function() { showImg(currentImg + 1); };

  // Initialize the carousel with the first image and blur background
  showImg(currentImg);
});

// Sync blurred background with carousel
function setBlurBg(imgSrc) {
  const blurDiv = document.getElementById('about-bg-blur');
  if (blurDiv) {
    blurDiv.style.opacity = 0;
    setTimeout(() => {
      blurDiv.style.backgroundImage = `url('${imgSrc}')`;
      blurDiv.style.opacity = 1;
    }, 150); // Match your carousel fade duration
  }
}

function syncBlurBgWithCarousel() {
  const carouselImg = document.getElementById('carousel-img');
  const blurBg = document.getElementById('about-bg-blur');
  if (carouselImg && blurBg) {
    blurBg.style.backgroundImage = `url('${carouselImg.src}')`;
  }
}

// Call this once on page load
syncBlurBgWithCarousel();

// Example: If you have a function that changes the carousel image, call setBlurBg(newImgSrc) inside it.
function nextImg() {
  // ...existing code to change carousel image...
  syncBlurBgWithCarousel();
}

function prevImg() {
  // ...existing code to change carousel image...
  syncBlurBgWithCarousel();
}

// Fade out blur on scroll
window.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about-us');
  const blurDiv = document.getElementById('about-bg-blur');
  const dualHeaders = document.getElementById('dual-headers');
  if (!aboutSection || !blurDiv || !dualHeaders) return;

  const aboutRect = aboutSection.getBoundingClientRect();
  const dualRect = dualHeaders.getBoundingClientRect();

  // If the top of dual-headers is visible (enters viewport), fade out the blur
  if (dualRect.top < window.innerHeight && dualRect.top > 0) {
    // Fade out as dual-headers enters
    let opacity = dualRect.top / window.innerHeight;
    blurDiv.style.opacity = Math.max(0, Math.min(1, opacity));
  } else if (dualRect.top <= 0) {
    // If dual-headers is fully in view or above, hide blur
    blurDiv.style.opacity = 0;
  } else {
    // Otherwise, keep blur fully visible
    blurDiv.style.opacity = 1;
  }
});