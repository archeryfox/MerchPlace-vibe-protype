import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Gavel } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface AuctionCardProps {
  auction: {
    id: number
    title: string
    image: string
    currentBid: number
    bids: number
    timeLeft: string
    category: string
  }
}

export function AuctionCard({ auction }: AuctionCardProps) {
  return (
    <Link href={`/auctions/${auction.id}`}>
      <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={auction.image || "/placeholder.svg"}
            alt={auction.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur">
            {auction.category}
          </div>
        </div>

        <div className="p-5">
          <h3 className="mb-3 line-clamp-2 text-balance font-semibold text-foreground">{auction.title}</h3>

          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Текущая ставка</p>
              <p className="text-2xl font-bold text-primary">${auction.currentBid.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Ставок</p>
              <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
                <Gavel className="h-4 w-4" />
                {auction.bids}
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Осталось {auction.timeLeft}</span>
          </div>

          <Button className="w-full" size="sm">
            Сделать ставку
          </Button>
        </div>
      </Card>
    </Link>
  )
}
