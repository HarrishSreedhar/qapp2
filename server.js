var express = require('express')
var app = express()
var bp=require('body-parser')
app.set('view engine','ejs')
//app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', function (req, res) {
  res.render('1',{q:req.query});
})
app.post('/', function (req, res) {
  res.render('1',{q:req.query});
})
app.get('/api', function (req, res) {
  res.render('2',{q:req.query})
})
app.get('/param/:id', function (req, res) {
  var data={age:29,job:'cop',hobby:['eating','fight','sdsdgsd','pochaa']};
  res.render('1', {person:req.params.id, data: data});
})

app.listen(3000)
