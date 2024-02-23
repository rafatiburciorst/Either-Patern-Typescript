export interface UseCaseError {
    message: string
}

export class ResourceNotFoundError extends Error implements UseCaseError {
    constructor() {
        super('Resource not found')
    }
}