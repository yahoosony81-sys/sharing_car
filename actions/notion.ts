"use server"

import { notionConfig } from "@/lib/notion"

interface SubmitFormData {
  name: string
  email: string
  phone: string
}

export async function submitToNotion(data: SubmitFormData) {
  try {
    // 입력 검증
    if (!data.name || !data.email || !data.phone) {
      return { success: false, error: "모든 필드를 입력해주세요." }
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "올바른 이메일 형식을 입력해주세요." }
    }

    // 전화번호 형식 검증 및 정리
    const cleanedPhone = data.phone.replace(/[-\s]/g, "")
    const phoneRegex = /^[0-9]{10,11}$/
    if (!phoneRegex.test(cleanedPhone)) {
      return { success: false, error: "올바른 전화번호 형식을 입력해주세요. (10-11자리 숫자)" }
    }

    // Notion API에 페이지 생성 요청
    const response = await fetch(`${notionConfig.apiUrl}/pages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionConfig.apiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": notionConfig.version,
      },
      body: JSON.stringify({
        parent: { database_id: notionConfig.databaseId },
        properties: {
          이름: {
            title: [
              {
                text: {
                  content: data.name,
                },
              },
            ],
          },
          이메일: {
            email: data.email,
          },
          전화번호: {
            phone_number: cleanedPhone,
          },
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Notion API error:", errorData)
      return { success: false, error: "등록에 실패했습니다. 잠시 후 다시 시도해주세요." }
    }

    return { success: true }
  } catch (error) {
    console.error("Notion submission error:", error)
    return { success: false, error: "등록에 실패했습니다. 잠시 후 다시 시도해주세요." }
  }
}







