export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">트립카셰어</h3>
            <p className="text-primary-foreground/80">여행을 더 합리적으로, 차량을 더 가치있게</p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/80">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              서비스 소개
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              이용약관
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              개인정보처리방침
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © 2025 트립카셰어. <span className="dancing-script">All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
