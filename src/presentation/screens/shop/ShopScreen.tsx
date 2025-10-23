import { ShopItemCard } from '@/presentation/widgets/shop-item-card/ui/ShopItemCard'
import { ShopFilters } from '@/presentation/widgets/shop-filters/ui/ShopFilters'
import { mockShopItems } from '@/data/mock/mockProducts'

export function ShopScreen() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Магазин</h1>
          <p className="text-muted-foreground">Покупайте мерч напрямую</p>
        </div>
        
        <ShopFilters />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {mockShopItems.map((item) => (
            <ShopItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
