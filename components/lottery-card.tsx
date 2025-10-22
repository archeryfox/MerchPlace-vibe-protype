import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Trophy, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface LotteryCardProps {
  lottery: {
    id: number
    title: string
    description: string
    image: string
    ticketPrice: number
    totalTickets: number
    soldTickets: number
    endTime: Date
    prizes: Array<{
      place: number
      description: string
      value: number
    }>
  }
}

export function LotteryCard({ lottery }: LotteryCardProps) {
  const progress = (lottery.soldTickets / lottery.totalTickets) * 100

  return (
    <Link href={`/lotteries/${lottery.id}`}>
      <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 active:scale-[0.98]">
        <div className="flex gap-4 p-4">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
            <Image
              src={lottery.image || "/placeholder.svg"}
              alt={lottery.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="text-balance text-base font-bold leading-tight text-foreground line-clamp-2">
                {lottery.title}
              </h3>
              <Badge className="flex-shrink-0 bg-primary/20 text-primary text-xs">{lottery.ticketPrice}₽</Badge>
            </div>

            <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Trophy className="h-3 w-3" />
                <span>{lottery.prizes[0].value}₽</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>
                  {lottery.soldTickets}/{lottery.totalTickets}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>2д</span>
              </div>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
