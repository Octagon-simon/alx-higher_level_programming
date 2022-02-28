#!/usr/bin/node
const ary = process.argv.slice(2);
const val1 = parseInt(ary[0]);
const val2 = parseInt(ary[1]);
function add (a, b) {
  return (a + b);
}
console.log(add(val1, val2));
