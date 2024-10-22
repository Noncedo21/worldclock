function showDurban() {
  let dbnDate = moment().format("MMMM Do YYYY");
  let currentDate = document.querySelector("#ZA-date");
  currentDate.innerHTML = dbnDate; // Add this to update the date in the DOM

  let dbnTime = moment().tz("Africa/Johannesburg").format("HH:mm:ss");
  let currentDbn = document.querySelector("#ZA-time");
  currentDbn.innerHTML = dbnTime; // This will update the time correctly
}
setInterval(showDurban, 1000);
function showLagos() {
  let LgDate = moment().format("MMMM Do YYYY");
  let currentLagDate = document.querySelector("#NG-date");
  currentLagDate.innerHTML = LgDate; // Add this to update the date in the DOM

  let LagosTime = moment().tz("Africa/Lagos").format("HH:mm:ss");
  let currentLag = document.querySelector("#NG-time");
  currentLag.innerHTML = LagosTime; // This will update the time correctly
}
setInterval(showLagos, 1000);
