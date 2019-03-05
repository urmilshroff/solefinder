const remote = require('electron').remote
let w = remote.getCurrentWindow()
var fs = remote.require('fs')
var python = require("python-shell")
var path = require("path")
var pathToImage
var shoe

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

            console.log("Selected image is " + pathToImage)

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

    callTensorFlow.on('message', function(detectedShoe) {
        shoe = detectedShoe //saves detected shoe name globally
        swal.fire("Shoe Detected!", "Detected shoe was " + shoe + "!", "success")
    })
}

function searchAmazon() {
    console.log(shoe)
    window.open("https://www.amazon.in/s?i=shoes&field-keywords=" + shoe)
    // require("shell").openExternal("https://www.amazon.in/s?i=shoes&field-keywords=" + shoe)
    // electronOpenLinkInBrowser("https://www.amazon.in/s?i=shoes&field-keywords=" + shoe)
}

function searchFlipkart() {
    console.log(shoe)
    window.open("https://www.flipkart.com/search?q=" + shoe)
}


//This method checks for internet connection and alerts if not connected
function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var file = "https://www.kirupa.com/blank.png";
    var randomNum = Math.round(Math.random() * 10000); //to prevent cached result 

    xhr.open('HEAD', file + "?rand=" + randomNum, true); //HEAD checks if file exists, true represents asynchronous connection(done in background)

    xhr.send(); //HTTP request gets transmitted

    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
        if (xhr.readyState == 4) //4 translates to request being completed
        {
            if (xhr.status >= 200 && xhr.status < 304) //if status between 200 and 303, connection exists - returns true

            {

            } else {

                swal.fire({
                    title: 'No Internet Connection',
                    text: 'Please connect to the Internet and try again!',
                    type: 'error',
                    showConfirmButton: true,
                    confirmButtonText: 'Quit',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.value) {
                        quitWindow();
                    }
                })
            }
        }
    }
}

function quitWindow() {
    w.close();
}