"use client"

import { ShoppingCart, Bell } from "lucide-react"
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { useCartStore } from "@/presentation/features/cart-management/viewmodel/CartViewModel"

export function Header() {
  const getTotalItems = useCartStore((state) => state.getTotalItems)
  const cartCount = getTotalItems()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">R</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">RareMerch</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative h-9 w-9 text-muted-foreground">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
