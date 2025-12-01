import { Car, Calendar, MapPin, CreditCard } from "lucide-react"

const steps = [
  {
    icon: Car,
    title: "오너 차량 등록",
    description: "여행 기간 동안 사용하지 않는 차량을 등록합니다",
  },
  {
    icon: Calendar,
    title: "여행자 예약",
    description: "원하는 날짜와 차량을 선택하여 예약합니다",
  },
  {
    icon: MapPin,
    title: "공항에서 차량 수령",
    description: "공항에서 간편하게 차량을 인수받습니다",
  },
  {
    icon: CreditCard,
    title: "반납 및 정산 자동 처리",
    description: "반납 후 자동으로 안전하게 정산됩니다",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">서비스 작동 방식</h2>
          <p className="text-xl text-muted-foreground">모든 절차는 앱 내에서 간편하게 처리됩니다</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-24 h-24 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-12 h-12 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
