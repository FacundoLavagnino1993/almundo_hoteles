const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const path = require('path');

// API routes Async
app.use('/static', express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//API routes
app.use('/', require('./hotels-server/hotels-routes'));

//App Routes
app.use('/',function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});

app.listen(PORT, ()=>{
    console.log("Server running on " + PORT);
});