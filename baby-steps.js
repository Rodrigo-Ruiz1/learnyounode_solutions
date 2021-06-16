'use strict';

let answer = 0;

for (let i = 2; i < process.argv.length; i++) {
    // Add the numbers together and update the value of answer
    answer = answer + Number(process.argv[i]);
    // Another option 
    // answer = answer + parseInt(process.argv[i]);
    // Third option
    // answer += Number(process.argv[i]);
    // Fourth option
    // answer += +process.argv[i];
}

console.log(answer)