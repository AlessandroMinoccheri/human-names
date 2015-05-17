'use strict';
var test = require('ava');
var humanNames = require('./');

test(function (t) {
    t.assert(humanNames.female.length > 0);
    t.assert(humanNames.male.length > 0);
    t.assert(humanNames.all.length > 0);
    t.assert(humanNames.femaleRandom());
    t.assert(humanNames.maleRandom());
    t.assert(humanNames.allRandom());
    t.assert(humanNames.allRandom() !== humanNames.allRandom());
    t.assert(humanNames.all[0] === 'Aaliyah');
    t.assert(humanNames.all[1] === 'Aaron');
    t.end();
});