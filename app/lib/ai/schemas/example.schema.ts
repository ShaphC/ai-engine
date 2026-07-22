import { z } from "zod";

export const exampleSchema = z.object({
  response: z.string(),
  word_count: z.number(),
});

export type ExampleOutput = z.infer<
  typeof exampleSchema
>;