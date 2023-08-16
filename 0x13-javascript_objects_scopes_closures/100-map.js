#!/usr/bin/node
const list = require('./100-data.js');

const multiplyByIndex = (value, index) => {
  return value * index;
};

const newList = list.map(multiplyByIndex);

console.log('The original list is:');
console.log(list);

console.log('The new list is:');
console.log(newList);

