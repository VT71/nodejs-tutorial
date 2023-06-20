const { readFileSync, writeFileSync } = require('fs');
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(`First file: ${first}`);
console.log(`Second file: ${second}`);

writeFileSync(
    './content/result-sync.txt',
    `Here is the new result ${first}, ${second}`,
    { flag: 'a' }
);
console.log('Done with the task');
console.log('Starting the next one');
