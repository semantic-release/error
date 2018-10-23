'use strict';

class SemanticReleaseError extends Error {
  constructor(message, code, details) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = 'SemanticReleaseError';
    this.code = code;
    this.details = details;
    this.semanticRelease = true;
  }
}

function isSemanticReleaseError(object) {
  return (
    object !== null &&
    typeof object === 'object' &&
    (object instanceof SemanticReleaseError || (object instanceof Error && object.semanticRelease === true))
  );
}

exports.default = SemanticReleaseError;
exports.SemanticReleaseError = SemanticReleaseError;
exports.isSemanticReleaseError = isSemanticReleaseError;
Object.defineProperty(exports, '__esModule', {value: true});
