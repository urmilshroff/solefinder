var remote = require('electron').remote
var fs = remote.require('fs')
var python = require("python-shell")
var path = require("path")

function imagePicker() {
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            filters: [{
                name: 'Images',
                extensions: ['jpg', 'jpeg', 'png']
            }]
        },
        function(filepaths, bookmarks) {
            var path = filepaths[0].toString('base64') //contains the filepath of the image
            var _img = fs.readFileSync(filepaths[0]).toString('base64')
            var _out = '<img src="data:image/png;base64,' + _img + '" />'
            console.log(path)
            // callingPython(path)
            return path
        })
}

function callingPython() {
    var options = {
        pythonPath: '/usr/local/bin/python3', //for Python 3 on Linux/macOS
        scriptPath: path.join(__dirname, '/backend/'),
        // args : []
    }

    var callPython = new python('test.py', options)

    callPython.on('message', function(message) {
        window.alert(message)
    })
}