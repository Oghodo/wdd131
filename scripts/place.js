// Footer dates
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather calculation
function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

// Static values
const temp = 30; // °C
const wind = 10; // km/h
const windChillEl = document.getElementById("windchill");

if (temp <= 10 && wind > 4.8) {
  windChillEl.textContent = calculateWindChill(temp, wind) + " °C";
} else {
  windChillEl.textContent = "N/A";
}

