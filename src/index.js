let dbnDate = moment().format("MMMM Do YYYY");
let currentDdate = document.querySelector("#ZA-date");
let dbnTime = moment().tz("Africa/Johannesburg");
let formattedDbnTime = moment(dbnTime).format("HH:mm:ss");
let currentDbn = document.querySelector("#ZA-time");
currentDbn.innerHTML = formattedDbnTime;
