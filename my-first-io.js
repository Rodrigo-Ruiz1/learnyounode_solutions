const fs = require('fs');

const answer = fs.readFileSync(process.argv[2]).toString().split('\n').length;

// const answerLines = answer.split('\n');

// console.log(answerLines.length -= 1)

console.log(answer - 1)