// scripts/place.js

// === CURRENT YEAR ===
document.getElementById("currentYear").textContent = new Date().getFullYear();

// === LAST MODIFIED DATE ===
document.getElementById("lastModified").textContent = document.lastModified;

// === WIND CHILL CALCULATION (One-liner) ===
const calculateWindChill = (t, s) =>
  (t <= 10 && s > 4.8)
    ? (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1)
    : "N/A";

// === APPLY WIND CHILL IF CONDITIONS ARE MET ===
const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windspeed").textContent);

document.getElementById("windchill").textContent = calculateWindChill(temp, speed);
