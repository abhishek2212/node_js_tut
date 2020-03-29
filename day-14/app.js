//Basic Routing
const http = require('http');
const fs = require('fs');
const hostname='127.0.0.1';
const port=3000;

const server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    
    if(req.url==='/home'||req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+ '/index.html').pipe(res);
    }else if(req.url==='/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url==='/api/ninjas'){
        var ninjas=[{name:'abhi',age:23},{name:'alok',age:22}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});


