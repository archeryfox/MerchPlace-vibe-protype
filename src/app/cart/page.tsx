"use client"

import { Button } from "@/shared/ui/button"
import { Card } from "@/shared/ui/card"
import { useCartStore } from "@/presentation/features/cart-management/viewmodel/CartViewModel"
import { CartItem } from "@/presentation/features/cart-management/ui/CartItem"
import { ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, getTotalPrice, getTotalItems } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-16">
          <Card className="mx-auto max-w-md border-border bg-card p-12 text-center">
            <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-2 text-2xl font-bold text-foreground">Корзина пуста</h2>
            <p className="mb-6 text-muted-foreground">Добавьте товары из магазина, чтобы продолжить</p>
            <Link href="/shop">
              <Button className="gap-2">
                Перейти в магазин
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <h1 className="mb-6 text-2xl font-bold text-foreground">Корзина ({getTotalItems()})</h1>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div>
            <Card className="sticky top-20 border-border bg-card p-6">
              <h2 className="mb-6 text-xl font-bold text-foreground">Итого</h2>

              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Товары ({getTotalItems()})</span>
                  <span>{getTotalPrice()}₽</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span className="text-primary">Бесплатно</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">Всего</span>
                    <span className="text-2xl font-bold text-primary">{getTotalPrice()}₽</span>
                  </div>
                </div>
              </div>

              <Button className="mb-3 w-full" size="lg">
                Оформить заказ
              </Button>

              <Link href="/shop">
                <Button variant="outline" className="w-full bg-transparent">
                  Продолжить покупки
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
