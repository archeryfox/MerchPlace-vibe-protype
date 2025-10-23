import { Watch, Shirt, Disc, Camera, Gamepad2, Book } from "lucide-react"
import { Card } from "@/shared/ui/card"

const categories = [
  { icon: Watch, name: "Часы", count: 234 },
  { icon: Shirt, name: "Одежда", count: 567 },
  { icon: Disc, name: "Винил", count: 189 },
  { icon: Camera, name: "Техника", count: 345 },
  { icon: Gamepad2, name: "Игры", count: 456 },
  { icon: Book, name: "Книги", count: 123 },
]

export function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground">Популярные категории</h2>
          <p className="text-muted-foreground">Найдите редкие предметы в вашей любимой категории</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} товаров</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
