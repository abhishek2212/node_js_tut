// This example shows time out after every 1000 millisecond without setting a time interval. This example uses the recursion property of a function.

var recursive=function(){
  console.log('Hey! 1000 millisecond completed!..');
  setTimeout(recursive,1000);
};
recursive();