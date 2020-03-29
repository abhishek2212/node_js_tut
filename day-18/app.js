const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.use('/assets',express.static('stuff'));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact',{qs:req.query});
});

app.post('/contact', urlencodedParser,(req, res) => {
  console.log(req.body);
  // res.render('contact',{qs:req.query});
  res.render('contact-success',{data:req.body});

});

app.get('/profile/:name', (req, res) => {
  var data={age:23,job:'Engineer',hobbies:['eating','cooking','dancing','listening to music']};
  res.render('profile',{person:req.params.name,data:data});
});

app.listen(port, hostname, () => {
  console.log(`Server runnong at http://${hostname}:${port}/`);
});