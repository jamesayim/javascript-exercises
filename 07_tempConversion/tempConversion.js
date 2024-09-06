const convertToCelsius = function(fahrenheit) {
	const celcius = (fahrenheit - 32) * 5/9;
	return Math.ceil(celcius * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
	const fahrenheit = (celcius * 9/5) + 32;
	return Math.ceil(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
