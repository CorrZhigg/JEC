// about-carousel.js
// Images for the about carousel
const aboutImages = [
  'IMG_2052.jpeg',
  'About Us 2.jpeg',
  'About Us 3.jpeg'
];

let aboutCurrent = 0;
let aboutInterval = null;

const aboutImg = document.getElementById('about-carousel-img');
const aboutPrev = document.getElementById('about-prev');
const aboutNext = document.getElementById('about-next');

function showAboutImg(idx) {
  if (!aboutImg) return;
  const nextIdx = (idx + aboutImages.length) % aboutImages.length;
  if (aboutImg.src.includes(aboutImages[nextIdx])) return;
  // Fade out
  aboutImg.style.opacity = 0;
  setTimeout(() => {
    aboutImg.src = aboutImages[nextIdx];
    aboutImg.onload = () => {
      aboutImg.style.opacity = 1;
    };
    updateAboutBgBlur(nextIdx);
  }, 300);
  aboutCurrent = nextIdx;
}

function nextAboutImg() {
  showAboutImg(aboutCurrent + 1);
  resetAboutInterval();
}

function prevAboutImg() {
  showAboutImg(aboutCurrent - 1);
  resetAboutInterval();
}

function resetAboutInterval() {
  if (aboutInterval) clearInterval(aboutInterval);
  aboutInterval = setInterval(() => showAboutImg(aboutCurrent + 1), 5000);
}

if (aboutPrev && aboutNext && aboutImg) {
  aboutPrev.addEventListener('click', prevAboutImg);
  aboutNext.addEventListener('click', nextAboutImg);
  aboutImg.style.transition = 'opacity 0.5s';
  showAboutImg(aboutCurrent);
  aboutInterval = setInterval(() => showAboutImg(aboutCurrent + 1), 5000);
}

// Set blurred background to match carousel image
const aboutBgBlur = document.getElementById('about-bg-blur');
function updateAboutBgBlur(idx) {
  if (aboutBgBlur) {
    aboutBgBlur.style.backgroundImage = `url('${aboutImages[idx]}')`;
  }
}
// Set initial background
updateAboutBgBlur(aboutCurrent);
