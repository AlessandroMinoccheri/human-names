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
        '  $ dog-names --all --type male',
        '  John',
        '  Bart',
        '  ...',
        '',
        'Options',
        '  --all   Get all names instead of a random name',
        '  --type  Type of name: female|male|all  Default: all'
    ].join('\n')
});

console.log(cli.flags.all ? humanNames.all.join('\n') : humanNames.random());
