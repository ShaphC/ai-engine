import { ZodType } from "zod";

export interface AIAction<T = unknown> {

  name: string;

  prompt: string;

  schema: ZodType<T>;

  model?: string;

  // maxOutputTokens?: number;
}