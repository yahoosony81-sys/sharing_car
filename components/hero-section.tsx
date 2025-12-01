"use client"

import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/BACKGROUND.jpg"
            alt="제주 공항과 한라산이 보이는 풍경"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            렌트카보다 40% 저렴한
            <br />
            여행 차량 공유 서비스
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto text-pretty drop-shadow-md">
            휴가지에서 만나는 가장 합리적인 이동 솔루션, 트립카셰어
          </p>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                size="lg"
                className="bg-[#FEE500] text-[#000000] hover:bg-[#FEE500]/90 text-lg px-8 py-6 rounded-full shadow-xl font-bold"
              >
                카카오로 3초만에 시작하기
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-xl"
              onClick={() => alert("이미 로그인 상태입니다.")}
            >
              서비스 이용하기
            </Button>
          </SignedIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>
    </>
  )
}
