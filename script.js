
window.onload = function() {
  if (localStorage.getItem("playMusic") === "true") {
    fadeInMusic();
  }

  showOnScroll();
};

const music = document.getElementById("bgMusic");

function fadeInMusic() {
  music.volume = 0;

  music.play();

  let vol = 0;

  const fade = setInterval(() => {

    if (vol < 1) {
      vol += 0.05;
      music.volume = vol;
    }

    else {
      clearInterval(fade);
    }

  }, 200);
}

// FADE SCROLL
const faders = document.querySelectorAll('.fade');

function showOnScroll() {

  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add('show');
    }

  });
}

window.addEventListener('scroll', showOnScroll);

// SLIDER
let index = 0;

const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {

  index = (index - 1 + totalSlides) % totalSlides;

  updateSlide();

}

//setInterval(nextSlide, 3500);

// SWIPE


// POPUP
function openPopup() {
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

// ENDING ANIMATION
window.addEventListener("scroll", () => {

  const ending = document.getElementById("ending");
  const position = ending.getBoundingClientRect().top;

  if (position < window.innerHeight) {
    ending.classList.add("show");
  }

});
