import { ZodType } from "zod";

import { SchemaValidationError } from "./errors";

export function validateOutput<T>(
  schema: ZodType<T>,
  output: unknown
): T {
  const result = schema.safeParse(output);

  if (!result.success) {
    throw new SchemaValidationError(
      result.error.message
    );
  }

  return result.data;
}