//serving JSON DATA
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    // var myObj={
    //     name:'Abhi',
    //     job:'ninja',
    //     age:23
    // };
    // res.end(JSON.stringify(myObj));
    var myReadStream=fs.createReadStream(__dirname +'/user.json','utf8');
    myReadStream.pipe(res);




});

server.listen(3000, '127.0.0.1');
console.log('Server are creating on port 3000');


