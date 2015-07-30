'use strict';

var AnswerGenerator  = require('../main/random.js');
describe('CompareNumber',function(){
	describe('#_random()',function(){
		var answerGenerator;
      var result;
		beforeEach(function(){
			answerGenerator  = new AnswerGenerator ();
         result = answerGenerator._random();
		});

    it('is a number',function(){

           expect(isNaN(result)).toBe(false);

      });
      it('is a  four number',function(){
         result = result +'';
         expect(result.length).toBe(4);

        });

    it('is a   unrepeated four number',function(){
           result = result +'';
           var temp = [];
           var index = [];
           var m;
           var flag = 0;
           for( var i = 0; i <  result.length; i++){
             temp.push(result.charAt(i));
           }

             for(var y =  0; y <  temp.length; y++){
                 m = result.indexOf(temp[y]);
                 
               
               for(var j =  0; j <  index.length; j++){
                 if(m !== -1&&m ===  index[j]){
                    flag = 1;
                     break;
                 }
                 }
                 if(flag === 0){ 
                   index.push(m);
                 }
               
             }

           expect(index.length).toBe(4);

          });
  });
});
