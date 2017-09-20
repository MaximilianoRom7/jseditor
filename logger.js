const imports = require('./import');
const path = require('./path')
const logger = imports.log;

function wrapperMultiLine(func) {
    return function(lines) {
	var lines = lines.split('\n');
	for(var i = 0; i < lines.length; i++) {
	    func(lines[i]);
	}
    }
}

module.exports = function(name) {
    if(!name) {
	var name = path.getScriptName();
    }
    var _logger = logger.getLogger(name || "");
    _logger.info = wrapperMultiLine((_logger.info).bind(_logger));
    _logger.error = wrapperMultiLine((_logger.error).bind(_logger));
    _logger.level = 'debug';
    return _logger;
}
