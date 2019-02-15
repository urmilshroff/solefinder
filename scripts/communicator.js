// function communicate() {
//     var python = require("python-shell")
//     var path = require("path")
// 
//     // var city = document.getElementById("").value
// 

function callingPython() {
  var python = require("python-shell")
  var path = require("path")

 
  var options = {
    pythonPath: '/usr/local/bin/python3',
    scriptPath : path.join(__dirname, '/backend/'),
    // args : [city]
  }

  var weather = new python('test.py', options);

  weather.on('message', function(message) {
    window.alert(message);
  })
}