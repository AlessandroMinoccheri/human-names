'use strict';
var uniqueRandomArray = require('unique-random-array');
var femaleHumanNamesEn = require('./female-human-names-en.json');
var maleHumanNamesEn = require('./male-human-names-en.json');
var allHumanNamesEn = [];

var femaleHumanNamesIt = require('./female-human-names-it.json');
var maleHumanNamesIt = require('./male-human-names-it.json');
var allHumanNamesIt = [];

femaleHumanNamesEn.forEach(function (el, i) {
    allHumanNamesEn.push(el, maleHumanNamesEn[i]);
});

femaleHumanNamesIt.forEach(function (el, i) {
    allHumanNamesIt.push(el, maleHumanNamesIt[i]);
});

exports.femaleEn = femaleHumanNamesEn;
exports.maleEn = maleHumanNamesEn;
exports.allEn = allHumanNamesEn;

exports.femaleIt = femaleHumanNamesIt;
exports.maleIt = maleHumanNamesIt;
exports.allIt = allHumanNamesIt;

exports.femaleRandomEn = uniqueRandomArray(femaleHumanNamesEn);
exports.maleRandomEn = uniqueRandomArray(maleHumanNamesEn);
exports.allRandomEn = uniqueRandomArray(allHumanNamesEn);

exports.femaleRandomIt = uniqueRandomArray(femaleHumanNamesIt);
exports.maleRandomIt = uniqueRandomArray(maleHumanNamesIt);
exports.allRandomIt = uniqueRandomArray(allHumanNamesIt);
