import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { FeaturedAuctions } from "@/components/featured-auctions"
import { Categories } from "@/components/categories"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Categories />
      <FeaturedAuctions />
    </div>
  )
}
