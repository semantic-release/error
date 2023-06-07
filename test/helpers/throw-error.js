import SemanticReleaseError from '../../index.js';

export default () => {
  throw new SemanticReleaseError('message', 'code');
}
