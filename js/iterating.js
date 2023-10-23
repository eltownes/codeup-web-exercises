(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ["Alice","Bob","Charlie","Dianne"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(`There are ${names.length} names in the 'names' array.`);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("-----for loop-----");
    for (let i=0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("-----for of loop-----");
    for (name of names) {
        console.log(name);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("-----forEach loop-----");
    names.forEach((name, index) => {
        console.log(`The name at index ${index} is ${name}.`);
    });

    /**
     * TODO:array
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log("-----3 functions-----");
    const numArray = [1, 2, 3, 4, 5];

    function first(numArray) {
        return numArray[0];
    }

    function second(numArray) {
        return numArray[1];
    }

    function last(numArray) {
        return numArray[numArray.length - 1];
    }

    console.log(first(numArray));
    console.log(second(numArray));
    console.log(last(numArray));

})();
