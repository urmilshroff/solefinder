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
            var pathToImage = filepaths[0].toString('base64') //contains the filepath of the image
            var _img = fs.readFileSync(filepaths[0]).toString('base64')
            var _out = '<img src="data:image/png;base64,' + _img + '" />'
            console.log(pathToImage)
            // callingPython(pathToImage)
            return pathToImage
        })
}

function callingPython() {
    var options = {
        pythonPath: '/usr/local/bin/python3', //for Python 3 on Linux/macOS
        scriptPath: path.join(__dirname, '/backend/'),
        args: ['--graph=tf_files/retrained_graph.pb', '--labels=tf_files/retrained_labels.txt', '--output_layer=final_result', '--input_height=299', '--input_width=299', '--image=test_images/adidas_zeta_test3.jpg'] //change the test image filename
    }

    var callPython = new python('label_image.py', options)

    callPython.on('message', function(message) {
        window.alert(message)
    })
}