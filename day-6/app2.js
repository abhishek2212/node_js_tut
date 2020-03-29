var fs = require('fs');
//non-blocking methodes
// Asyncronous read
fs.readFile('read.txt', 'utf8',function(err,data){
    if(err){
        return console.log(err);
    }
    fs.writeFile('writeMe3.txt',data,function(err,data){
        if(err){
            return console.log(err);
        }
        // console.log(data);
    });
    // console.log(data);
});
