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
]

export function FeaturedAuctions() {
  return (
    <section className="border-t border-border bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Популярные аукционы</h2>
            <p className="text-muted-foreground">Не упустите шанс приобрести уникальные предметы</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {auctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </div>
    </section>
  )
}
