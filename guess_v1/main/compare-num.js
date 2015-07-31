'use strict';
function CompareNumber(){

}
CompareNumber.prototype.compare = function(answer,input){
	var _answer = answer+'';
	var _input = input+'';
	var _answerAttr = [];
	var _inputAttr = [];
   var a = 0;
   var b = 0;
   var x = [];
	for( var i = 0; i <  _answer.length; i++){
		_answerAttr.push(_answer.charAt(i));
		_inputAttr.push(_input.charAt(i));
	}

	for(var j =  0; j <  _answerAttr.length; j++){
       x = this.compareA(_answerAttr[j],_inputAttr,j);
       a += x[0];
       b += x[1];
	}
	return a+'A'+b+'B';

};

CompareNumber.prototype.compareA = function(num,_inputAttr,j){
	var b = 0 , a = 0;
	var temp = [];
	for(var i = 0; i < _inputAttr.length; i++){
       if(num ===  _inputAttr[i]){
       	  b++;
          if( i === j){
       	    a++;
				  b--;
          }
         break;
       }
	}
	temp.push(a);
	temp.push(b);
	return temp;
};
module.exports = CompareNumber;
