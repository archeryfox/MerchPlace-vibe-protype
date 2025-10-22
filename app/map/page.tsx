"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { MapPin, Search, X, ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import { mockEventMap } from "@/lib/mock-data"

export default function MapPage() {
  const [selectedBooth, setSelectedBooth] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const allBooths = mockEventMap.pavilions.flatMap((p) =>
    p.stands.map((s) => ({ ...s, pavilion: p.name, pavilionColor: p.color })),
  )

  const filteredBooths = searchQuery
    ? allBooths.filter(
        (booth) =>
          booth.creator?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          booth.creator?.categories.some((c: string) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
          booth.number.toString().includes(searchQuery),
      )
    : []

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="px-4 py-4">
          <h1 className="mb-3 text-xl font-bold text-foreground">Карта мероприятия</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск по художникам, категориям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {searchQuery && filteredBooths.length > 0 && (
            <Card className="absolute left-4 right-4 top-full z-20 mt-2 max-h-80 overflow-y-auto border-border bg-card p-2">
              {filteredBooths.map((booth) => (
                <button
                  key={booth.id}
                  onClick={() => {
                    setSelectedBooth(booth)
                    setSearchQuery("")
                  }}
                  className="flex w-full items-center gap-3 rounded-lg p-3 text-left hover:bg-muted"
                >
                  {booth.creator ? (
                    <>
                      <Avatar className="h-10 w-10 border border-primary">
                        <AvatarImage src={booth.creator.avatar || "/placeholder.svg"} alt={booth.creator.name} />
                        <AvatarFallback>{booth.creator.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{booth.creator.name}</div>
                        <div className="text-xs text-muted-foreground">Стенд {booth.number}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {booth.pavilion}
                      </Badge>
                    </>
                  ) : (
                    <div className="text-sm text-muted-foreground">Стенд {booth.number} - Свободно</div>
                  )}
                </button>
              ))}
            </Card>
          )}
        </div>
      </div>

      <main className="px-4 py-6">
        <div className="space-y-6">
          {mockEventMap.pavilions.map((pavilion) => (
            <Card key={pavilion.id} className="border-border bg-card p-4">
              <div className="mb-4 flex items-center gap-2">
                <div
                  className="h-6 w-6 rounded border-2 border-foreground"
                  style={{ backgroundColor: pavilion.color }}
                />
                <h2 className="text-lg font-bold text-foreground">{pavilion.name}</h2>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {pavilion.stands.map((stand) => (
                  <button
                    key={stand.id}
                    onClick={() =>
                      setSelectedBooth({ ...stand, pavilion: pavilion.name, pavilionColor: pavilion.color })
                    }
                    className={`relative aspect-square rounded-lg border-2 transition-all ${
                      stand.creator
                        ? "border-primary bg-primary/20 hover:bg-primary/30"
                        : "border-muted-foreground/30 bg-muted hover:bg-muted-foreground/20"
                    } ${selectedBooth?.id === stand.id ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-1">
                      <span className="text-xs font-bold text-foreground">{stand.number}</span>
                      {stand.creator && <Star className="mt-1 h-3 w-3 fill-primary text-primary" />}
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {selectedBooth && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4">
            <Card className="w-full max-w-lg border-border bg-card p-6 animate-in slide-in-from-bottom">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-8 w-8 rounded border-2 border-foreground"
                    style={{ backgroundColor: selectedBooth.pavilionColor }}
                  />
                  <div>
                    <div className="text-sm text-muted-foreground">{selectedBooth.pavilion}</div>
                    <div className="font-bold text-foreground">Стенд {selectedBooth.number}</div>
                  </div>
                </div>
                <button onClick={() => setSelectedBooth(null)} className="rounded-full p-2 hover:bg-muted">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {selectedBooth.creator ? (
                <div>
                  <div className="mb-4 flex items-start gap-4">
                    <Avatar className="h-16 w-16 border-2 border-primary">
                      <AvatarImage
                        src={selectedBooth.creator.avatar || "/placeholder.svg"}
                        alt={selectedBooth.creator.name}
                      />
                      <AvatarFallback>{selectedBooth.creator.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="text-lg font-bold text-foreground">{selectedBooth.creator.name}</h3>
                        {selectedBooth.creator.verified && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                            ✓
                          </Badge>
                        )}
                      </div>
                      <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span>{selectedBooth.creator.rating}</span>
                        <span className="mx-1">•</span>
                        <span>{selectedBooth.creator.itemsSold} продаж</span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground">{selectedBooth.creator.bio}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {selectedBooth.creator.categories.map((category: string) => (
                      <Badge key={category} variant="outline" className="border-primary/30 text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/profile/${selectedBooth.creator.id}`} className="flex-1">
                      <Button className="w-full gap-2">
                        Перейти в профиль
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <MapPin className="mx-auto mb-3 h-12 w-12 text-muted-foreground" />
                  <p className="text-muted-foreground">Этот стенд пока свободен</p>
                </div>
              )}
            </Card>
          </div>
        )}

        <Card className="mt-6 border-border bg-card p-4">
          <h3 className="mb-3 font-semibold text-foreground">Легенда</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded border-2 border-primary bg-primary/20" />
              <span className="text-muted-foreground">Занятый стенд</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded border-2 border-muted-foreground/30 bg-muted" />
              <span className="text-muted-foreground">Свободный стенд</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-muted-foreground">Активный создатель</span>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
