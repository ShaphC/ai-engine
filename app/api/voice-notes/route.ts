import { NextResponse } from "next/server";

import { transcribe } from "@/app/lib/transcription/core/transcribe";
import { processAI } from "@/app/lib/ai/core/processAI";


export const runtime = "nodejs";


export async function POST(
  request: Request
) {
  try {

    const formData =
      await request.formData();


    const audio =
      formData.get("audio");


    if (!(audio instanceof File)) {

      return NextResponse.json(
        {
          success: false,
          error: "Audio file is required.",
        },
        {
          status: 400,
        }
      );
    }


    // Step 1:
    // Convert audio to text

    const transcript =
      await transcribe(audio);



    // Step 2:
    // Convert transcript into notes

    const notes =
      await processAI({
        action: "voice_to_notes",
        input: transcript,
      });



    return NextResponse.json({
      success: true,
      data: {
        transcript,
        notes,
      },
    });


  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Voice notes processing failed.",
      },
      {
        status: 500,
      }
    );

  }
}