//Pipes
var http = require('http');
var fs = require('fs');

var server=http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
    //var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');
    //myReadStream.pipe(myWriteStream);
    myReadStream.pipe(res);
    //res.end('hey tiwari');
});
server.listen(3000,'127.0.0.1');
console.log('Server are creating on port 3000');


