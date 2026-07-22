import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { ZodType } from "zod";

import { AIProviderError } from "../core/errors";
import type {
  AIProvider,
  GenerateStructuredOutputOptions,
} from "./provider.interface";


const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("Missing OPENAI_API_KEY environment variable.");
}


const openai = new OpenAI({
  apiKey,
});


const DEFAULT_MODEL =
  process.env.OPENAI_MODEL ?? "gpt-5";


export const openAIProvider: AIProvider = {
  async generateStructuredOutput<T>(
    {
      prompt,
      input,
      schema,
      model = DEFAULT_MODEL,
      maxOutputTokens = 1000,
    }: GenerateStructuredOutputOptions<T>
  ): Promise<T> {
    try {
      const response = await openai.responses.parse({
        model,

        input: [
          {
            role: "system",
            content: prompt,
          },
          {
            role: "user",
            content: input,
          },
        ],

        text: {
          format: zodTextFormat(
            schema,
            "response"
          ),
        },

        max_output_tokens: maxOutputTokens,
      });


      if (!response.output_parsed) {
        console.log(
          "OpenAI raw response:",
          JSON.stringify(response, null, 2)
        );

        throw new AIProviderError(
          "OpenAI returned no structured output."
        );
      }

      return response.output_parsed;

    } catch (error) {

      if (error instanceof AIProviderError) {
        throw error;
      }


      throw new AIProviderError(
        error instanceof Error
          ? error.message
          : "OpenAI request failed."
      );
    }
  },
};