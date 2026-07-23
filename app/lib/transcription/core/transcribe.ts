import {
  openAITranscriptionProvider,
} from "../providers";


import type {
  TranscriptionProvider,
} from "../providers";


const transcriptionProvider: TranscriptionProvider =
  openAITranscriptionProvider;


export async function transcribe(
  audio: File
): Promise<string> {

  const transcript =
    await transcriptionProvider.transcribe(
      audio
    );


  return transcript;
}