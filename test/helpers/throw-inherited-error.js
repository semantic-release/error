const InheritedError = require('./inherited-error.js');

module.exports = () => {
  throw new InheritedError('message', 'code');
};
