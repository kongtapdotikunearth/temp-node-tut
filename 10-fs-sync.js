const {readFileSync, writeFileSync} = require('fs');

//read
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

console.log(first + second);

//writeFileSync
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag : 'a'});