function showDurban() {
  let dbnDate = moment().format("MMMM Do YYYY");
  let currentDate = document.querySelector("#ZA-date");
  currentDate.innerHTML = dbnDate; // Update the date for Durban

  let dbnTime = moment().tz("Africa/Johannesburg").format("HH:mm:ss");
  let currentDbn = document.querySelector("#ZA-time");
  currentDbn.innerHTML = dbnTime; // Update the time for Durban
}
setInterval(showDurban, 1000);

function showLagos() {
  let LgDate = moment().format("MMMM Do YYYY");
  let currentLagDate = document.querySelector("#NG-date");
  currentLagDate.innerHTML = LgDate; // Update the date for Lagos

  let LagosTime = moment().tz("Africa/Lagos").format("HH:mm:ss");
  let currentLag = document.querySelector("#NG-time");
  currentLag.innerHTML = LagosTime; // Update the time for Lagos
}
setInterval(showLagos, 1000);

function showNairobi() {
  let NaiDate = moment().format("MMMM Do YYYY");
  let currentNaiDate = document.querySelector("#KE-date");
  currentNaiDate.innerHTML = NaiDate; // Update the date for Nairobi

  let NaiTime = moment().tz("Africa/Nairobi").format("HH:mm:ss");
  let currentNai = document.querySelector("#KE-time");
  currentNai.innerHTML = NaiTime; // Update the time for Nairobi
}
setInterval(showNairobi, 1000);

// Get the city select element and city container
let citySelect = document.querySelector(".city-select");
let cityContainer = document.querySelector(".city-container");

// Function to handle city selection and replace content
function selectCity(event) {
  let city = event.target.value;
  let cityTime, cityDate, cityName;

  if (city === "london") {
    cityTime = moment().tz("Europe/London").format("HH:mm:ss");
    cityDate = moment().tz("Europe/London").format("MMMM Do YYYY");
    cityName = "London 🇬🇧";
  } else if (city === "chicago") {
    cityTime = moment().tz("America/Chicago").format("HH:mm:ss");
    cityDate = moment().tz("America/Chicago").format("MMMM Do YYYY");
    cityName = "Chicago 🇺🇸";
  } else if (city === "moscow") {
    cityTime = moment().tz("Europe/Moscow").format("HH:mm:ss");
    cityDate = moment().tz("Europe/Moscow").format("MMMM Do YYYY");
    cityName = "Moscow 🇷🇺";
  }

  // Replace all cities on the page with the selected city info
  if (cityName && cityTime && cityDate) {
    cityContainer.innerHTML = `
      <div class="city-date">
        <div class="city"><h2>${cityName}</h2></div>
        <div class="date">${cityDate}</div>
      </div>
      <span class="time">${cityTime}</span>
    `;
  }
}

// Add event listener to the city select element
citySelect.addEventListener("change", selectCity);
