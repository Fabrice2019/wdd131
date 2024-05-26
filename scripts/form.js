const products = [
  { id: "fc-1888", name: "flux capacitor", avg_rating: 4.5 },
  { id: "fc-2050", name: "power laces", avg_rating: 4.7 },
  { id: "fs-1987", name: "time circuits", avg_rating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", avg_rating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", avg_rating: 5.0 },
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  const ratingInputs = document.querySelectorAll('.rating input[type="radio"]');
  ratingInputs.forEach((input) => {
    input.addEventListener("change", () => {
      let checkedIndex = -1;
      ratingInputs.forEach((item, index) => {
        const stars = item.nextElementSibling.querySelectorAll(".star");
        const circle = item.nextElementSibling.querySelector(".circle");
        if (item.checked) {
          checkedIndex = index;
          stars.forEach((star) => (star.style.color = "#f39c12"));
          circle.style.backgroundColor = "#f39c12";
        } else {
          stars.forEach((star) => (star.style.color = "#ccc"));
          circle.style.backgroundColor = "#ccc";
        }
      });
      ratingInputs.forEach((item, index) => {
        if (index < checkedIndex) {
          const stars = item.nextElementSibling.querySelectorAll(".star");
          const circle = item.nextElementSibling.querySelector(".circle");
          stars.forEach((star) => (star.style.color = "#f39c12"));
          circle.style.backgroundColor = "#f39c12";
        }
      });
    });
  });

  const reviewForm = document.getElementById("reviewForm");
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Review submitted!");

    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem("reviewCount", reviewCount);

    reviewForm.reset();
  });
});
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
