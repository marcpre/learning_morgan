var express = require('express');
const logger = require('morgan');
const path = require('path')
const fs = require('fs')

var app = express();

/**
 * Use morgan
 */
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger 
app.use(logger('combined', {stream: accessLogStream}))
/**
 * Routes
 */

//get cookie
app.get('/', function(req, res) {
  res.send('Hello, my log output goes to a file!')
})


/**
 * Run Server
 */
var port = 8080;
var host = "localhost";

app.listen(port, host, function () {
    console.log("Listening on " + host + ":" + port);
});
