// Dynamically insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temp = document.querySelector(".temp").textContent;
const wind = document.querySelector(".wnd").textContent;
let wndchl = document.querySelector(".windchill");

function calculateWindChill(temp, speed){

  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}


if (temp <= 10 && wind > 4.8) {
      wndchl.textContent = `Wind Chill: ${calculateWindChill(temp, wind)} °C`;
    } else {
      wndchl.textContent = "Wind Chill: N/A";
    }
