const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html');
});


app.get('/profile/:name', (req, res) => {
  var data={age:23,job:'Engineer',hobbies:['eating','cooking','dancing','listening to music']};
  res.render('profile',{person:req.params.name,data:data});
});

app.listen(port, hostname, () => {
  console.log(`Server runnong at http://${hostname}:${port}/`);
});