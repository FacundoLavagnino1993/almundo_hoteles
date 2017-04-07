var express = require('express');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
var path = require('path');


app.use('/static', express.static('./../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//App Routes
app.use('/', function (req, res, next){
    //  res.send(s"conection");
    res.sendFile(path.join(__dirname + './../build/index.html'));
});

app.listen(port,function (){
    console.log("app run on port "+port);
});
