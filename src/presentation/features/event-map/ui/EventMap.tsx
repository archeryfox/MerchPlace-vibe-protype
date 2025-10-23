"use client"

import { Card } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { EventMap as EventMapType } from '@/domain/entities/event/model'

interface EventMapProps {
  eventMap: EventMapType
}

export function EventMap({ eventMap }: EventMapProps) {
  const [selectedBooth, setSelectedBooth] = useState<any>(null)

  return (
    <div className="grid gap-6">
      {eventMap.areas.map((area) => (
        <Card key={area.id} className="border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded border-2 border-foreground" style={{ backgroundColor: area.color }} />
            <h3 className="text-xl font-bold text-foreground">{area.name}</h3>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-border bg-muted">
            {area.booths.map((booth, index) => (
              <button
                key={booth.id}
                onClick={() => setSelectedBooth(booth)}
                className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-2 transition-all hover:scale-110 ${
                  booth.creator
                    ? "border-primary bg-primary/20 hover:bg-primary/30"
                    : "border-muted-foreground bg-muted hover:bg-muted-foreground/20"
                } ${selectedBooth?.id === booth.id ? "scale-110 ring-4 ring-primary" : ""}`}
                style={{
                  left: `${20 + (index % 6) * 15}%`,
                  top: `${20 + Math.floor(index / 6) * 20}%`,
                }}
              >
                <span className="text-sm font-bold text-foreground">{booth.number}</span>
              </button>
            ))}
          </div>

          {selectedBooth && selectedBooth.creator && (
            <Card className="mt-4 border-primary/50 bg-card p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage
                    src={selectedBooth.creator.avatar || "/placeholder.svg"}
                    alt={selectedBooth.creator.name}
                  />
                  <AvatarFallback>{selectedBooth.creator.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{selectedBooth.creator.name}</h4>
                    {selectedBooth.creator.verified && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        Проверен
                      </Badge>
                    )}
                  </div>

                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Стенд {selectedBooth.number}</span>
                  </div>

                  <p className="mb-3 text-sm text-muted-foreground">{selectedBooth.creator.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {selectedBooth.creator.categories.map((category: string) => (
                      <Badge key={category} variant="outline" className="border-primary/30 text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/profile/${selectedBooth.creator.id}`}>
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
