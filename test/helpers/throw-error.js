const SemanticReleaseError = require('../../index.js');

module.exports = () => {
  throw new SemanticReleaseError('message', 'code');
};
