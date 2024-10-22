let dbnDate = moment().format("MMMM Do YYYY");
let currentDate = document.querySelector("#ZA-date");
currentDate.innerHTML = dbnDate; // Add this to update the date in the DOM

let dbnTime = moment().tz("Africa/Johannesburg").format("HH:mm:ss");
let currentDbn = document.querySelector("#ZA-time");
currentDbn.innerHTML = dbnTime; // This will update the time correctly
