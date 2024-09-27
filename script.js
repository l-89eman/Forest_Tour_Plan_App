const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber = 0;

nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideNumber++;
  if (slideNumber >= numberOfSlides) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add("active");
  console.log("clicked-next");
});

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }
  slides[slideNumber].classList.add("active");
  console.log("clicked-prev");
});
