//sidebar
function open_sidebar() {
  const side_bar = document.getElementById("sidebar");
  side_bar.classList.add("active");
}

function close_sidebar() {
  const side_bar = document.getElementById("sidebar");
  side_bar.classList.remove("active"); 
}
// nav links Highlight
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("heroSlider");
  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dot");
  const prevArrow = slider.querySelector(".prev-arrow");
  const nextArrow = slider.querySelector(".next-arrow");
  let currentSlide = 0;
  let slideInterval;

  // Initialize the slider
  function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Show a specific slide
  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current slide and dot
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    // Update current slide index
    currentSlide = index;
  }

  // Go to next slide
  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
      next = 0;
    }
    showSlide(next);
  }

  // Go to previous slide
  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) {
      prev = slides.length - 1;
    }
    showSlide(prev);
  }

  // Add event listeners
  prevArrow.addEventListener("click", function () {
    clearInterval(slideInterval);
    prevSlide();
    startSlider();
  });

  nextArrow.addEventListener("click", function () {
    clearInterval(slideInterval);
    nextSlide();
    startSlider();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      clearInterval(slideInterval);
      showSlide(parseInt(this.getAttribute("data-index")));
      startSlider();
    });
  });

  // Start the slider
  startSlider();
});
