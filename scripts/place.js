document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temperature, windSpeed) {
  return temperature <= 10 && windSpeed > 4.8
    ? (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
      ).toFixed(1)
    : "N/A";
}

window.onload = function () {
  const windChillDisplay = document.getElementById("windChill");
  windChillDisplay.textContent = calculateWindChill(10, 5); // Static values from your weather section
};
