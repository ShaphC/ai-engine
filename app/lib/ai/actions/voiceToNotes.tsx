import type { AIAction } from "../types";

import { voiceToNotesPrompt } from "../prompts/voiceToNotes.prompt";

import {
  voiceToNotesSchema,
  type VoiceToNotesOutput,
} from "../schemas/voiceToNotes.schema";

export const voiceToNotesAction: AIAction<VoiceToNotesOutput> = {
  name: "voice_to_notes",

  prompt: voiceToNotesPrompt,

  schema: voiceToNotesSchema,
};
