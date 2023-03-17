const express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
app.get('/', function (req, res) {
  res.send(excel)
})

var XLSX = require("xlsx");

var workbook=XLSX.readFile('data.xlsx');
var worksheet=workbook.Sheets[workbook.SheetNames[0]];
var excel=XLSX.utils.sheet_to_json(worksheet);

app.listen(3000)