//normal function statement
/*
function sayHi(){
    console.log("hi");
}
sayHi();
*/
function callFunction(fun){
    fun();
}

//function expressions
//this is anonymous function
var sayBye=function(){
    console.log("Bye");
};
//sayBye();
callFunction(sayBye);