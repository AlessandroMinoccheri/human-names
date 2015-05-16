'use strict';
var uniqueRandomArray = require('unique-random-array');
var femaleHumanNames = require('./female-human-names.json');
var maleHumanNames = require('./male-human-names.json');

var allHumanNames = [];

femaleHumanNames.forEach(function (el, i) {
    allHumanNames.push(el, maleHumanNames[i]);
});

exports.female = femaleHumanNames;
exports.male = maleHumanNames;
exports.all = allHumanNames;

exports.femaleRandom = uniqueRandomArray(femaleHumanNames);
exports.maleRandom = uniqueRandomArray(maleHumanNames);
exports.allRandom = uniqueRandomArray(allHumanNames);
