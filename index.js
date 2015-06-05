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

var femaleHumanNamesDe = require('./female-human-names-de.json');
var maleHumanNamesDe = require('./male-human-names-de.json');
var allHumanNamesDe = [];

var femaleHumanNamesEs = require('./female-human-names-es.json');
var maleHumanNamesEs = require('./male-human-names-es.json');
var allHumanNamesEs = [];

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

femaleHumanNamesDe.forEach(function (el, i) {
    if((maleHumanNamesDe[i] != undefined) && (maleHumanNamesDe[i] != 'undefined')){
        allHumanNamesDe.push(el, maleHumanNamesDe[i]);
    }
});

femaleHumanNamesEs.forEach(function (el, i) {
    if((maleHumanNamesEs[i] != undefined) && (maleHumanNamesEs[i] != 'undefined')){
        allHumanNamesEs.push(el, maleHumanNamesEs[i]);
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

exports.femaleDe = femaleHumanNamesDe;
exports.maleDe = maleHumanNamesDe;
exports.allDe = allHumanNamesDe;

exports.femaleEs = femaleHumanNamesEs;
exports.maleEs = maleHumanNamesEs;
exports.allEs = allHumanNamesEs;

exports.femaleRandomEn = uniqueRandomArray(femaleHumanNamesEn);
exports.maleRandomEn = uniqueRandomArray(maleHumanNamesEn);
exports.allRandomEn = uniqueRandomArray(allHumanNamesEn);

exports.femaleRandomIt = uniqueRandomArray(femaleHumanNamesIt);
exports.maleRandomIt = uniqueRandomArray(maleHumanNamesIt);
exports.allRandomIt = uniqueRandomArray(allHumanNamesIt);

exports.femaleRandomFr = uniqueRandomArray(femaleHumanNamesFr);
exports.maleRandomFr = uniqueRandomArray(maleHumanNamesFr);
exports.allRandomFr = uniqueRandomArray(allHumanNamesFr);

exports.femaleRandomDe = uniqueRandomArray(femaleHumanNamesDe);
exports.maleRandomDe = uniqueRandomArray(maleHumanNamesDe);
exports.allRandomDe = uniqueRandomArray(allHumanNamesDe);

exports.femaleRandomEs = uniqueRandomArray(femaleHumanNamesEs);
exports.maleRandomEs = uniqueRandomArray(maleHumanNamesEs);
exports.allRandomEs = uniqueRandomArray(allHumanNamesEs);
