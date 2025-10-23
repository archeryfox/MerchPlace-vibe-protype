import { AuctionCard } from '@/presentation/widgets/auction-card/ui/AuctionCard'
import { AuctionFilters } from '@/presentation/widgets/auction-filters/ui/AuctionFilters'
import { mockAuctions } from '@/data/mock/mockAuctions'

export function AuctionsScreen() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Аукционы</h1>
          <p className="text-muted-foreground">Найдите уникальные коллекционные предметы</p>
        </div>
        
        <AuctionFilters />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {mockAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </div>
    </div>
  )
}
