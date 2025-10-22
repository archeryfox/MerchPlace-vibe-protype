"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { ru } from "date-fns/locale"

interface FeedPostProps {
  post: {
    id: number
    user: {
      id: number
      name: string
      username: string
      avatar: string
      verified: boolean
    }
    content: string
    images?: string[]
    likes: number
    comments: number
    timestamp: Date
    type: string
  }
}

export function FeedPost({ post }: FeedPostProps) {
  return (
    <Card className="border-border bg-card p-6">
      <div className="mb-4 flex items-start gap-3">
        <Link href={`/profile/${post.user.id}`}>
          <Avatar className="h-12 w-12 border-2 border-primary">
            <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex-1">
          <Link href={`/profile/${post.user.id}`}>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground hover:text-primary">{post.user.name}</h3>
              {post.user.verified && (
                <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              )}
            </div>
          </Link>
          <p className="text-sm text-muted-foreground">{post.user.username}</p>
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(post.timestamp, { addSuffix: true, locale: ru })}
          </p>
        </div>
      </div>

      <p className="mb-4 leading-relaxed text-foreground">{post.content}</p>

      {post.images && post.images.length > 0 && (
        <div className={`mb-4 grid gap-2 ${post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
          {post.images.map((image, index) => (
            <div key={index} className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <Image src={image || "/placeholder.svg"} alt={`Post image ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 border-t border-border pt-4">
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
          <Heart className="h-5 w-5" />
          <span>{post.likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
          <MessageCircle className="h-5 w-5" />
          <span>{post.comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  )
}
