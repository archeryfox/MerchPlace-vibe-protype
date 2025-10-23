import { LotteryCard } from '@/presentation/widgets/lottery-card/ui/LotteryCard'
import { mockLotteries } from '@/data/mock/mockLotteries'

export function LotteriesScreen() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Лотереи</h1>
          <p className="text-muted-foreground">Участвуйте в розыгрышах эксклюзивных предметов</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLotteries.map((lottery) => (
            <LotteryCard key={lottery.id} lottery={lottery} />
          ))}
        </div>
      </div>
    </div>
  )
}
