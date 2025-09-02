// Dynamically insert current year
const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();

// Dynamically insert last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
