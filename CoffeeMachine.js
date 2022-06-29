// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

//suprimentos

let money =550;
let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let exitLoop = true;


console.log();

while(exitLoop){
    let action = input("Write action (buy, fill, take, remaining, exit):");
    switch(action) {
        case "buy":
            buy();
            console.log("I have enough resources, making you a coffee!");
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            printSupply();
            break;
        case "exit":
            exitLoop = false;
            break;
    }
}

console.log();


function printSupply(){
    console.log("The coffee machine has:");
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffee} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`$${money} of money`);
}


function buy() {
    let product = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")
    switch(product){
        case '1':
            missing = testeSupply(250, 0 , 16);
            
            if(missing == 0){
                water = water - 250;
                coffee = coffee - 16;
                money = money + 4;
                cups--;
                console.log("I have enough resources, making you a coffee!")
            } else {
                console.log(`Sorry, not enough ${missing}!`)
            }
            
            break;

        case '2':
            missing = testeSupply(350, 75 , 20);
            
            if(missing == 0){
                water = water - 350;
                milk = milk - 75;
                coffee = coffee - 20;
                money = money + 7;
                cups--;
                console.log("I have enough resources, making you a coffee!")
            } else {
                console.log(`Sorry, not enough ${missing}!`)
            }
            
            break;
        
        case '3':
             missing = testeSupply(200, 100 , 12);
            
            if(missing == 0){
                water = water - 200;
                milk = milk - 100;
                coffee = coffee - 12;
                money = money + 6;
                cups--;
                console.log("I have enough resources, making you a coffee!")
            } else {
                console.log(`Sorry, not enough ${missing}!`)
            }
            
            break;
    }
}

function fill() {
    let waterFill = input("Write how many ml of water you want to add:");
    let milkFill = input("Write how many ml of milk you want to add:");
    let coffeeFill = input("Write how many grams of coffee beans you want to add:");
    let cupsFill = input("Write how many disposable coffee cups you want to add:");

    water = Number(water) + Number(waterFill);
    milk = Number(milk) + Number(milkFill);
    coffee = Number(coffee) + Number(coffeeFill);
    cups = Number(cups) + Number(cupsFill);
}

function take() {
    console.log(`I gave you ${money}`);
    money = 0;
}

function testeSupply(waterNeed, milkNeed, coffeeNeed) {
    if(waterNeed > water)
        return "water";
    if(milkNeed > milk)
        return "milk";
    if(coffeeNeed > coffee)
        return "coffee";
    if(cups == 0)
        return "disposable cups";
    else
        return 0;
}

