import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const comparisons = [
  { feature: "1일 평균 요금", rental: "₩90,000", tripcar: "₩55,000", highlight: true },
  { feature: "공항 수령", rental: "대기 30분 이상", tripcar: "즉시 픽업" },
  { feature: "보험", rental: "별도 옵션", tripcar: "기본 포함" },
  { feature: "수익", rental: "없음", tripcar: "오너 수익 발생" },
]

export function PricingComparisonSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">가격 비교</h2>
            <p className="text-xl text-accent font-semibold">최대 50% 절약 + 오너에게는 새로운 수익 기회</p>
          </div>

          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="text-lg font-bold">항목</TableHead>
                  <TableHead className="text-lg font-bold text-center">일반 렌트카</TableHead>
                  <TableHead className="text-lg font-bold text-center bg-secondary/20 text-secondary">
                    트립카셰어
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow key={index} className={item.highlight ? "bg-accent/10" : ""}>
                    <TableCell className="font-semibold">{item.feature}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        {item.rental}
                        {item.feature === "수익" && <X className="w-5 h-5 text-destructive" />}
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        {item.tripcar}
                        {item.feature === "수익" && <Check className="w-5 h-5 text-secondary" />}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}
