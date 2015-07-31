'use strict';
var AnswerGenerator = require('./main/random.js');

var rannum= new AnswerGenerator(Math.random);
var result =rannum._random();
console.log(result);
