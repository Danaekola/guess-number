'use strict';

var AnswerGenerator  = require('../../guess_v2/main/random.js');
var CompareNumber = require('../../guess_v1/main/compare-num.js');
var Guess = require('../main/guess.js');

describe("Guess",function(){

  describe('#_guess', function() {

    var  answerGenerator;
    var compareNumber;
    var guess;

    beforeEach(function(){

      var count = 0;
      spyOn(Math,'random').and.callFake(function(){
        var countNumbers = [0.1,0.1,0.2,0.3,0.4];
        return countNumbers[count++];
      });

      answerGenerator = new  AnswerGenerator(Math.random);
      compareNumber = new CompareNumber();
      guess = new Guess(answerGenerator,compareNumber);
    });

    it('shuld return 0A0B', function() {
      expect(guess._guess('6789')).toBe('0A0B');
    });

    it('shuld return 4A0B', function() {
      expect(guess._guess('1234')).toBe('4A0B');
    });

    it('shuld return 0A4B', function() {
      expect(guess._guess('4321')).toBe('0A4B');
    });
  });
});
