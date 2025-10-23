import { Card } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { MapPin, Star, Package } from "lucide-react"
import Link from "next/link"

interface CreatorCardProps {
  creator: {
    id: number
    name: string
    username: string
    avatar: string
    bio: string
    verified: boolean
    categories: string[]
    location?: string
    rating: number
    itemsSold: number
  }
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <Card className="border-border bg-card p-6 transition-all hover:border-primary/50">
      <div className="mb-4 flex items-start gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
          <AvatarFallback>{creator.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{creator.name}</h3>
            {creator.verified && (
              <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{creator.username}</p>
        </div>
      </div>

      {creator.location && (
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{creator.location}</span>
        </div>
      )}

      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{creator.bio}</p>

      <div className="mb-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-semibold text-foreground">{creator.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Package className="h-4 w-4" />
          <span>{creator.itemsSold} продано</span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {creator.categories.slice(0, 2).map((category) => (
          <Badge key={category} variant="outline" className="border-primary/30 text-xs">
            {category}
          </Badge>
        ))}
        {creator.categories.length > 2 && (
          <Badge variant="outline" className="border-primary/30 text-xs">
            +{creator.categories.length - 2}
          </Badge>
        )}
      </div>

      <Link href={`/profile/${creator.id}`}>
        <Button className="w-full" size="sm">
          Посмотреть профиль
        </Button>
      </Link>
    </Card>
  )
}
