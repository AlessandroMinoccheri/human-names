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
    t.end();
});