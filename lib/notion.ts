// Notion API 설정
const NOTION_API_KEY = process.env.NOTION_API_KEY
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
  throw new Error("Notion API credentials are not configured")
}

export const notionConfig = {
  apiKey: NOTION_API_KEY,
  databaseId: NOTION_DATABASE_ID,
  apiUrl: "https://api.notion.com/v1",
  version: "2022-06-28",
}







