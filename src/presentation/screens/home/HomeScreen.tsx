import { Hero } from '@/presentation/widgets/hero/ui/Hero'
import { Stats } from '@/presentation/widgets/stats/ui/Stats'
import { Categories } from '@/presentation/widgets/categories/ui/Categories'
import { FeaturedAuctions } from '@/presentation/widgets/auction-list/ui/FeaturedAuctions'

export function HomeScreen() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Categories />
      <FeaturedAuctions />
    </div>
  )
}
