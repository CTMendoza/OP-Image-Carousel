import "./styles.css";
import wallpaper1 from './images/wallpaper1.jpg';
import wallpaper2 from './images/wallpaper2.jpg';
import wallpaper3 from './images/wallpaper3.jpg';
import wallpaper4 from './images/wallpaper4.jpg';

export const images = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];

export const prevButton = document.querySelector('.previous');

export const nextButton = document.querySelector('.next');

export const image = document.querySelector('img');

let currentIndex = 0;
const navCircles = document.querySelectorAll('.circle');
// Function to update the displayed image
function updateImage() {
  image.src = images[currentIndex];

  // Update active circle
  navCircles.forEach((circle, index) => {
    circle.style.backgroundColor = index === currentIndex ? "black" : "transparent";
  });
}

// Initialize the carousel
updateImage();

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Add click events for circles
navCircles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    console.log(`Circle clicked: Index ${index}`);
    currentIndex = index;
    updateImage();
  });
});

//Add a timeout which advances the slides every 5 seconds.
setInterval(()=> {
    currentIndex = (currentIndex + 1) % images.length;
  updateImage();  
}, 5000);