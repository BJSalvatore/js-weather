// variables for input form
var zipInput = getelementByID('zipInput');

// output variables

// error variables


// api variables
var apiRequest:
var url = "http://api.openweathermap.org/data/2.5/weather?zip=<zipCode>&us&appid=<appId>";
var apiId = 4363e3e1747e40f10b2355eee16763f6;


var weatherButton = document.getElementById('weatherButton');

var cityOutput = document.('cityOutput');
var tempK = document.getElementById('temperatureOutputK')

document.onreadystatechange = function() {
  if(document.readyState == "interactive"){

    weatherButton.onclick = test;
    console.log(weatherButton);
    // add onclick function
  }
};

function getWeather(){

  cityOutput.innerHTML = results.name;
  kel.innerHTML = (results.main.temp) + ' K';
  fahr.innerHTML = (results.main.temp) + '&deg F';
  cels.innerHTML = (results.main.temp) + '&deg C';
}

function convertKtoF(kelvin) {
  var fahr = kelvin *(9/5) - 459.67;
  return Math.round(fahr);
  // or
  //var tempF = Math.round(kelvin = (9/5) -459.67;
  // return tempF;
  //or
  //return Math.round(kelvin = (9/5) -459.67;)
}

function convertKtoC(kelvin) {
  var cels = kelvin - 273.15;
  return Math.round(cels);

//URL pattern to follow is

// If zip and API key are good output looks like

// If zip is bad output looks like this



//If API is missing or bad output looks like this
