const express=require('express');
const app =express();
const hostname='127.0.0.1';
const port=3000;

app.get('/',(req,res)=>{
  res.send('This is home page');
});

app.get('/contact', (req, res) => {
  res.send('This is contact page');
});

// app.get('/profile/:id',(req,res)=>{
//   res.send('You request to see a profile with the id of '+ req.params.id);
// });

app.get('/profile/:name', (req, res) => {
  res.send('You request to see a profile with the name of ' + req.params.name);
});

app.listen(port,hostname,()=>{
  console.log(`Server runnong at http://${hostname}:${port}/`);
});