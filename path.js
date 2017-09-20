const imports = require('./import');
const logger = imports.log;
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
    return _files;
}

module.exports = {
    getScriptName: function (filename) {
	if(!filename) {
            var _files = stackFilesFrom();
            if(_files.length > 1) {
                var filename = _files[1];
            }
            else {
                var filename = __filename;
            }
	}
        return path.basename(filename);
    }
}
