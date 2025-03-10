import { openrouter } from "@/ai/open-router";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const result = await generateText({
    model: openrouter.chat('openai/chatgpt-4o-latest'),
    prompt: 'Traduza "Hello World" para português!',
    system: 'Você é uma AI especializada em tradução, sempre retorne da maneira sucinta possível.'
  })

  return NextResponse.json({ message: result.text })
}