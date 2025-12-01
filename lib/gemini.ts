// Gemini API 설정
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not configured")
}

export const geminiConfig = {
  apiKey: GEMINI_API_KEY,
  apiUrl: "https://generativelanguage.googleapis.com/v1beta",
  model: "gemini-pro",
  version: "v1beta",
}

