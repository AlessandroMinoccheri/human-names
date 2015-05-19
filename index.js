'use strict';
var uniqueRandomArray = require('unique-random-array');
var femaleHumanNamesEn = require('./female-human-names-en.json');
var maleHumanNamesEn = require('./male-human-names-en.json');
var allHumanNamesEn = [];

femaleHumanNamesEn.forEach(function (el, i) {
    allHumanNamesEn.push(el, maleHumanNamesEn[i]);
});

exports.femaleEn = femaleHumanNamesEn;
exports.maleEn = maleHumanNamesEn;
exports.allEn = allHumanNamesEn;

exports.femaleRandomEn = uniqueRandomArray(femaleHumanNamesEn);
exports.maleRandomEn = uniqueRandomArray(maleHumanNamesEn);
exports.allRandomEn = uniqueRandomArray(allHumanNamesEn);
