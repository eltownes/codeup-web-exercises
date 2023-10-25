(function() {
    "use strict";

    // create a circle object
    const circle = {
        radius: 3,
        getArea: function () {
            return Math.PI * Math.pow(this.radius, 2);
        },
        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            const area= doRounding ?  Math.round(this.getArea()) : this.getArea();
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // copy circle into circle2 object and set that to 7
    const circle2 = Object.assign({}, circle);
    circle2.radius = 7;
    circle2.logInfo(false);
    circle2.logInfo(true);

})();
