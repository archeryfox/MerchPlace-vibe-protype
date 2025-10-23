import { LotteryCard } from "@/components/lottery-card"
import { mockLotteries } from "@/lib/mock-data"
import { Trophy } from "lucide-react"

export default function LotteriesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <main className="px-4 py-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Лотереи</h1>
          </div>
          <p className="text-sm text-muted-foreground">Участвуйте в розыгрышах и выигрывайте призы</p>
        </div>

        <div className="space-y-4">
          {mockLotteries.map((lottery) => (
            <LotteryCard key={lottery.id} lottery={lottery} />
          ))}
        </div>
      </main>
    </div>
  )
}
