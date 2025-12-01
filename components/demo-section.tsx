import { Card } from "@/components/ui/card"
import { Smartphone } from "lucide-react"

export function DemoSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">이렇게 이용됩니다</h2>
          <p className="text-muted-foreground">아래 데모는 예시 UI이며 실제 서비스는 준비 중입니다</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Traveler Flow */}
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/5">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">여행자 화면</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-6 border-2 border-dashed border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <span className="font-semibold">검색</span>
                </div>
                <p className="text-sm text-muted-foreground ml-11">
                  날짜와 위치를 입력하여 이용 가능한 차량을 검색합니다
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 border-2 border-dashed border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <span className="font-semibold">차량 선택</span>
                </div>
                <p className="text-sm text-muted-foreground ml-11">원하는 차량의 상세 정보와 가격을 확인합니다</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 border-2 border-dashed border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span className="font-semibold">예약</span>
                </div>
                <p className="text-sm text-muted-foreground ml-11">간편하게 예약하고 결제를 완료합니다</p>
              </div>
            </div>
          </Card>

          {/* Owner Flow */}
          <Card className="p-8 bg-gradient-to-br from-card to-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">오너 화면</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-6 border-2 border-dashed border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <span className="font-semibold">차량 등록</span>
                </div>
                <p className="text-sm text-muted-foreground ml-11">차량 정보와 사진을 등록합니다</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 border-2 border-dashed border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <span className="font-semibold">일정 지정</span>
                </div>
                <p className="text-sm text-muted-foreground ml-11">차량을 공유할 수 있는 기간을 설정합니다</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 border-2 border-dashed border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span className="font-semibold">위탁 완료</span>
                </div>
                <p className="text-sm text-muted-foreground ml-11">예약이 들어오면 자동으로 알림을 받습니다</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
