import InheritedError from './inherited-error.js';

export default () => {
  throw new InheritedError('message', 'code');
}
