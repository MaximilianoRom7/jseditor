const path = require('./path');
const _file = path.getScriptName();
const log = require('./logger')(_file);

log.info("Server Listenning on %s:%s");
