var remote = require('electron').remote
var fs = remote.require('fs')
var python = require("python-shell")
var path = require("path")
var pathToImage

function imagePicker() {
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            filters: [{
                name: 'Images',
                extensions: ['jpg', 'jpeg', 'png']
            }]
        },

        function(filepaths, bookmarks) {
            pathToImage = filepaths[0].toString('base64') //contains the filepath of the image
            var _img = fs.readFileSync(filepaths[0]).toString('base64')
            var _out = '<img src="data:image/png;base64,' + _img + '" />'

            console.log("Selected image is "+pathToImage)

            changeImage()
            detectShoe()
        })
}

function changeImage() {
    document.getElementById("image-placeholder").src = pathToImage
    // document.getElementById("card-text").innerHTML = pathToImage //not working
}

function detectShoe() {
    var options = {
        pythonPath: '/usr/local/bin/python3', //for Python 3 on Linux/macOS
        scriptPath: path.join(__dirname, '/backend/'),
        args: ['--graph=tf_files/retrained_graph.pb', '--labels=tf_files/retrained_labels.txt', '--output_layer=final_result', '--input_height=299', '--input_width=299', '--image=' + pathToImage] //change the test image filename
    }

    var callTensorFlow = new python('label_image.py', options)

    callTensorFlow.on('message', function(message) {
        window.alert(message)
    })
}