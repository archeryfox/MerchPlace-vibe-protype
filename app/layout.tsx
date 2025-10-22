import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RareMerch - Биржа раритетного мерча",
  description: "Аукционы и лотереи раритетных коллекционных предметов",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pb-20">{children}</main>
        <MobileNav />
        <Toaster />
      </body>
    </html>
  )
}
