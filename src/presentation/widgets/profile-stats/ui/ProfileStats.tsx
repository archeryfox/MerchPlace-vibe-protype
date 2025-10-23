import { Card } from "@/shared/ui/card"
import { Users, Package, Star, TrendingUp } from "lucide-react"

interface ProfileStatsProps {
  user: {
    followers: number
    following: number
    itemsSold: number
    rating: number
  }
}

export function ProfileStats({ user }: ProfileStatsProps) {
  const stats = [
    {
      icon: Users,
      label: "Подписчики",
      value: user.followers.toLocaleString(),
    },
    {
      icon: TrendingUp,
      label: "Подписки",
      value: user.following.toLocaleString(),
    },
    {
      icon: Package,
      label: "Продано",
      value: user.itemsSold.toLocaleString(),
    },
    {
      icon: Star,
      label: "Рейтинг",
      value: user.rating.toFixed(1),
    },
  ]

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border bg-card p-6">
          <div className="mb-2 flex items-center gap-2 text-muted-foreground">
            <stat.icon className="h-5 w-5" />
            <span className="text-sm">{stat.label}</span>
          </div>
          <p className="text-3xl font-bold text-foreground">{stat.value}</p>
        </Card>
      ))}
    </div>
  )
}
