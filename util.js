const imports = require('./import');
const path = require('./path');
const util = imports.util;
const log = require('./logger')();

var conf = {
    host: "0.0.0.0",
    port: 3000
}


module.exports = {
    logStartListenning: function () {
	log.info(util.format("Server Listenning on %s:%s", conf.host, conf.port));
    }
}
