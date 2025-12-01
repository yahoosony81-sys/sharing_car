import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Dancing_Script } from "next/font/google"
import { Chatbot } from "@/components/chatbot"
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tripcarshare.com"),
  title: {
    default: "트립카셰어 - 렌트카보다 40% 저렴한 여행 차량 공유",
    template: "%s | 트립카셰어",
  },
  description:
    "트립카셰어는 렌트카보다 최대 40% 저렴한 여행 차량 공유 서비스입니다. 성수기 렌트카 가격 부담을 줄이고, 현지에 놀고 있는 차량을 합리적으로 공유할 수 있습니다. 공항에서 즉시 픽업 가능하며, 보험 포함, 자동 정산으로 편리합니다. 차량 오너에게는 새로운 수익 기회를 제공합니다.",
  keywords: [
    "트립카셰어",
    "여행 차량 공유",
    "렌트카 대체",
    "저렴한 렌트카",
    "차량 공유",
    "제주 렌트카",
    "여행 차량",
    "공항 픽업",
    "차량 공유 플랫폼",
    "렌트카 절약",
    "성수기 렌트카",
    "차량 오너 수익",
  ],
  authors: [{ name: "트립카셰어" }],
  creator: "트립카셰어",
  publisher: "트립카셰어",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "트립카셰어",
    title: "트립카셰어 - 렌트카보다 40% 저렴한 여행 차량 공유",
    description:
      "렌트카보다 최대 40% 저렴한 여행 차량 공유 서비스. 성수기 렌트카 가격 부담을 줄이고, 차량 오너에게는 수익 기회를 제공합니다.",
    images: [
      {
        url: "/og_img.png",
        width: 1200,
        height: 630,
        alt: "트립카셰어 - 렌트카보다 최대 40% 저렴한 여행 차량 공유 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "트립카셰어 - 렌트카보다 40% 저렴한 여행 차량 공유",
    description:
      "렌트카보다 최대 40% 저렴한 여행 차량 공유 서비스. 성수기 렌트카 가격 부담을 줄이고, 차량 오너에게는 수익 기회를 제공합니다.",
    images: ["/og_img.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans antialiased ${dancingScript.variable}`}>
        {children}
        <Analytics />
        <Chatbot />
      </body>
    </html>
  )
}
