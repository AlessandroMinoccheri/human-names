#!/usr/bin/env node
'use strict';
var meow = require('meow');
var humanNames = require('./');

var cli = meow({
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
        '  --lang  lang of name: en  Default: en'
    ].join('\n')
});

var type = cli.flags.type || 'all';
var lang = cli.flags.lang || 'En';
console.log(cli.flags.all ? humanNames[type].join('\n') : humanNames[type + 'Random' + lang]());
