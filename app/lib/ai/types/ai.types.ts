export interface AIRequest {
  action: string;
  input: string;
}

export interface AISuccess<T = unknown> {
  success: true;
  data: T;
}

export interface AIError {
  success: false;
  error: string;
}

export type AIResponse<T = unknown> =
  | AISuccess<T>
  | AIError;