"use client"

import { Button } from "@/shared/ui/button"
import { Card } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { ChevronLeft, Trophy, Calendar, Ticket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lotteryHistory = [
  {
    id: 1,
    lotteryTitle: "Коллекционная фигурка Соника",
    date: "15 января 2025",
    ticketNumber: "A-12345",
    prize: "1 место",
    prizeValue: 15000,
    status: "won",
    image: "/sonic-figure-collectible.jpg",
  },
  {
    id: 2,
    lotteryTitle: "Арт-принт Волк и Луна",
    date: "10 января 2025",
    ticketNumber: "B-67890",
    prize: null,
    prizeValue: 0,
    status: "lost",
    image: "/wolf-moon-art-print.jpg",
  },
  {
    id: 3,
    lotteryTitle: "Винтажный постер Звездные Войны",
    date: "5 января 2025",
    ticketNumber: "C-24680",
    prize: "3 место",
    prizeValue: 3000,
    status: "won",
    image: "/star-wars-vintage-poster.jpg",
  },
]

export default function LotteryHistoryPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur">
        <Link href="/lotteries">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h2 className="font-semibold text-foreground">История лотерей</h2>
        <div className="w-10" />
      </div>

      <main className="px-4 py-6">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">Ваши участия в розыгрышах</p>
        </div>

        <div className="space-y-4">
          {lotteryHistory.map((entry) => (
            <Card key={entry.id} className="overflow-hidden border-border bg-card">
              <div className="flex gap-4 p-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={entry.image || "/placeholder.svg"}
                    alt={entry.lotteryTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold leading-tight text-foreground line-clamp-2">
                      {entry.lotteryTitle}
                    </h3>
                    {entry.status === "won" ? (
                      <Badge className="flex-shrink-0 bg-primary/20 text-primary">
                        <Trophy className="mr-1 h-3 w-3" />
                        Выигрыш
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="flex-shrink-0">
                        Не выиграл
                      </Badge>
                    )}
                  </div>

                  <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{entry.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Ticket className="h-3 w-3" />
                      <span>{entry.ticketNumber}</span>
                    </div>
                  </div>

                  {entry.status === "won" && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{entry.prize}</span>
                      <span className="text-base font-bold text-primary">{entry.prizeValue}₽</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
