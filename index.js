'use strict';
var uniqueRandomArray = require('unique-random-array');
var femaleHumanNamesEn = require('./female-human-names-en.json');
var maleHumanNamesEn = require('./male-human-names-en.json');
var allHumanNamesEn = [];

var femaleHumanNamesIt = require('./female-human-names-it.json');
var maleHumanNamesIt = require('./male-human-names-it.json');
var allHumanNamesIt = [];

var femaleHumanNamesFr = require('./female-human-names-fr.json');
var maleHumanNamesFr = require('./male-human-names-fr.json');
var allHumanNamesFr = [];

femaleHumanNamesEn.forEach(function (el, i) {
    if((maleHumanNamesEn[i] != undefined) && (maleHumanNamesEn[i] != 'undefined')){
        allHumanNamesEn.push(el, maleHumanNamesEn[i]);
    }
});

femaleHumanNamesIt.forEach(function (el, i) {
    if((maleHumanNamesIt[i] != undefined) && (maleHumanNamesIt[i] != 'undefined')){
        allHumanNamesIt.push(el, maleHumanNamesIt[i]);
    }
});

femaleHumanNamesFr.forEach(function (el, i) {
    if((maleHumanNamesFr[i] != undefined) && (maleHumanNamesFr[i] != 'undefined')){
        allHumanNamesFr.push(el, maleHumanNamesFr[i]);
    }
});

exports.femaleEn = femaleHumanNamesEn;
exports.maleEn = maleHumanNamesEn;
exports.allEn = allHumanNamesEn;

exports.femaleIt = femaleHumanNamesIt;
exports.maleIt = maleHumanNamesIt;
exports.allIt = allHumanNamesIt;

exports.femaleFr = femaleHumanNamesFr;
exports.maleFr = maleHumanNamesFr;
exports.allFr = allHumanNamesFr;

exports.femaleRandomEn = uniqueRandomArray(femaleHumanNamesEn);
exports.maleRandomEn = uniqueRandomArray(maleHumanNamesEn);
exports.allRandomEn = uniqueRandomArray(allHumanNamesEn);

exports.femaleRandomIt = uniqueRandomArray(femaleHumanNamesIt);
exports.maleRandomIt = uniqueRandomArray(maleHumanNamesIt);
exports.allRandomIt = uniqueRandomArray(allHumanNamesIt);

exports.femaleRandomFr = uniqueRandomArray(femaleHumanNamesFr);
exports.maleRandomFr = uniqueRandomArray(maleHumanNamesFr);
exports.allRandomFr = uniqueRandomArray(allHumanNamesFr);
