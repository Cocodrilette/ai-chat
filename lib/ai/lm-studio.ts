import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: process.env.MODEl_BASE_URL || "http://localhost:1234",
});
