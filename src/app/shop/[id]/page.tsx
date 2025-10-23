"use client"

import { use } from "react"
import { Card } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Star, ShoppingCart, Heart, Share2, Package, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { mockShopItems } from "@/data/mock/mockProducts"
import { useState } from "react"
import { useCartStore } from "@/presentation/features/cart-management/viewmodel/CartViewModel"

export default function ShopItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const item = mockShopItems.find((i) => i.id === Number.parseInt(resolvedParams.id)) || mockShopItems[0]
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        seller: item.seller,
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Image */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <div className="absolute right-4 top-4 flex gap-2">
                <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
              {item.category}
            </Badge>

            <h1 className="mb-4 text-2xl font-bold text-balance text-foreground">{item.title}</h1>

            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(item.rating) ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{item.rating}</span>
              <span className="text-sm text-muted-foreground">({item.reviews} отзывов)</span>
            </div>

            <p className="mb-6 text-3xl font-bold text-primary">{item.price}₽</p>

            {/* Stock */}
            <Card className="mb-6 border-border bg-card p-4">
              <div className="flex items-center gap-2 text-sm">
                <Package className="h-5 w-5 text-primary" />
                <span className="text-foreground">
                  В наличии: <span className="font-semibold">{item.stock} шт</span>
                </span>
              </div>
            </Card>

            {/* Quantity & Add to Cart */}
            <div className="mb-6 flex gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-xl font-bold text-foreground"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(item.stock, quantity + 1))}
                  className="text-xl font-bold text-foreground"
                >
                  +
                </button>
              </div>
              <Button className="flex-1 gap-2" size="lg" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />В корзину
              </Button>
            </div>

            {/* Seller Info */}
            <Card className="mb-6 border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Продавец</h3>
              <Link href={`/profile/${item.seller.id}`} className="flex items-center gap-3 hover:opacity-80">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="/placeholder.svg" alt={item.seller.name} />
                  <AvatarFallback>{item.seller.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{item.seller.name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    Павильон A, Стенд 42
                  </div>
                </div>
              </Link>
            </Card>

            {/* Description */}
            <Card className="border-border bg-card p-6">
              <h3 className="mb-3 font-semibold text-foreground">Описание</h3>
              <p className="leading-relaxed text-muted-foreground">{item.description}</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
