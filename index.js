#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log("\n\tWellcome to Umair Hassan Mary -  CLI Number Guessing Game\n");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry, You guess a wrong number");
}
