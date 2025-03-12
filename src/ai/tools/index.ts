import { ToolCallUnion, ToolResultUnion } from "ai";
import { githubProfile } from "./github-profile";
import { httpFetch } from "./http-fetch";

export type AIToolSet = ToolCallUnion<typeof tools>
export type AIToolResult = ToolResultUnion<typeof tools>

export const tools = {
  githubProfile,
  httpFetch
}