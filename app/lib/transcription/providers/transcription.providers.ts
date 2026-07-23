export interface TranscriptionProvider {
  transcribe(
    audio: File
  ): Promise<string>;
}