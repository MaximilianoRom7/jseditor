const imports = require('./import');
const mvc = imports.mvc;
const mvcApp = mvc();
const util = require('./util');
const path = require('./path');
const log = require('./logger')();
const config = require('./config')(onConfigLoaded);

mvcApp.use(mvc.static('./public'));

function onListenning() {
    
}

function startListenning(config) {
    util.logStartListenning();
    if(!config.port) {
	log.error("No config.port");
    }
    mvcApp.listen(config.port, onListenning)
}

function onConfigLoaded(config) {
    startListenning(config);
}
