// variables for input form
var zipCode = getelementByID('zipCode');

// Input form
var weatherButton = document.getElementById('weatherButton');
var zipInput = document.getElementById('zipInput');

// Output variables
var output = document.getElementById('output');
var cityOutput = document.getElementById('cityOutput');
var tempK = document.getElementById('temperatureOutputK');
var tempF = document.getElementById('temperatureOutputF');
var tempC = document.getElementById('temperatureOutputC');
var condition = document.getElementById('condition');
var weatherImage = document.getElementById('weatherImage');

// Error variables
var error = document.getElementById("error");
var errorMessage = document.getElementById('errorMessage');

// api variables
var apiRequest:
var url = "http://api.openweathermap.org/data/2.5/weather?zip=<zipCode>&us&appid=<appId>";
var apiId = 4363e3e1747e40f10b2355eee16763f6;



// Waits for page to load before firing
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// Initialize your application or run some code.
		weatherButton.onclick = getWeather;
	}
};

function getWeather() {

	// Set up url for fetching weather data.
	var url = "http://api.openweathermap.org/data/2.5/weather?zip=<zipCode>&us&appid=<appId>";
	url = url.replace("<zipCode>", zipInput.value);
	url = url.replace("<appId>", appId);

	// Code that fetches data from the API URL and stores it in results.
	apiRequest = new XMLHttpRequest();
	apiRequest.onload = catchResponse;
	apiRequest.onerror = httpRequestOnError;
	apiRequest.open('get', url, true);
	apiRequest.send();
}

function httpRequestOnError() {
	output.style.display = 'none';
	errorMessage.innerHTML = 'There was a problem reaching the weather API. Try again later.'
	error.style.display = 'block';
}

function catchResponse() {

	if (apiRequest.statusText === "OK") {

		var response = JSON.parse(apiRequest.responseText);

		error.style.display = 'none';
		cityOutput.innerHTML = response.name;
		tempK.innerHTML = Math.round(response.main.temp) + ' K';
		tempF.innerHTML = convertKtoF(response.main.temp) + '&deg; F';
		tempC.innerHTML = convertKtoC(response.main.temp) + '&deg; C';
		condition.innerHTML = response.weather[0].description;
		displayImage(convertKtoF(response.main.temp));
		output.style.display = 'block';

	}
	else {
		error.style.display = 'block';
		errorMessage.innerHTML = apiRequest.statusText;
	}

}

function convertKtoF(kelvin) {
	var fahr = kelvin * (9/5) - 459.67;
	return Math.round(fahr);
}

function convertKtoC(kelvin) {
	var cel = kelvin - 273.15;
	return Math.round(cel);
}

function displayImage(tempF) {

	if (tempF > 85) {
		weatherImage.src = 'https://goo.gl/c8VxVr';
	}
	else if (tempF > 65) {
		weatherImage.src = 'https://goo.gl/WNV85G';
	}
	else if (tempF > 32) {
		weatherImage.src = 'https://goo.gl/KAbVwR';
	}
	else {
		weatherImage.src = 'https://goo.gl/a4mnmd';
	}

}
