function toggleMenu() {
  const navMenu = document.querySelector(".nav ul");
  navMenu.classList.toggle("active");
}

const aboutLink = document.getElementById("aboutLink");
const aboutSection = document.getElementById("aboutSection");

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

const skilLink = document.getElementById("skilLink");
const skillSection = document.getElementById("skillSection");

skilLink.addEventListener("click", function (event) {
  event.preventDefault();
  skillSection.scrollIntoView({ behavior: "smooth" });
});

const homeLink = document.getElementById("homeLink");
const homeSection = document.getElementById("homeSection");

homeLink.addEventListener("click", function (event) {
  event.preventDefault();
  homeSection.scrollIntoView({ behavior: "smooth" });
});

const contolLink = document.getElementById("contol");
const contolSection = document.getElementById("con");

contolLink.addEventListener("click", function (event) {
  event.preventDefault();
  contolSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("DOMContentLoaded", function () {
  const as = document.getElementById("huha");
  const text = as.textContent;
  as.textContent = "";

  let i = 0;
  function ketik() {
    if (i < text.length) {
      as.textContent += text.charAt(i);
      i++;
      setTimeout(ketik, 60);
    }
  }
  ketik();
  const foto = document.querySelector(".fotouy");
  setTimeout(() => {
    foto.classList.add("muncul");
  }, 300);
});

let currentSlide = 0;
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

document.querySelector(".next").addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateCarousel();
  }
});

document.querySelector(".prev").addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

document.getElementById("html").addEventListener("click", function () {
  window.location.href = "watashi.html#skillSection";
});
