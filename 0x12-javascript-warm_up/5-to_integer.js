#!/bin/node
const ary = process.argv.slice(2);
const num = parseInt(ary[0]);
if (!Number.isInteger(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
