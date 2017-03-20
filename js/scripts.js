var add = function(number1, number2) {
	return number1 + number2
};

var number1 = parseFloat(prompt("enter a number to add"));
var number2 = parseFloat(prompt("enter another number to add"));
var sum = add (number1, number2);
alert (sum);

var subtract = function(number1, number2) {
	return number1 - number2
};

var number1 = parseFloat(prompt("enter a number to subtract"));
var number2 = parseFloat(prompt("enter another number to subtract"));
var difference = subtract (number1, number2);
alert (difference);

var multiply = function(number1, number2) {
	return number1 * number2
};

var number1 = parseFloat(prompt("enter a number to multiply"));
var number2 = parseFloat(prompt("enter another number to multiply"));
var product = multiply (number1, number2);
alert (product);

var divide = function(number1, number2) {
	return number1 / number2
};

var number1 = parseFloat(prompt("enter a number to divide"));
var number2 = parseFloat(prompt("enter another number to divide"));
var quotient = divide (number1, number2);
alert (quotient);

// BMI converter

var height = parseFloat(prompt("Enter your height in meters"));
var weight = parseFloat(prompt("Enter your weight in kilograms"));

var BMI= function(weight, height) {
	return weight / (height * height)
}

var answer = BMI (weight, height);
alert(answer);

// temperature converter

var celsius = parseFloat(prompt("Enter a temperature in celsius"));

var celsiusToFahrenheit = function(celsius, fahrenheit) {
	return celsius * 9 / 5 + 32;
};

var answer = celsiusToFahrenheit (celsius, fahrenheit);
alert(answer);

var fahrenheit = parseFloat(prompt("Enter a temperature in Fahrenheit"));

var fahrenheitToCelsius = function(celsius, fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

var answer = fahrenheitToCelsius(celsius, fahrenheit);

alert(answer);
