import { UseCaseError } from "./resource-not-found-error";

export class NotAllowedError extends Error implements UseCaseError {
    constructor() {
        super('Not allowed')
    }
}