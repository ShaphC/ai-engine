export class AIEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AIEngineError";
  }
}

export class InvalidActionError extends AIEngineError {
  constructor(action: string) {
    super(`Invalid action: "${action}"`);
    this.name = "InvalidActionError";
  }
}

export class InvalidInputError extends AIEngineError {
  constructor(message = "Invalid request input.") {
    super(message);
    this.name = "InvalidInputError";
  }
}

export class AIProviderError extends AIEngineError {
  constructor(message = "Failed to generate AI response.") {
    super(message);
    this.name = "AIProviderError";
  }
}

export class SchemaValidationError extends AIEngineError {
  constructor(message = "AI response failed schema validation.") {
    super(message);
    this.name = "SchemaValidationError";
  }
}