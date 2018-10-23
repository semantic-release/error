export declare class SemanticReleaseError extends Error {
  code: string | undefined;
  details: string | undefined;
  semanticRelease: true;
  constructor(message: string, code?: string, details?: string);
}

export declare function isSemanticReleaseError(object: Error): object is SemanticReleaseError;

export default SemanticReleaseError;

