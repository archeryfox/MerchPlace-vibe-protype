"use client"

import { Card } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/presentation/features/cart-management/viewmodel/CartViewModel"
import { CartItem as CartItemType } from '@/domain/entities/cart/model'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <Card className="border-border bg-card p-4">
      <div className="flex gap-4">
        <Link href={`/shop/${item.id}`} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        </Link>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <Link href={`/shop/${item.id}`}>
              <h3 className="mb-1 font-semibold text-foreground hover:text-primary">{item.title}</h3>
            </Link>
            <Link href={`/profile/${item.seller.id}`}>
              <p className="text-sm text-muted-foreground hover:text-primary">{item.seller.name}</p>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="text-lg font-bold text-foreground"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold text-foreground">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="text-lg font-bold text-foreground"
              >
                +
              </button>
            </div>

            <p className="text-xl font-bold text-primary">{item.price * item.quantity}₽</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeItem(item.id)}
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  )
}
