// module.exports.counter==function(){};
var counter = function (arr) {
    return 'There are ' + arr.length + ' elements in this array';
};
//var adder

var adder=function(a,b){
    return `The sum of 2 number is ${a+b}`;
};

 //module.exports.pi=3.142;
var pi=3.142; 

//module.exports.counter = counter;
//module.exports.adder=adder;
//module.exports.pi=pi;

//literal notations
module.exports={
    counter:counter,
    adder:adder,
    pi:pi
};