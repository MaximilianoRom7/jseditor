const imports = require('./import');
const path = imports.path;

conf = {
    appName: "jseditor"
}

function stackFilesFrom() {
    const stack = new Error().stack;
    const lines = stack.split('\n');
    var _files = [];
    for(var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('/'+conf.appName+'/') > -1) {
            const file = lines[i].match('/[^:]+');
            if(file) {
                _files.push(file[0]);
            }
        }
    }
    console.log(_files);
    return _files;
}

module.exports = {
    getScriptName: function (filename) {
	if(!filename) {
            var _files = stackFilesFrom();
            if(_files.length > 2) {
                var filename = _files[3];
            }
            else {
                var filename = __filename;
            }
	}
        return path.basename(filename);
    }
}
