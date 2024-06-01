// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Toggle menu for mobile view
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("show");
}

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Initialize the first slide as active on DOM content load
document.addEventListener("DOMContentLoaded", () => {
  slides[currentSlide].classList.add("active");
  setupFormValidation();
  setupKeyboardAccessibility();
});

// Form validation function
function setupFormValidation() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let valid = true;

    if (name.value.trim() === "") {
      valid = false;
      alert("Name is required.");
      name.focus();
    } else if (!validateEmail(email.value)) {
      valid = false;
      alert("Please enter a valid email address.");
      email.focus();
    } else if (message.value.trim() === "") {
      valid = false;
      alert("Message cannot be empty.");
      message.focus();
    }

    if (!valid) {
      event.preventDefault();
    }
  });
}

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Keyboard accessibility for navigation and form
function setupKeyboardAccessibility() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        link.click();
      }
    });
  });

  const formElements = document.querySelectorAll(
    "form input, form textarea, form button"
  );
  formElements.forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && element.tagName !== "TEXTAREA") {
        element.form.submit();
      }
    });
  });
}
