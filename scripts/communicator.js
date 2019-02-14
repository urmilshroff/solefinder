// function communicate() {
//     var python = require("python-shell")
//     var path = require("path")
// 
//     // var city = document.getElementById("").value
// 

var pyshell = require('python-shell');

pyshell.run('/backend/test.py', function(err, results) {
    if (err) throw err;
    console.log('/backend/test.py finished.');
    console.log('results', results);
});