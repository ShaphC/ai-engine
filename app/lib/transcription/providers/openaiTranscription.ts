import OpenAI from "openai";

import type {
  TranscriptionProvider,
} from "./transcription.interface";


const apiKey = process.env.OPENAI_API_KEY;


if (!apiKey) {
  throw new Error(
    "Missing OPENAI_API_KEY environment variable."
  );
}


const openai = new OpenAI({
  apiKey,
});


export const openAITranscriptionProvider: TranscriptionProvider =
{
  async transcribe(
    audio: File
  ): Promise<string> {

    const response =
      await openai.audio.transcriptions.create({
        file: audio,
        model: "whisper-1",
      });


    return response.text;
  },
};