var express = require('express')
var app = express()

var fortunes = [];
require('fs').readFileSync('./fortunes/freebsd/fortunes').toString()
             .split('%\n').forEach(function (fortune) {
  fortunes.push(fortune);
})
console.log(fortunes);

app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('usage');
})


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

// vim: set tabstop=2 softtabstop=2 shiftwidth=2 textwidth=80 :
// vim: set expandtab smarttab :
