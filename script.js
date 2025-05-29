const phrases = ["a Designer", "a Developer", "an Innovator"];
let current = 0;
let char = 0;
let isDeleting = false;
const span = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

function typeEffect() {
  const text = phrases[current];
  if (isDeleting) {
    char--;
    if (char === 0) {
      isDeleting = false;
      current = (current + 1) % phrases.length;
    }
  } else {
    char++;
    if (char === text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  span.textContent = text.substring(0, char);
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", typeEffect);
