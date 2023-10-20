// prompt for odd num - the print all between 1 and 50 - skipping the input
// have to use break and continue
console.log("-------------------");
let oddNumber
for (let i = 0, j = 0; i <= 50; i++) {

    // run this loop just once
    for (let j = 0; i === 0; j++) {
        oddNumber = parseInt(prompt("Enter an odd number between 1 and 50:"));
        if((oddNumber >=1 && oddNumber <= 50) && oddNumber % 2 === 1){
        // if ((oddNumber < 1 || oddNumber > 50) || oddNumber % 2 === 1) {
            break; // got an odd number
        }
    }

    // filter evens
    if (i % 2 === 0) {
        continue;
    }

    // filter odds and print
    if (i === oddNumber) {
        console.log(`Yikes! Skipping number: ${oddNumber}`);
    } else {
        console.log(`Here is an odd number: ${i}`);
    }
}




