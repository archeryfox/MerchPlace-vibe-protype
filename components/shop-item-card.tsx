"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/lib/cart-store"

interface ShopItemCardProps {
  item: {
    id: number
    title: string
    description: string
    image: string
    price: number
    stock: number
    category: string
    seller: {
      id: number
      name: string
    }
    rating: number
    reviews: number
  }
}

export function ShopItemCard({ item }: ShopItemCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      seller: item.seller,
    })
  }

  return (
    <Link href={`/shop/${item.id}`}>
      <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {item.stock < 10 && (
            <div className="absolute left-3 top-3 rounded-full bg-destructive/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              Осталось {item.stock}
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-balance font-semibold text-foreground">{item.title}</h3>

          <div className="mb-3 flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">{item.rating}</span>
            <span className="text-sm text-muted-foreground">({item.reviews})</span>
          </div>

          <div className="mb-3 flex items-baseline gap-2">
            <p className="text-2xl font-bold text-primary">{item.price}₽</p>
          </div>

          <Button className="w-full gap-2" size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />В корзину
          </Button>
        </div>
      </Card>
    </Link>
  )
}
