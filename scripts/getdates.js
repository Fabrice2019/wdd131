// Get current year and update footer
const currentYear = new Date().getFullYear();
document.querySelector("footer p:first-child").textContent += currentYear;

// Get last modified date and update second paragraph in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent =
  "Last modified: " + lastModified;
