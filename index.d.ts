declare class SemanticReleaseError extends Error {
    public name: string;
    public message: string;
    public code?: string;
    public details?: string;
    constructor(message?: string, code?: string, details?: string);
}

export = SemanticReleaseError;