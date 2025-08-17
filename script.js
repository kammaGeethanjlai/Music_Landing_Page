// Optional JS for future interactivity
console.log("Music Landing Page Loaded 🎶");
// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
