'use strict';
const uniqueRandomArray = require('unique-random-array');
const femaleHumanNamesEn = require('./data/female-human-names-en.json');
const maleHumanNamesEn = require('./data/male-human-names-en.json');
let allHumanNamesEn = [];

const femaleHumanNamesIt = require('./data/female-human-names-it.json');
const maleHumanNamesIt = require('./data/male-human-names-it.json');
let allHumanNamesIt = [];

const femaleHumanNamesFr = require('./data/female-human-names-fr.json');
const maleHumanNamesFr = require('./data/male-human-names-fr.json');
let allHumanNamesFr = [];

const femaleHumanNamesDe = require('./data/female-human-names-de.json');
const maleHumanNamesDe = require('./data/male-human-names-de.json');
let allHumanNamesDe = [];

const femaleHumanNamesEs = require('./data/female-human-names-es.json');
const maleHumanNamesEs = require('./data/male-human-names-es.json');
let allHumanNamesEs = [];

const femaleHumanNamesNl = require('./data/female-human-names-nl.json');
const maleHumanNamesNl = require('./data/male-human-names-nl.json');
let allHumanNamesNl = [];

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

femaleHumanNamesNl.forEach(function (el, i) {
    if((maleHumanNamesNl[i] != undefined) && (maleHumanNamesNl[i] != 'undefined')){
        allHumanNamesNl.push(el, maleHumanNamesNl[i]);
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

exports.femaleNl = femaleHumanNamesNl;
exports.maleNl = maleHumanNamesNl;
exports.allNl = allHumanNamesNl;

exports.femaleRandom = uniqueRandomArray(femaleHumanNamesEn);
exports.maleRandom = uniqueRandomArray(maleHumanNamesEn);
exports.allRandom = uniqueRandomArray(allHumanNamesEn);

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

exports.femaleRandomNl = uniqueRandomArray(femaleHumanNamesNl);
exports.maleRandomNl = uniqueRandomArray(maleHumanNamesNl);
exports.allRandomNl = uniqueRandomArray(allHumanNamesNl);
