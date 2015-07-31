'use strict';
function AnswerGenerator(random){
  this.random = random;
}
AnswerGenerator.prototype._random = function(){
    var y;
    var m ='';
    var flag = 0;
    var temp = [];
    for( var x = 0; x < 4 ; x++) {
        y = this.random()*10;
        for(var i = 0; i < temp.length; i++){
           if(temp[i] === parseInt(y)) {
            flag = 1;
            break;
           }
        }
        if(flag === 1){
            x--;
            flag = 0;
            continue;
        }
        temp.push(parseInt(y));
    }
    for(var j = 0; j < temp.length; j++){
       m += temp[j];
    }
    return parseInt(m);
};
  module.exports = AnswerGenerator;
