"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { WaitlistModal } from "./waitlist-modal"

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            지금 웨이팅 리스트에 등록하고
            <br />
            가장 먼저 만나보세요
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            출시되면 가장 먼저 알려드리겠습니다
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-xl"
            onClick={() => setIsModalOpen(true)}
          >
            무료 요약하기
          </Button>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
