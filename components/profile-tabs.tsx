"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AuctionCard } from "@/components/auction-card"
import { ShopItemCard } from "@/components/shop-item-card"
import { DonationSection } from "@/components/donation-section"
import { QRBooking } from "@/components/qr-booking"
import { mockAuctions, mockShopItems } from "@/lib/mock-data"

interface ProfileTabsProps {
  user: {
    id: number
    donationEnabled?: boolean
    donationGoal?: number
    donationCurrent?: number
  }
}

export function ProfileTabs({ user }: ProfileTabsProps) {
  const userAuctions = mockAuctions.filter((a) => a.seller.id === user.id)
  const userShopItems = mockShopItems.filter((i) => i.seller.id === user.id)

  return (
    <Tabs defaultValue="auctions" className="w-full">
      <TabsList className="mb-6 w-full justify-start border-b border-border bg-transparent p-0">
        <TabsTrigger
          value="auctions"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Аукционы ({userAuctions.length})
        </TabsTrigger>
        <TabsTrigger
          value="shop"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Магазин ({userShopItems.length})
        </TabsTrigger>
        {user.donationEnabled && (
          <TabsTrigger
            value="donate"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Поддержать
          </TabsTrigger>
        )}
        <TabsTrigger
          value="booking"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Бронирование
        </TabsTrigger>
        <TabsTrigger
          value="about"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          О создателе
        </TabsTrigger>
      </TabsList>

      <TabsContent value="auctions" className="mt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {userAuctions.map((auction) => (
            <AuctionCard
              key={auction.id}
              auction={{
                id: auction.id,
                title: auction.title,
                image: auction.images[0],
                currentBid: auction.currentBid,
                bids: auction.bids,
                timeLeft: auction.timeLeft,
                category: auction.category,
              }}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="shop" className="mt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userShopItems.map((item) => (
            <ShopItemCard key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>

      {user.donationEnabled && (
        <TabsContent value="donate" className="mt-0">
          <DonationSection
            creatorName="Алексей Волков"
            goal={user.donationGoal || 50000}
            current={user.donationCurrent || 32500}
          />
        </TabsContent>
      )}

      <TabsContent value="booking" className="mt-0">
        <QRBooking creatorId={user.id} />
      </TabsContent>

      <TabsContent value="about" className="mt-0">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold text-foreground">О создателе</h3>
          <p className="leading-relaxed text-muted-foreground">
            Профессиональный художник с многолетним опытом создания уникальных артов и коллекционных предметов.
            Специализируется на создании персонализированных работ и лимитированных коллекций для ценителей редкого
            мерча.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
