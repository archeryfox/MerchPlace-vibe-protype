"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Clock, QrCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const myTickets = [
  {
    id: 1,
    lotteryId: 1,
    lotteryTitle: "Коллекционная фигурка Соника",
    ticketNumbers: ["A-12345", "A-12346", "A-12347"],
    drawDate: "20 января 2025",
    timeLeft: "2д 5ч",
    image: "/sonic-figure-collectible.jpg",
    totalPrize: 15000,
  },
  {
    id: 2,
    lotteryId: 2,
    lotteryTitle: "Арт-принт Волк и Луна",
    ticketNumbers: ["B-67890"],
    drawDate: "25 января 2025",
    timeLeft: "7д 12ч",
    image: "/wolf-moon-art-print.jpg",
    totalPrize: 8000,
  },
]

export default function MyTicketsPage() {
  const [showQR, setShowQR] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur">
        <Link href="/lotteries">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h2 className="font-semibold text-foreground">Мои билеты</h2>
        <div className="w-10" />
      </div>

      <main className="px-4 py-6">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">Активные билеты на розыгрыши</p>
        </div>

        <div className="space-y-4">
          {myTickets.map((ticket) => (
            <Card key={ticket.id} className="overflow-hidden border-border bg-card">
              <div className="p-4">
                <div className="mb-4 flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={ticket.image || "/placeholder.svg"}
                      alt={ticket.lotteryTitle}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <Link href={`/lotteries/${ticket.lotteryId}`}>
                      <h3 className="mb-2 text-sm font-bold leading-tight text-foreground line-clamp-2">
                        {ticket.lotteryTitle}
                      </h3>
                    </Link>

                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Розыгрыш через {ticket.timeLeft}</span>
                    </div>

                    <Badge className="w-fit bg-primary/20 text-primary text-xs">
                      {ticket.ticketNumbers.length} {ticket.ticketNumbers.length === 1 ? "билет" : "билета"}
                    </Badge>
                  </div>
                </div>

                <div className="mb-3 rounded-lg border border-border bg-background p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Номера билетов</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-xs"
                      onClick={() => setShowQR(showQR === ticket.id ? null : ticket.id)}
                    >
                      <QrCode className="mr-1 h-3 w-3" />
                      QR-код
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ticket.ticketNumbers.map((num) => (
                      <Badge key={num} variant="secondary" className="font-mono text-xs">
                        {num}
                      </Badge>
                    ))}
                  </div>
                </div>

                {showQR === ticket.id && (
                  <div className="animate-in fade-in zoom-in flex flex-col items-center rounded-lg border border-primary/30 bg-primary/5 p-4 duration-300">
                    <div className="mb-2 h-32 w-32 rounded-lg bg-white p-2">
                      <Image
                        src="/generic-qr-code.png"
                        alt="QR Code"
                        width={128}
                        height={128}
                        className="h-full w-full"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Покажите этот код на розыгрыше</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
