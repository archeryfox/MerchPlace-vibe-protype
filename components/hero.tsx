import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-muted py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Биржа раритетного мерча</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Торгуйте редкими коллекционными предметами
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Участвуйте в аукционах и лотереях. Находите уникальные вещи. Станьте частью сообщества коллекционеров.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full gap-2 sm:w-auto">
              Начать торги
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Создать аукцион
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
