module.exports = SemanticReleaseError

SemanticReleaseError.prototype = new Error()

function SemanticReleaseError (message, code, stop) {
  if (stop === undefined) stop = true

  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = message
  this.code = code
  this.stop = Boolean(stop)
}
