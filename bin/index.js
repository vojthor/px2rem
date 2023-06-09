#! /usr/bin/env node

const defaultPx = 16; // 16px

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error(`\x1b[31m I can't convert non-existing number... \x1b[0m`);
  process.exit(1); //an error occurred
}
const [toConvert, pixelValue = defaultPx] = args;
let value = parseFloat(((1 / pixelValue) * toConvert).toFixed(10));

console.log(`\x1b[32m ${value % 1 != 0 ? value : value}rem \x1b[0m`); // Output it in green

process.exit(0); //no errors occurred
