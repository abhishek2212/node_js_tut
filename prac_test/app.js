const http=require('http');

const hostname='127.0.0.1';
const port=3000;

const server=http.createServer(function(req,res){
  console.log('request was made: '+req.url);
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello abhishek');
});

server.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});