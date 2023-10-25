(() => {
    'use strict';

    // Create an array of months for printing dates
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    // Create the date corresponding to your birthday using the JavaScript Date object.
    const jsBirthday = new Date(1970, 7, 2);

    // Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
    // See link below for methods needed:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter
    console.log(`Here is my birthday using JavaScript: ${months[jsBirthday.getMonth()]} ${jsBirthday.getDate()}, ${jsBirthday.getFullYear()}.`);

    // some other stuff
    // create a day of the week array
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(`Born on a ${days[jsBirthday.getDay()]}.`);

    const daysPassed = (Date.now() - jsBirthday) / (24*60*60*1000);
    const weeksPassed = daysPassed / 7;
    const monthsPassed = daysPassed / (365.25 / 12);
    const yearsPassed = daysPassed / 365.25;
    console.log("Days passed: " + daysPassed.toFixed(1) + "\n" +
        "Weeks passed: " + weeksPassed.toFixed(1) + "\n" +
        "Months passed: " + monthsPassed.toFixed(1) + "\n" +
        "Years passed: " + yearsPassed.toFixed(1)
    );

})();


