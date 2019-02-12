var remote = require('electron').remote;
var fs = remote.require('fs');


remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
        filters: [{
            name: 'Images',
            extensions: ['jpg']
        }]
    },
    function(filepaths, bookmarks) {
        //read image (note: use async in production)
        var _img = fs.readFileSync(filepaths[0]).toString('base64');
        //example for .png
        var _out = '<img src="data:image/png;base64,' + _img + '" />';
        //render/display
        var _target = document.getElementById('image_container');
        _target.insertAdjacentHTML('beforeend', _out);
        console.log(filepaths[0].toString('base64'));
        return;
    });