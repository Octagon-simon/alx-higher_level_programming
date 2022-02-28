#!/usr/bin/node
const ary = process.argv.slice(2);
const arg = parseInt(ary[0]);
if (!Number.isInteger(arg)) {
  console.log('Missing number of occurences');
} else {
  let i = 0;
  while (i < arg) {
    console.log('C is fun');
    i++;
  }
}
