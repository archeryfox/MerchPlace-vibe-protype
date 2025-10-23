"use client"

import { useState } from "react"
import { Search, Filter, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AuctionCard } from "@/components/auction-card"
import { ShopItemCard } from "@/components/shop-item-card"
import { CreatorCard } from "@/components/creator-card"
import { mockAuctions, mockShopItems, mockUsers } from "@/lib/mock-data"

const trendingSearches = ["Фурри-арт", "Sonic фигурки", "Аниме мерч", "Редкие коллекционки", "Артбуки", "Косплей"]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск аукционов, товаров, создателей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
            <Button size="icon" variant="outline">
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {!searchQuery ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Популярные запросы</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <Badge
                    key={term}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Популярные аукционы</h2>
              <div className="grid gap-4">
                {mockAuctions.slice(0, 3).map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-4 mb-6">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="auctions">Аукционы</TabsTrigger>
              <TabsTrigger value="shop">Магазин</TabsTrigger>
              <TabsTrigger value="creators">Создатели</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Аукционы</h3>
                <div className="grid gap-4">
                  {mockAuctions.slice(0, 2).map((auction) => (
                    <AuctionCard key={auction.id} auction={auction} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Товары</h3>
                <div className="grid grid-cols-2 gap-4">
                  {mockShopItems.slice(0, 4).map((item) => (
                    <ShopItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Создатели</h3>
                <div className="grid gap-3">
                  {mockUsers.map((user) => (
                    <CreatorCard key={user.id} creator={user} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="auctions" className="space-y-4">
              {mockAuctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </TabsContent>

            <TabsContent value="shop" className="grid grid-cols-2 gap-4">
              {mockShopItems.map((item) => (
                <ShopItemCard key={item.id} item={item} />
              ))}
            </TabsContent>

            <TabsContent value="creators" className="space-y-3">
              {mockUsers.map((user) => (
                <CreatorCard key={user.id} creator={user} />
              ))}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
