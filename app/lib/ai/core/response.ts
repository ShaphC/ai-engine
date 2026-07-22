import type { AIError, AISuccess } from "../types";

export function success<T>(data: T): AISuccess<T> {
  return {
    success: true,
    data,
  };
}

export function failure(error: string): AIError {
  return {
    success: false,
    error,
  };
}