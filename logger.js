const imports = require('./import');
const path = require('./path')
const logger = imports.log;

module.exports = function(name) {
    if(!name) {
	var name = path.getScriptName();
    }
    const _logger = logger.getLogger(name);
    _logger.level = 'debug';
    return _logger;
}
