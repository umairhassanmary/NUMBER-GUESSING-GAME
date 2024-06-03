#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWellcome to Umair Hassan Mary -  CLI Number Guessing Game\n")

const randomnumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);

if (answers.userGuessedNumber === randomnumber){
    console.log("Congratulation ! You guess a correct number.");

}
else{
    console.log("Sorry, You guess a wrong number");
}