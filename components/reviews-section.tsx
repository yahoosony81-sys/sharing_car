import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Check } from "lucide-react" // Import Check component

const reviews = [
  {
    name: "김OO",
    role: "여행자",
    content: "렌트보다 싸고 공항에서 바로 차 받았어요.",
    rating: 5,
  },
  {
    name: "박OO",
    role: "오너",
    content: "출장 중 차량 맡겼는데 주차비 절약과 수익까지.",
    rating: 5,
  },
  {
    name: "최OO",
    role: "여행자",
    content: "앱에서 보험까지 자동이라 편리했습니다.",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">이용자들의 실제 후기</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-secondary" />
            </div>
            <span className="font-semibold">차량 점검 인증</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-secondary" />
            </div>
            <span className="font-semibold">보험 연계</span>
          </div>
        </div>
      </div>
    </section>
  )
}
