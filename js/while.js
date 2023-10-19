// a while loop for powers of 2
console.log("-------------------");
let i = 1;
while(i <= 16){
    console.log(2**i);
    i++;
}

// random number generator
function randomNumber(from,through) {
    return from + (Math.floor(Math.random() * (through-from+1)));
}

// ice cream cones - 1st how many do I have - 2nd clients buy and keep track
let conesToSell = randomNumber(50,100)
let customerRequest = 0
let customerNumber = 0;
let continueSelling = true;
do{
    customerNumber++;
    customerRequest = randomNumber(1,5);
    if((conesToSell >= conesToSell - customerRequest) && (conesToSell - customerRequest >= 0)){
        console.log(`Customer #${customerNumber}: ${customerRequest} cone(s) sold - ${conesToSell - customerRequest} remaining.`);
        conesToSell = conesToSell - customerRequest;
    } else {
        console.log(`Cannot sell you ${customerRequest} cones I only have ${conesToSell}.`);
        continueSelling = false;
    }
}while(continueSelling)
