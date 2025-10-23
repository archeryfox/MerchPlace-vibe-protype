"use client"

import Image from "next/image"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import { MapPin, CheckCircle, Heart, Share2 } from "lucide-react"

interface ProfileHeaderProps {
  user: {
    id: number
    name: string
    username: string
    avatar: string
    bio: string
    verified: boolean
    isCreator: boolean
    categories: string[]
    location?: string
  }
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="relative h-32 w-32 flex-shrink-0">
          <Image
            src={user.avatar || "/placeholder.svg"}
            alt={user.name}
            fill
            className="rounded-full border-4 border-primary object-cover"
          />
          {user.verified && (
            <div className="absolute bottom-2 right-2 rounded-full bg-primary p-1">
              <CheckCircle className="h-5 w-5 text-primary-foreground" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
            {user.isCreator && (
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Создатель
              </Badge>
            )}
          </div>

          <p className="mb-3 text-muted-foreground">{user.username}</p>

          <p className="mb-4 max-w-2xl text-balance leading-relaxed text-foreground">{user.bio}</p>

          {user.location && (
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
          )}

          <div className="mb-4 flex flex-wrap gap-2">
            {user.categories.map((category) => (
              <Badge key={category} variant="outline" className="border-primary/30 text-foreground">
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="gap-2">
              <Heart className="h-4 w-4" />
              Подписаться
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Поделиться
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
