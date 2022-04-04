
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var Number1 = readlineSync.question('Number 1? ');

// Handle the secret text (e.g. password).
var Number2 = readlineSync.question('Number 2? ');

console.log('Answer without parseInt() = ');
console.log( Number1 + Number2 )

console.log('Answer =');
console.log(( parseInt(Number1) + parseInt(Number2) ))