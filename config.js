const imports = require('./import');
const fs = imports.fs;
const log = require('./logger')();

var mode = mode || "dev";

module.exports = function(callback) {
    if(!callback) {
	const err = new Error("Config parse requires a callback");
	log.error(err.stack);
    }
    fs.readFile('./config.json', 'utf8', function(err, data) {
	var data = JSON.parse(data);
	if(data[mode]) {
	    data = data[mode];
	}
	callback(data);
    });
}
