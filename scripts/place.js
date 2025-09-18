// scripts/place.js

// === CURRENT YEAR ===
document.getElementById("currentYear").textContent = new Date().getFullYear();

// === LAST MODIFIED DATE ===
document.getElementById("lastModified").textContent = document.lastModified;

// === WIND CHILL CALCULATION ===
function calculateWindChill(tempC, speedKmh) {
  if (tempC <= 10 && speedKmh > 4.8) {
    let chill =
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmh, 0.16) +
      0.3965 * tempC * Math.pow(speedKmh, 0.16);
    return chill.toFixed(1);
  } else {
    return "N/A";
  }
}

// Get temperature and windspeed from DOM
const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("windspeed").textContent);

// Calculate wind chill
const windChill = calculateWindChill(temp, wind);

// Display result
document.getElementById("windchill").textContent = windChill;