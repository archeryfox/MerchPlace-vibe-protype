"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LotteryWheel } from "@/components/lottery-wheel"
import { Clock, Ticket, Trophy, Users, ChevronLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { mockLotteries } from "@/lib/mock-data"
import { useState } from "react"

export default function LotteryDetailPage({ params }: { params: { id: string } }) {
  const lottery = mockLotteries.find((l) => l.id === Number.parseInt(params.id)) || mockLotteries[0]
  const [ticketCount, setTicketCount] = useState(1)
  const [showWheel, setShowWheel] = useState(false)
  const progress = (lottery.soldTickets / lottery.totalTickets) * 100

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur">
        <Link href="/lotteries">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h2 className="font-semibold text-foreground">Лотерея</h2>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <main className="px-4 py-4">
        <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-muted">
          <Image src={lottery.image || "/placeholder.svg"} alt={lottery.title} fill className="object-cover" />
          <div className="absolute right-3 top-3">
            <Badge className="bg-primary/90 text-primary-foreground backdrop-blur">
              {lottery.ticketPrice}₽ / билет
            </Badge>
          </div>
        </div>

        <h1 className="mb-2 text-2xl font-bold text-balance text-foreground">{lottery.title}</h1>
        <p className="mb-4 leading-relaxed text-sm text-muted-foreground">{lottery.description}</p>

        <div className="mb-4 grid grid-cols-3 gap-3">
          <Card className="border-border bg-card p-3">
            <div className="mb-1 flex items-center gap-1.5 text-muted-foreground">
              <Ticket className="h-3.5 w-3.5" />
              <span className="text-xs">Всего</span>
            </div>
            <p className="text-lg font-bold text-foreground">{lottery.totalTickets}</p>
          </Card>
          <Card className="border-border bg-card p-3">
            <div className="mb-1 flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              <span className="text-xs">Продано</span>
            </div>
            <p className="text-lg font-bold text-foreground">{lottery.soldTickets}</p>
          </Card>
          <Card className="border-border bg-card p-3">
            <div className="mb-1 flex items-center gap-1.5 text-muted-foreground">
              <Trophy className="h-3.5 w-3.5" />
              <span className="text-xs">Призов</span>
            </div>
            <p className="text-lg font-bold text-foreground">{lottery.prizes.length}</p>
          </Card>
        </div>

        <Card className="mb-4 border-border bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Прогресс продаж</span>
            <span className="text-sm font-bold text-primary">{progress.toFixed(0)}%</span>
          </div>
          <div className="mb-2 h-2.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{lottery.soldTickets} продано</span>
            <span>{lottery.totalTickets - lottery.soldTickets} осталось</span>
          </div>
        </Card>

        <Card className="mb-4 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Розыгрыш через</p>
              <p className="text-xl font-bold text-foreground">2д 5ч 23м</p>
            </div>
          </div>
        </Card>

        <Card className="mb-4 border-border bg-card p-4">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
            <Trophy className="h-5 w-5 text-primary" />
            Призовой фонд
          </h3>
          <div className="space-y-2">
            {lottery.prizes.map((prize) => (
              <div
                key={prize.place}
                className="flex items-center justify-between rounded-lg border border-border bg-background p-3"
              >
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                    {prize.place}
                  </Badge>
                  <span className="text-sm font-medium text-foreground">{prize.description}</span>
                </div>
                <span className="text-base font-bold text-primary">{prize.value}₽</span>
              </div>
            ))}
          </div>
        </Card>

        {showWheel && (
          <Card className="mb-4 border-primary/30 bg-card p-4">
            <h3 className="mb-4 text-center text-lg font-bold text-foreground">Колесо фортуны</h3>
            <LotteryWheel prizes={lottery.prizes} />
          </Card>
        )}

        <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/95 p-4 backdrop-blur">
          <div className="mx-auto max-w-lg">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex flex-1 items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5">
                <button
                  onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  className="text-xl font-bold text-foreground"
                >
                  -
                </button>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Билетов</p>
                  <p className="text-lg font-bold text-foreground">{ticketCount}</p>
                </div>
                <button onClick={() => setTicketCount(ticketCount + 1)} className="text-xl font-bold text-foreground">
                  +
                </button>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Итого</p>
                <p className="text-xl font-bold text-primary">{lottery.ticketPrice * ticketCount}₽</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 gap-2" size="lg">
                <Ticket className="h-5 w-5" />
                Купить
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
                onClick={() => setShowWheel(!showWheel)}
              >
                <Trophy className="h-5 w-5" />
                {showWheel ? "Скрыть" : "Колесо"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
