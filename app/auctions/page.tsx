import { AuctionFilters } from "@/components/auction-filters"
import { AuctionCard } from "@/components/auction-card"

const auctions = [
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
  {
    id: 3,
    title: "Винил Pink Floyd - The Wall первое издание",
    image: "/pink-floyd-vinyl-record.jpg",
    currentBid: 3200,
    bids: 18,
    timeLeft: "1ч 45м",
    category: "Винил",
  },
  {
    id: 4,
    title: "Leica M3 1954 года с объективом Summicron",
    image: "/vintage-leica-camera.jpg",
    currentBid: 12000,
    bids: 31,
    timeLeft: "3ч 20м",
    category: "Техника",
  },
  {
    id: 5,
    title: "Nintendo Game Boy Color Pokemon Edition",
    image: "/pokemon-gameboy-color.jpg",
    currentBid: 1500,
    bids: 67,
    timeLeft: "4ч 55м",
    category: "Игры",
  },
  {
    id: 6,
    title: 'Первое издание "Мастер и Маргарита"',
    image: "/master-and-margarita-book.jpg",
    currentBid: 25000,
    bids: 12,
    timeLeft: "6ч 10м",
    category: "Книги",
  },
  {
    id: 7,
    title: "Air Jordan 1 Retro High OG Chicago 1985",
    image: "/air-jordan-1-chicago.jpg",
    currentBid: 15000,
    bids: 89,
    timeLeft: "1ч 15м",
    category: "Одежда",
  },
  {
    id: 8,
    title: "Polaroid SX-70 Land Camera Alpha 1",
    image: "/polaroid-sx70-camera.jpg",
    currentBid: 2800,
    bids: 34,
    timeLeft: "7ч 30м",
    category: "Техника",
  },
]

export default function AuctionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Каталог аукционов</h1>
          <p className="text-muted-foreground">Найдите уникальные предметы и сделайте ставку</p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="lg:w-64">
            <AuctionFilters />
          </aside>

          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Найдено {auctions.length} аукционов</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {auctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
