import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Problem Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">성수기 렌트카 가격이 2배?</h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">"여행 가면 차값이 숙박비보다 비싸요."</p>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-secondary to-secondary/70 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              현지에 놀고 있는 차량을
              <br />
              합리적으로 공유하세요.
            </h3>
          </div>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="p-8 bg-destructive/10 border-destructive/20">
              <TrendingUp className="w-12 h-12 text-destructive mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-destructive">일반 렌트카</h4>
              <p className="text-4xl font-bold text-destructive">₩90,000</p>
              <p className="text-sm text-muted-foreground mt-2">1일 평균 요금</p>
            </Card>
            <Card className="p-8 bg-secondary/20 border-secondary/30">
              <DollarSign className="w-12 h-12 text-secondary mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-secondary">트립카셰어</h4>
              <p className="text-4xl font-bold text-secondary">₩55,000</p>
              <p className="text-sm text-muted-foreground mt-2">최대 40% 절감</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
