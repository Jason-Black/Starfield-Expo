// Select the starfield container and settings elements
const starfield = document.getElementById('starfield');
const numStarsInput = document.getElementById('numStars');
const starSizeInput = document.getElementById('starSize');
const brightnessInput = document.getElementById('brightness');
const applySettingsButton = document.getElementById('applySettings');

// Function to generate stars
function generateStars() {
  starfield.innerHTML = ''; // Clear existing stars
  const numStars = numStarsInput.value;
  const starSize = starSizeInput.value;
  const brightness = brightnessInput.value;
  
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = star.style.height = `${Math.random() * starSize + 1}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.opacity = brightness;
    starfield.appendChild(star);
  }
}

// Function to update star positions based on mouse movement
function updateStars(event) {
  const { clientX, clientY } = event;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (clientX - centerX) * 0.01;
  const moveY = (clientY - centerY) * 0.01;

  gsap.to('.star', {
    x: moveX,
    y: moveY,
    stagger: {
      each: 0.01,
      from: "random",
      ease: "power1.inOut"
    }
  });
}

// Add event listener for mouse movement
document.addEventListener('mousemove', updateStars);

// Add event listener for apply settings button
applySettingsButton.addEventListener('click', generateStars);

// Initial generation of stars
generateStars();
