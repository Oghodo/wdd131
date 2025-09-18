// === YEAR & LAST MODIFIED ===
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// === WEATHER VARIABLES ===
const temp = 30;  // °C
const wind = 15;  // km/h

// === WIND CHILL FUNCTION ===
function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

// === CONDITIONS ===
const windChillElem = document.getElementById("windChill");
if (temp <= 10 && wind > 4.8) {
  windChillElem.textContent = calculateWindChill(temp, wind) + " °C";
} else {
  windChillElem.textContent = "N/A";
}
