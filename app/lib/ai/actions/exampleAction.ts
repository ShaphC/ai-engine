import type { AIAction } from "../types";

import {
  examplePrompt,
} from "../prompts/example.prompt";

import {
  exampleSchema,
  type ExampleOutput,
} from "../schemas/example.schema";


export const exampleAction: AIAction<ExampleOutput> = {
  name: "example",

  prompt: examplePrompt,

  schema: exampleSchema,

  maxOutputTokens: 300,
};