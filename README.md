# human-names v1.0.12 
[![Build Status](https://travis-ci.org/AlessandroMinoccheri/human-names.svg?branch=master)](https://travis-ci.org/AlessandroMinoccheri/human-names)
[![Licensed under the MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/AlessandroMinoccheri/human-names/blob/master/LICENSE)
[![PR's Welcome](https://img.shields.io/badge/PRs%20-welcome-brightgreen.svg)](https://github.com/AlessandroMinoccheri/human-names/blob/main/CONTRIBUTING.md)
[![npm version](https://img.shields.io/npm/v/human-names.svg?style=flat)](https://www.npmjs.com/package/human-names)

Get popular human english, italian, french, deutch, spanish or dutch names.

To create this repository I have forked this project and make some edit:

https://github.com/sindresorhus/supervillains

Thanks to the author https://github.com/sindresorhus

The name lists are just JSON files and can be used wherever.

*Not accepting PRs for additional names.*


## Install

```
$ npm install --save human-names
```


## Usage

```js
const humanNames = require('human-names');

humanNames.femaleRandom();
//=> Lucy
```


## API

### .female

Type: `array`

Top female names sorted by popularity.

### .male

Type: `array`

Top male names sorted by popularity.

### .all

Type: `array`

Top names sorted by popularity.

### .femaleRandom()

Type: `function`

Random female name.

### .maleRandom()

Type: `function`

Random male name.

### .allRandom()

Type: `function`

Random name.


## CLI

```
$ npm install --global human-names
```

```
$ human-names --help

  Examples
    $ human-names
    Lucy

    $ human-names --all --type male
    Max
    John
    ...

  Options
    --all   Get all names instead of a random name
    --type  Type of name: female|male|all  Default: all
    --lang  lang of name: en|it|fr|de|es|nl  Default: en
```

## License

MIT © [Alessandro Minoccheri](http://alessandrominoccheri.com)
