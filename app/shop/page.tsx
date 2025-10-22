import { ShopItemCard } from "@/components/shop-item-card"
import { ShopFilters } from "@/components/shop-filters"
import { mockShopItems } from "@/lib/mock-data"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold text-foreground">Магазин</h1>
          <p className="text-muted-foreground">Купите уникальный мерч от создателей</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
          <ShopFilters />

          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{mockShopItems.length} товаров</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mockShopItems.map((item) => (
                <ShopItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
