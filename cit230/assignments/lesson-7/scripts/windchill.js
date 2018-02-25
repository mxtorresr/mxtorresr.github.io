/*
formula to calculate windchill factor

f = 35.74 + 0.6215 t - 35.75 s ^0.16 + 0.4275 t s^0.16 
f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.
*/
var high = 90;
var low = 66;
var t = (high + low) / 2;
var s = 5;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById("f").innerHTML = Math.round(f) + "&deg;F";