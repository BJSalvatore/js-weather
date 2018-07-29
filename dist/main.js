var weatherButton = document.getElementById('weatherButton');
var zipCode = document.getElementById('zipCode');
var resetButton = document.getElementById('resetButton');


// Waits for page to load before firing
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// Initialize your application or run some code.
		weatherButton.onclick = getWeather;
    resetButton.onclick = resetForm;

	}
};

    // Execute a function when the user releases a key on the keyboard
    weatherButton.addEventListener("keyup", function(getWeather) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the getWeather function by enter key
        getWeather();
      }
    });

    // Execute a function when the user releases a key on the keyboard
    // resetButton.addEventListener("keyup", function(resetForm) {
    // // Cancel the default action, if needed
    // event.preventDefault();
    // // // Number 13 is the "Enter" key on the keyboard
    // if (event.keyCode === 13) {
    //   // Trigger the getWeather function by enter key
    //   resetForm();
  //   // }
  // });

// Output variables
var output = document.getElementById('output');
var cityOutput = document.getElementById('cityOutput');
var tempK = document.getElementById('temperatureOutputK');
var tempF = document.getElementById('temperatureOutputF');
var tempC = document.getElementById('temperatureOutputC');
var condition = document.getElementById('condition');
var weatherImage = document.getElementById('weatherImage');

// Error variables
var error = document.getElementById('error');
var errorMessage = document.getElementById('errorMessage');
// api variables
// uniniated variable for api request
var apiRequest;
// variable for my openweatherMap API access
var appId = "4363e3e1747e40f10b2355eee16763f6";


// function for retrieving information from api
function getWeather() {
	// Set up url for fetching weather data.
	var url= "http://api.openweathermap.org/data/2.5/weather?zip=<zipCode>&us&appid=<appId>";

	// zipcode from input is assigned to api url
	url = url.replace("<zipCode>", zipCode.value);
	// my api id replaces variable in api url
	url = url.replace("<appId>", appId);
	// Code that fetches data from the API URL and stores it in results.
	// creates a new instance of apiRequest
	apiRequest = new XMLHttpRequest();
	apiRequest.onload = catchResponse;
	apiRequest.onerror = httpRequestOnError;
	apiRequest.open('get', url, true);
	apiRequest.send();
}

// sets up error response
function httpRequestOnError() {
    output.style.display = 'none';
    errorMessage.innerHTML = 'There was a problem. Try again later.'
  	error.style.display = 'block';
}

function catchResponse() {
		var response = JSON.parse(apiRequest.responseText);


		cityOutput.innerHTML = response.name;
		tempK.innerHTML = Math.round(response.main.temp) + ' K';
		tempF.innerHTML = convertKtoF(response.main.temp) + '&deg; F';
		tempC.innerHTML = convertKtoC(response.main.temp) + '&deg; C';
		condition.innerHTML = response.weather[0].description;
    displayImage(response.weather[0].description, convertKtoF(response.main.temp));

    // if status of api is not an error,
    // function prepares output to appear on html page
  	if (apiRequest.statusText === "OK") {
      error.style.display = 'none';
      output.style.display = 'block';
    }
    if (error == 'Bad Request'){
      	error.style.display = 'block';
        output.style.display = 'none';
    		errorMessage.innerHTML = apiRequest.statusText;
        // what about img display
        // resetForm();
      }
    	else {
    		error.style.display = 'block';
    		errorMessage.innerHTML = apiRequest.statusText;
        // what about img display
        output.style.display = 'none';
        // resetForm();
        displayImage(	weatherImage.src = "images/sheep-animated-gif.gif");
    	}
    }

//function to clear fields
function resetForm() {
	document.getElementById("input-form").reset();

}

// functions to calculate temperature conversions
function convertKtoF(kelvin) {
	var fahr = kelvin * (9/5) - 459.67;
	return Math.round(fahr);
}

function convertKtoC(kelvin) {
	var cel = kelvin - 273.15;
	return Math.round(cel);
}

// function to display matching image
function displayImage(condition, tempF) {
	// tries to match to either condition first
	if(condition.includes('rain')){
		weatherImage.src = "images/rain.jpg";
		}
	else if (condition.includes('thunderstorm')){
		weatherImage.src = "images/thunderstorm.jpg";
	}
	else if ((condition.includes('overcast')) || (condition.includes('cloudy')) || (condition.includes('clouds'))){
		weatherImage.src = "images/cloudy.jpeg";
  }
    else if (condition.includes('mist')){
  		weatherImage.src = "images/mist.jpg";
	}
  else if (condition.includes('drizzle')){
    weatherImage.src = "images/drizzle.jpg";
  }
  else if (condition.includes('haze')){
    weatherImage.src = "images/Hazy-weather.jpg";
  }
	else if (condition.includes('snow')){
		weatherImage.src = "images/snow-car.jpeg";
		}
	else if (condition.includes('clear')){
		weatherImage.src = "images/perfectweather.jpg";
		}
 // if neither condition above matches,
 // image will be determined by temperature
	else if (tempF > 85 && !condition.includes('rain')) {
		weatherImage.src = "images/hot-sun.jpg";
		}
	else if ((tempF > 65 && tempF < 85 || condition.includes('clear sky')) && !condition.includes('rain')) {
		weatherImage.src = "images/perfectweather.jpg";
		}
	else if (tempF < 32 || !condition.includes('snow')) {
		weatherImage.src = "images/freezing-cold.jpeg";
	// else if (errorMessage)
  }else {
		weatherImage.src = "images/sheep-animated-gif.gif";
		// weatherImage.src="http://bestanimations.com/Animals/Mammals/sheep-animated-gif.gif";
	}
}
