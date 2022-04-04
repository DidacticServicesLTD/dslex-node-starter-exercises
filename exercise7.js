// this wont work, unless you run : 
// npm install chalk 

import chalk from 'chalk'
import readlineSync from 'readline-sync'
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
let response1 = 'Hi ' + userName + '!'
console.log(chalk.blue(response1));
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ');
let response2 = 'Oh, ' + userName + ' loves ' + favFood + '!'
console.log(chalk.blue(response2));