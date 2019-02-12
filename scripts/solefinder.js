var remote = require('electron').remote;
var fs = remote.require('fs');
// var element = document.getElementById("impath");

function imagePicker() {
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            filters: [{
                name: 'Images',
                extensions: ['jpg', 'jpeg', 'png']
            }]
        },
        function(filepaths, bookmarks) {
            var path = filepaths[0].toString('base64') //contains the filepath of the image
            var _img = fs.readFileSync(filepaths[0]).toString('base64');
            var _out = '<img src="data:image/png;base64,' + _img + '" />';
            console.log(path);
            // element.innerHTML=path;
            return path;
        });
}