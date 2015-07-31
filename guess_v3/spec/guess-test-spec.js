'use strict';

var AnswerGenerator  = require('../../guess_v2/main/random.js');
var CompareNumber = require('../../guess_v1/main/compare-num.js');
var Guess = require('../main/guess.js');
describe('Guess',function(){
	describe('#_guess()',function(){

	  it('can run rightly',function(){

			var answerGenerator  = new AnswerGenerator(Math.random);

			spyOn(answerGenerator,'_random').and.callFake(function(){

			  return '1234';
			});

			var 	compareNumber = new CompareNumber();

			spyOn(compareNumber,'compare').and.callFake(function(){

				return '2A0B';
			});

			var 	guess = new Guess(answerGenerator,compareNumber);

				expect(guess._guess('1638')).toBe('2A0B');


      });

  });
});
