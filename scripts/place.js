document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = document.lastModified;

    const temp = 10; // Static value for temperature
    const windSpeed = 5; // Static value for wind speed

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('windChill').textContent = windChill;
});
