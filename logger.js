const imports = require('./import');
const logger = imports.log;

module.exports = function(name) {
    const _logger = logger.getLogger(name);
    _logger.level = 'debug';
    return _logger;
}
