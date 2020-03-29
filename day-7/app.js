var fs=require('fs');
//fs.unlink('read.txt');//delete file
// fs.mkdirSync('stuff2');//create dir
//fs.rmdirSync('stuff');//remove dir
//=====================================
// fs.mkdir('stuff',function(){
//     fs.readFile('read.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/write.txt',data);

//     });
// });

//===============================
fs.unlink('./stuff/writeMe.txt',function(err){
    if(err){
        return console.log(err);
    }
    fs.rmdir('stuff2');
});