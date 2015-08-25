var express = require('express');
var app = express();
var conf = require('./conf/conf.json');

app.use(express.static('./dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(conf.port);
