var express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')
const fileName = require('./util/util.js') 
 
var app = express()
const logDirectory = path.join(__dirname, 'log')
 
// ensure log directory exists 
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
 
const name = fileName.createDailyFileName("access") + ".log"
// create a rotating write stream 
var accessLogStream = rfs(name, {
  interval: '1d', // rotate daily 
  path: logDirectory
})
 
// setup the logger 
app.use(morgan('combined', {stream: accessLogStream}))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})