import { TrendingUp, Users, Gavel, Trophy } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Пользователей",
  },
  {
    icon: Gavel,
    value: "12K+",
    label: "Активных аукционов",
  },
  {
    icon: Trophy,
    value: "8K+",
    label: "Лотерей",
  },
  {
    icon: TrendingUp,
    value: "$2M+",
    label: "Объем торгов",
  },
]

export function Stats() {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-1 text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
