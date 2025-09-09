// temples.js | Dynamic footer + responsive menu

// === CURRENT YEAR ===
document.getElementById("currentYear").textContent = new Date().getFullYear();

// === LAST MODIFIED DATE ===
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

// === HAMBURGER MENU ===
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  navToggle.setAttribute("aria-expanded", !expanded);
  mainNav.classList.toggle("active");
});
