"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { AuctionCard } from "@/presentation/widgets/auction-card/ui/AuctionCard"
import { ShopItemCard } from "@/presentation/widgets/shop-item-card/ui/ShopItemCard"
import { CreatorCard } from "@/presentation/widgets/creator-card/ui/CreatorCard"
import { mockAuctions } from "@/data/mock/mockAuctions"
import { mockShopItems } from "@/data/mock/mockProducts"
import { mockUsers } from "@/data/mock/mockUsers"

export default function FavoritesPage() {
  const [favoriteAuctions] = useState(mockAuctions.slice(0, 2))
  const [favoriteItems] = useState(mockShopItems.slice(0, 3))
  const [favoriteCreators] = useState(mockUsers)

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Избранное</h1>
              <p className="text-sm text-muted-foreground mt-1">Сохраненные аукционы, товары и создатели</p>
            </div>
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="auctions" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="auctions">
              Аукционы
              <span className="ml-1.5 text-xs">({favoriteAuctions.length})</span>
            </TabsTrigger>
            <TabsTrigger value="shop">
              Товары
              <span className="ml-1.5 text-xs">({favoriteItems.length})</span>
            </TabsTrigger>
            <TabsTrigger value="creators">
              Создатели
              <span className="ml-1.5 text-xs">({favoriteCreators.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="auctions" className="space-y-4">
            {favoriteAuctions.length > 0 ? (
              favoriteAuctions.map((auction) => <AuctionCard key={auction.id} auction={auction} />)
            ) : (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Нет сохраненных аукционов</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="shop" className="grid grid-cols-2 gap-4">
            {favoriteItems.length > 0 ? (
              favoriteItems.map((item) => <ShopItemCard key={item.id} item={item} />)
            ) : (
              <div className="col-span-2 text-center py-12">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Нет сохраненных товаров</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="creators" className="space-y-3">
            {favoriteCreators.length > 0 ? (
              favoriteCreators.map((creator) => <CreatorCard key={creator.id} creator={creator} />)
            ) : (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Нет избранных создателей</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
