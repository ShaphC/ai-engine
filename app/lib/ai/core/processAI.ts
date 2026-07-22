import type { AIRequest, AIResponse } from "../types";

import { getAction } from "./actionRegistry";
import { validateOutput } from "./validateOutput";
import { success, failure } from "./response";

import {
  InvalidInputError,
  AIEngineError,
} from "./errors";

import { aiProvider } from "../providers";


export async function processAI(
  request: AIRequest
): Promise<AIResponse> {

  try {

    if (
      !request.action ||
      !request.input
    ) {
      throw new InvalidInputError(
        "Action and input are required."
      );
    }


    const action = getAction(
      request.action
    );


    const output =
      await aiProvider.generateStructuredOutput({
        prompt: action.prompt,
        input: request.input,
        schema: action.schema,
        model: action.model,
        maxOutputTokens:
          action.maxOutputTokens,
      });


    const validatedOutput =
      validateOutput(
        action.schema,
        output
      );


    return success(
      validatedOutput
    );


  } catch (error) {


    if (error instanceof AIEngineError) {
      return failure(
        error.message
      );
    }


    return failure(
      "Unexpected AI processing error."
    );
  }
}