import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Gavel, Trophy, TrendingUp, Settings } from "lucide-react"
import { AuctionCard } from "@/components/auction-card"

const userAuctions = [
  {
    id: 1,
    title: "Винтажные часы Rolex Submariner 1960",
    image: "/vintage-rolex-watch.jpg",
    currentBid: 45000,
    bids: 23,
    timeLeft: "2ч 34м",
    category: "Часы",
  },
  {
    id: 2,
    title: "Редкая футболка Supreme x Louis Vuitton",
    image: "/supreme-louis-vuitton-tshirt.jpg",
    currentBid: 8500,
    bids: 45,
    timeLeft: "5ч 12м",
    category: "Одежда",
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8 border-border bg-card p-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24 border-2 border-primary">
                <AvatarImage src="/diverse-user-avatars.png" />
                <AvatarFallback className="bg-primary text-2xl text-primary-foreground">АИ</AvatarFallback>
              </Avatar>

              <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">Александр Иванов</h1>
                <p className="text-muted-foreground">@alex_collector</p>
                <p className="mt-2 text-sm text-muted-foreground">Коллекционер с 2018 года</p>
              </div>
            </div>

            <Button className="gap-2">
              <Settings className="h-4 w-4" />
              Настройки
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-muted p-4 text-center">
              <div className="mb-2 flex justify-center">
                <Gavel className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="text-sm text-muted-foreground">Ставок</div>
            </div>

            <div className="rounded-lg bg-muted p-4 text-center">
              <div className="mb-2 flex justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">23</div>
              <div className="text-sm text-muted-foreground">Выигрышей</div>
            </div>

            <div className="rounded-lg bg-muted p-4 text-center">
              <div className="mb-2 flex justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">$45K</div>
              <div className="text-sm text-muted-foreground">Потрачено</div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="auctions" className="w-full">
          <TabsList className="mb-6 w-full justify-start border-b border-border bg-transparent p-0">
            <TabsTrigger
              value="auctions"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Мои аукционы
            </TabsTrigger>
            <TabsTrigger
              value="bids"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Мои ставки
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              История
            </TabsTrigger>
          </TabsList>

          <TabsContent value="auctions">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {userAuctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bids">
            <Card className="border-border bg-card p-8 text-center">
              <p className="text-muted-foreground">У вас пока нет активных ставок</p>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="border-border bg-card p-8 text-center">
              <p className="text-muted-foreground">История транзакций пуста</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
