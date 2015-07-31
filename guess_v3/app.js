'use strict';
var Guess = require('./main/guess.js');
var AnswerGenerator  = require('../guess_v2/main/random.js');
var CompareNumber = require('../guess_v1/main/compare-num.js');


var answerGenerator  = new AnswerGenerator(Math.random);
var compareNumber = new CompareNumber();
var guess = new Guess(answerGenerator,compareNumber);
var result = guess._guess('1287');
console.log(result);
