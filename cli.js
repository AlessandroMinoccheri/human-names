#!/usr/bin/env node
'use strict';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const humanNames = require('./');

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
    console.log([
        'Usage',
        '  $ human-names [options]',
        '',
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
    ].join('\n'));
    process.exit(0);
}

function getFlag(name) {
    const idx = args.indexOf('--' + name);
    if (idx !== -1 && args[idx + 1] && !args[idx + 1].startsWith('--')) {
        return args[idx + 1];
    }
    return null;
}

const all  = args.includes('--all');
const type = getFlag('type') || 'all';
const lang = getFlag('lang') || 'En';

console.log(all ? humanNames[type + lang.capitalize()].join('\n') : humanNames[type + 'Random' + lang.capitalize()]());
