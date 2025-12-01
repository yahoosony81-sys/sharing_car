"use server"

import { geminiConfig } from "@/lib/gemini"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

interface SendMessageParams {
  message: string
  history: ChatMessage[]
}

export async function sendMessage({ message, history }: SendMessageParams) {
  try {
    if (!message.trim()) {
      return { success: false, error: "메시지를 입력해주세요." }
    }

    // 채팅 히스토리와 현재 메시지를 contents 형식으로 변환
    // 첫 번째 메시지가 assistant인 경우 제외 (초기 인사말)
    const filteredHistory = history.filter((msg, index) => {
      // 첫 번째 메시지가 assistant인 경우 제외
      if (index === 0 && msg.role === "assistant") {
        return false
      }
      return true
    })

    const contents = [
      // 이전 대화 히스토리 추가
      ...filteredHistory.map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
      // 현재 사용자 메시지
      {
        role: "user",
        parts: [{ text: message }],
      },
    ]

    // Gemini API 호출
    const url = `${geminiConfig.apiUrl}/models/${geminiConfig.model}:generateContent?key=${geminiConfig.apiKey}`
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: contents,
        systemInstruction: {
          parts: [
            {
              text: "당신은 트립카셰어의 고객 상담 챗봇입니다. 트립카셰어는 렌트카보다 최대 40% 저렴한 여행 차량 공유 서비스입니다. 친절하고 도움이 되는 답변을 제공해주세요.",
            },
          ],
        },
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Gemini API error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      })
      return {
        success: false,
        error: `응답을 생성하는데 실패했습니다. (${response.status}) 잠시 후 다시 시도해주세요.`,
      }
    }

    const data = await response.json()

    // 응답에서 텍스트 추출
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "죄송합니다. 응답을 생성할 수 없습니다."

    if (!replyText || replyText === "죄송합니다. 응답을 생성할 수 없습니다.") {
      console.error("Gemini API response structure:", JSON.stringify(data, null, 2))
    }

    return { success: true, message: replyText }
  } catch (error) {
    console.error("Gemini API error:", error)
    return {
      success: false,
      error: `응답을 생성하는데 실패했습니다: ${error instanceof Error ? error.message : "알 수 없는 오류"}`,
    }
  }
}

