#!/usr/bin/env node
'use strict';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const meow = require('meow');
const humanNames = require('./');

const cli = meow({
    help: [
        'Examples',
        '  $ human-names',
        '  John',
        '',
        '  $ human-names --all --type male',
        '  John',
        '  Bart',
        '  ...',
        '  $ human-names --lang en',
        '  John',
        '',
        'Options',
        '  --all   Get all names instead of a random name',
        '  --type  Type of name: female|male|all  Default: all',
        '  --lang  lang of name: en|it|fr|de|es|nl  Default: en'
    ].join('\n')
});

const type = cli.flags.type || 'all';
const lang = cli.flags.lang || 'En';
console.log(cli.flags.all ? humanNames[type + lang.capitalize()].join('\n') : humanNames[type + 'Random' + lang.capitalize()]());
