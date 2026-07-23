import { NextResponse } from "next/server";

import { transcribe } from "@/app/lib/transcription/core/transcribe";


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


    const transcript =
      await transcribe(audio);


    return NextResponse.json(
      {
        success: true,
        data: {
          transcript,
        },
      }
    );


  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Transcription failed.",
      },
      {
        status: 500,
      }
    );

  }

}