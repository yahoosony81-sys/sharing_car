"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2 } from "lucide-react"
import { submitToNotion } from "@/actions/notion"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    setIsSubmitting(true)

    const result = await submitToNotion({
      name,
      email,
      phone,
    })

    if (result.success) {
      setIsSuccess(true)
      setName("")
      setEmail("")
      setPhone("")
    } else {
      setError(result.error || "등록에 실패했습니다. 잠시 후 다시 시도해주세요.")
    }

    setIsSubmitting(false)
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false)
      setError("")
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">무료 요약하기</DialogTitle>
              <DialogDescription>정보를 입력하시면 빠르게 연락드리겠습니다</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  placeholder="홍길동"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">전화번호</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="010-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    등록 중...
                  </>
                ) : (
                  "요약하기"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
            <DialogTitle className="text-2xl mb-2">요약 완료!</DialogTitle>
            <DialogDescription className="text-base mb-6">
              요약 요청이 완료되었습니다.
              <br />
              빠르게 연락드리겠습니다.
            </DialogDescription>
            <div className="space-y-3">
              <Button onClick={handleClose} className="w-full">
                확인
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open("https://instagram.com", "_blank")}
              >
                인스타그램에서 소식 보기
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
