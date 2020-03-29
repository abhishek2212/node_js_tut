var fs=require('fs');
//blocking methodes
// syncronous methodes
var readMe=fs.readFileSync('read.txt','utf8',function(err,data){
  return console.error(err);
});
// console.log(readMe);

// write a file
fs.writeFileSync('write2.txt',readMe);