import { NextRequest, NextResponse } from "next/server";

import { processAI } from "@/app/lib/ai/core/processAI";

import type { AIRequest } from "@/app/lib/ai/types";


export async function POST(
  request: NextRequest
) {
  try {

    const body =
      await request.json();


    const aiRequest: AIRequest = {
      action: body.action,
      input: body.input,
    };


    const result =
      await processAI(aiRequest);


    return NextResponse.json(
      result
    );


  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        error:
          "Invalid request body.",
      },
      {
        status: 400,
      }
    );

  }
}