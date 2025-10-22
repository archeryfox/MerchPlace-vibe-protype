import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Toaster } from "@/components/ui/toaster"

import { Montserrat as V0_Font_Montserrat, Source_Code_Pro as V0_Font_Source_Code_Pro, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _montserrat = V0_Font_Montserrat({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceCodePro = V0_Font_Source_Code_Pro({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

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
    <html lang="ru" className="dark">
      <body className="antialiased font-serif">
        <Header />
        <main className="pb-20">{children}</main>
        <MobileNav />
        <Toaster />
      </body>
    </html>
  )
}
