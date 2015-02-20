# fj-yc

[![Build Status](https://travis-ci.org/fp-js/fj-yc.svg)](https://travis-ci.org/fp-js/fj-yc) [![npm version](https://badge.fury.io/js/fj-yc.svg)](http://badge.fury.io/js/fj-yc)
> The Applicative Order Y Combinator.

## Installation

`npm install fj-yc --save`

## Usage

```js
var YC = require('fj-yc');
let fact = YC((fac) => (n) => n <= 2 ? n : n * fac(n - 1));
fact(5) // 120;
```
