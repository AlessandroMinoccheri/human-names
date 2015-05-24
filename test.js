'use strict';
var test = require('ava');
var humanNames = require('./');

test(function (t) {
    t.assert(humanNames.femaleEn.length > 0);
    t.assert(humanNames.maleEn.length > 0);
    t.assert(humanNames.allEn.length > 0);
    t.assert(humanNames.femaleRandomEn());
    t.assert(humanNames.maleRandomEn());
    t.assert(humanNames.allRandomEn());
    t.assert(humanNames.allRandomEn() !== humanNames.allRandomEn());
    t.assert(humanNames.allEn[0] === 'Aaliyah');
    t.assert(humanNames.allEn[1] === 'Aaron');

    t.assert(humanNames.femaleIt.length > 0);
    t.assert(humanNames.maleIt.length > 0);
    t.assert(humanNames.allIt.length > 0);
    t.assert(humanNames.femaleRandomIt());
    t.assert(humanNames.maleRandomIt());
    t.assert(humanNames.allRandomIt());
    t.assert(humanNames.allRandomIt() !== humanNames.allRandomIt());
    t.assert(humanNames.allIt[0] === 'Alessandra');
    t.assert(humanNames.allIt[1] === 'Alberto');

    t.assert(humanNames.femaleFr.length > 0);
    t.assert(humanNames.maleFr.length > 0);
    t.assert(humanNames.allFr.length > 0);
    t.assert(humanNames.femaleRandomFr());
    t.assert(humanNames.maleRandomFr());
    t.assert(humanNames.allRandomFr());
    t.assert(humanNames.allRandomFr() !== humanNames.allRandomFr());
    t.assert(humanNames.allFr[0] === 'Aaliyah');
    t.assert(humanNames.allFr[1] === 'Aaron');
    t.end();
});