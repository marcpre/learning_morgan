var express = require('express');
const logger = require('morgan');

var app = express();

/**
 * Use morgan
 */
app.use(logger('dev'));
/**
 * Routes
 */

//get cookie
app.get('/', (req, res) => {

})

//set cookie by url
app.get('/set/:cookie', (req, res) => {

})


/**
 * Run Server
 */
var port = 8080;
var host = "localhost";

app.listen(port, host, function () {
    console.log("Listening on " + host + ":" + port);
});
