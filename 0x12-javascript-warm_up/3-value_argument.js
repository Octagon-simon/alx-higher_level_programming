#!/bin/node
const ary = process.argv.slice(2);
if (ary[0] === undefined) {
  console.log('No argument');
} else {
  console.log(ary[0]);
}
