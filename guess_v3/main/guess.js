'use strict';

var AnswerGenerator  = require('../../guess_v2/main/random.js');
var CompareNumber = require('../../guess_v1/main/compare-num.js');


  function Guess(answerGenerator,compareNumber ){

    this.randomString = answerGenerator._random();
    this.compareNumber = compareNumber;
}
Guess.prototype._guess = function(input){


  return this.compareNumber.compare(input,this.randomString);


};

  module.exports = Guess;
