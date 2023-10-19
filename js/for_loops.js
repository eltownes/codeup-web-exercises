// a multiplication table
console.log("-------------------");
function showMultiplicationTable(val1){
    for (let i = 1; i <= 10; i++) {
        console.log(`${val1} x ${i} = ${val1 * i}`);
    }
}
showMultiplicationTable(7);

// a random number generator
function randomNumber(from,through) {
    return from + (Math.floor(Math.random() * (through-from+1)));
}

// 10 nums and print whether it is even or odd
console.log("-------------------");
for (let i = 0, tmpNum = 0, msg = ""; i < 10; i++) {
    // process.stdout.write(`${randomNumber(1,10)} `);
    tmpNum = randomNumber(20,200);
    msg = (tmpNum % 2 === 0 ? "even" : "odd");
    console.log(`${tmpNum} is ${msg}`);
}

// create diagonal output
console.log("-------------------");
for (let i = 1, msg; i <= 9; i++){
    msg = "";
    for (let j = 1; j <= i; j++){
        msg += i;
    }
    console.log(msg);
}

// countdown from 100 down to 5 by step 5
console.log("-------------------");
for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}
