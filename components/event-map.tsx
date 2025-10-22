"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface EventMapProps {
  eventMap: {
    pavilions: Array<{
      id: string
      name: string
      color: string
      stands: Array<{
        id: string
        number: number
        creator: any
        x: number
        y: number
      }>
    }>
  }
}

export function EventMap({ eventMap }: EventMapProps) {
  const [selectedStand, setSelectedStand] = useState<any>(null)

  return (
    <div className="grid gap-6">
      {eventMap.pavilions.map((pavilion) => (
        <Card key={pavilion.id} className="border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded border-2 border-foreground" style={{ backgroundColor: pavilion.color }} />
            <h3 className="text-xl font-bold text-foreground">{pavilion.name}</h3>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-border bg-muted">
            {pavilion.stands.map((stand) => (
              <button
                key={stand.id}
                onClick={() => setSelectedStand(stand)}
                className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-2 transition-all hover:scale-110 ${
                  stand.creator
                    ? "border-primary bg-primary/20 hover:bg-primary/30"
                    : "border-muted-foreground bg-muted hover:bg-muted-foreground/20"
                } ${selectedStand?.id === stand.id ? "scale-110 ring-4 ring-primary" : ""}`}
                style={{
                  left: `${stand.x}%`,
                  top: `${stand.y}%`,
                }}
              >
                <span className="text-sm font-bold text-foreground">{stand.number}</span>
              </button>
            ))}
          </div>

          {selectedStand && selectedStand.creator && (
            <Card className="mt-4 border-primary/50 bg-card p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage
                    src={selectedStand.creator.avatar || "/placeholder.svg"}
                    alt={selectedStand.creator.name}
                  />
                  <AvatarFallback>{selectedStand.creator.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{selectedStand.creator.name}</h4>
                    {selectedStand.creator.verified && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        Проверен
                      </Badge>
                    )}
                  </div>

                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Стенд {selectedStand.number}</span>
                  </div>

                  <p className="mb-3 text-sm text-muted-foreground">{selectedStand.creator.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {selectedStand.creator.categories.map((category: string) => (
                      <Badge key={category} variant="outline" className="border-primary/30 text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/profile/${selectedStand.creator.id}`}>
                    <Button className="mt-3 gap-2" size="sm">
                      Перейти в профиль
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </Card>
      ))}
    </div>
  )
}
