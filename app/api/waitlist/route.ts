import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json()

    // Validate input
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 })
    }

    // Notion API configuration
    const notionToken = process.env.NOTION_API_KEY
    const notionDatabaseId = process.env.NOTION_DATABASE_ID

    if (!notionToken || !notionDatabaseId) {
      console.error("Notion API credentials not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Add to Notion database
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: notionDatabaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          Email: {
            email: email,
          },
          Phone: {
            phone_number: phone,
          },
          Timestamp: {
            date: {
              start: new Date().toISOString(),
            },
          },
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Notion API error:", errorData)
      throw new Error("Failed to add to Notion")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist registration error:", error)
    return NextResponse.json({ error: "Failed to register for waitlist" }, { status: 500 })
  }
}
