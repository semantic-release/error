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

exports.default = SemanticReleaseError;
exports.SemanticReleaseError = SemanticReleaseError;
Object.defineProperty(exports, '__esModule', {value: true});
