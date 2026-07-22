import { ZodType } from "zod";

export interface GenerateStructuredOutputOptions<T> {
  prompt: string;
  input: string;
  schema: ZodType<T>;

  model?: string;
  maxOutputTokens?: number;
}

export interface AIProvider {
  generateStructuredOutput<T>(
    options: GenerateStructuredOutputOptions<T>
  ): Promise<T>;
}