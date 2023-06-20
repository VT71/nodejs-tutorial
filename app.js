// npm install -g <packageName>
// global dependency - use in any project

// npm i <packageName>
// local dependency - use it only in this project

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, pres enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(`New items: ${newItems}`);
