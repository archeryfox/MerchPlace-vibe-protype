"use client"

import { use } from "react"
import { Header } from "@/presentation/widgets/header/ui/Header"
import { Button } from "@/shared/ui/button"
import { Card } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Input } from "@/shared/ui/input"
import { Clock, Eye, Gavel, Heart, Share2, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { mockAuctions } from "@/data/mock/mockAuctions"
import { useState } from "react"

export default function AuctionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const auction = mockAuctions.find((a) => a.id === Number.parseInt(resolvedParams.id)) || mockAuctions[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [bidAmount, setBidAmount] = useState(auction.currentBid + 100)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={auction.images[selectedImage] || "/placeholder.svg"}
                alt={auction.title}
                fill
                className="object-cover"
              />
              <div className="absolute right-4 top-4 flex gap-2">
                <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {auction.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image src={image || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Auction Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {auction.category}
              </Badge>
              <Badge variant="outline">{auction.rarity}</Badge>
              <Badge variant="outline">{auction.condition}</Badge>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-balance text-foreground">{auction.title}</h1>

            <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{auction.views} просмотров</span>
              </div>
              <div className="flex items-center gap-1">
                <Gavel className="h-4 w-4" />
                <span>{auction.bids} ставок</span>
              </div>
            </div>

            {/* Current Bid */}
            <Card className="mb-6 border-primary/50 bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Текущая ставка</p>
                  <p className="text-4xl font-bold text-primary">{auction.currentBid}₽</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Осталось времени</p>
                  <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
                    <Clock className="h-6 w-6" />
                    {auction.timeLeft}
                  </div>
                </div>
              </div>

              <div className="mb-4 space-y-2">
                <label className="text-sm font-medium text-foreground">Ваша ставка</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(Number.parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <Button className="px-8">Сделать ставку</Button>
                </div>
                <p className="text-xs text-muted-foreground">Минимальная ставка: {auction.currentBid + 100}₽</p>
              </div>
            </Card>

            {/* Seller Info */}
            <Card className="mb-6 border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Продавец</h3>
              <Link href={`/profile/${auction.seller.id}`} className="flex items-center gap-3 hover:opacity-80">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src={auction.seller.avatar || "/placeholder.svg"} alt={auction.seller.name} />
                  <AvatarFallback>{auction.seller.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{auction.seller.name}</p>
                  <p className="text-sm text-muted-foreground">{auction.seller.username}</p>
                  {auction.seller.location && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {auction.seller.location}
                    </div>
                  )}
                </div>
              </Link>
            </Card>

            {/* Description */}
            <Card className="border-border bg-card p-6">
              <h3 className="mb-3 font-semibold text-foreground">Описание</h3>
              <p className="leading-relaxed text-muted-foreground">{auction.description}</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
