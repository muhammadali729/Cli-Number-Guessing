#! /usr/bin/env node

import inquirer from "inquirer"

const randomnumber = Math.floor(Math.random()*10+1);

const number = await inquirer.prompt([
{
    name : "userGuessNumber",
    type : "number",
    message : "Please guess the number between 1-10:",

},
]);

if(number.userGuessNumber === randomnumber  ){

    console.log("Congratulation!! Your Guess right number");
}

else{

    console.log("Opps!! Your Guess Wrong number");

}