import { z } from "zod";

export const voiceToNotesSchema = z.object({
  title: z.string(),

  summary: z.string(),

  key_points: z.array(
    z.string()
  ),

  action_items: z.array(
    z.string()
  ),

  questions: z.array(
    z.string()
  ),

  ideas: z.array(
    z.string()
  ),
});


export type VoiceToNotesOutput =
  z.infer<typeof voiceToNotesSchema>;