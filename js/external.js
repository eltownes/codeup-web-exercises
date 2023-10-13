"use strict";

console.log("Hello from external JavaScript");

// practice alert function
alert("Welcome to my Website!");

// practice prompt function
let favColor = prompt("What is your favorite color?");
alert(`Great, ${favColor} is my favorite color too!`);

// Exercise: movie rental
let mermaidDays = parseInt(prompt("How many days would you like to rent Mermaid?"));
let brotherBear = parseInt(prompt("How many days would you like to rent Brother Bear?"));
let hercules = parseInt(prompt("How many days would you like to rent Hercules?"));
let costMoviePerDay = parseInt(prompt("How much does each movie cost per day?"));

let totalCost = costMoviePerDay * (mermaidDays + brotherBear + hercules);
alert(`Your total cost is $${totalCost}.`);

// Exercise: salary
let googlePay = parseInt(prompt("How much do you get paid at Google?"));
let googleHours = parseInt(prompt("How many hours did you work at Google?"));

let amazonPay = parseInt(prompt("How much do you get paid at Amazon?"));
let amazonHours = parseInt(prompt("How many hours did you work at Amazon?"));

let facebookPay = parseInt(prompt("How much do you get paid at Facebook?"));
let facebookHours = parseInt(prompt("How many hours did you work at Facebook?"));

let totalPay = googlePay * googleHours + amazonPay * amazonHours + facebookPay * facebookHours;
alert(`Your total pay is $${totalPay}.`);

