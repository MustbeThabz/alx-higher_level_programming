#!/usr/bin/node

const { dict } = require('./101-data');

const invertedDict = {};
for (let [key, value] of Object.entries(dict)) {
  if (!invertedDict[value]) {
    invertedDict[value] = [key];
  } else {
    invertedDict[value].push(key);
  }
}

console.log(invertedDict);

