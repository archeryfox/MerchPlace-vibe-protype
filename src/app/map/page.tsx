"use client"

import { useState } from "react"
import { Card } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Input } from "@/shared/ui/input"
import { MapPin, Search, X, ExternalLink, Star, ZoomIn, ZoomOut } from "lucide-react"
import Link from "next/link"
import { mockEventMap } from "@/data/mock/mockEventMap"

export default function MapPage() {
  const [selectedBooth, setSelectedBooth] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [zoom, setZoom] = useState(1)

  const allBooths = mockEventMap.areas.flatMap((area) =>
    area.booths.map((booth) => ({ ...booth, area: area.name, areaColor: area.color })),
  )

  const filteredBooths = searchQuery
    ? allBooths.filter(
        (booth) =>
          booth.creator?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          booth.creator?.categories.some((c: string) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
          booth.number.includes(searchQuery),
      )
    : []

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="px-4 py-3">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Карта мероприятия</h1>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                className="h-8 w-8 p-0"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                className="h-8 w-8 p-0"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск по стендам..."
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
                        {booth.area}
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

      <main className="map-scroll-container overflow-auto">
        <style jsx>{`
          .map-scroll-container {
            scrollbar-width: thin;
            scrollbar-color: hsl(45 93% 47%) hsl(15 15% 16%);
          }
          
          .map-scroll-container::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          .map-scroll-container::-webkit-scrollbar-track {
            background: hsl(15 15% 16%);
            border-radius: 4px;
          }
          
          .map-scroll-container::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, hsl(45 93% 47%) 0%, hsl(45 93% 37%) 100%);
            border-radius: 4px;
            border: 1px solid hsl(15 15% 16%);
          }
          
          .map-scroll-container::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, hsl(45 93% 57%) 0%, hsl(45 93% 47%) 100%);
          }
          
          .map-scroll-container::-webkit-scrollbar-corner {
            background: hsl(15 15% 16%);
          }
        `}</style>

        <div className="min-w-[800px] p-4" style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
          {/* Main Stage and VIP Area */}
          <div className="mb-4 flex gap-4">
            <Card className="flex-1 border-2 border-yellow-500 bg-yellow-500/10 p-6 text-center">
              <div className="text-2xl font-bold text-yellow-500">ГЛАВНАЯ СЦЕНА</div>
              <div className="text-sm text-muted-foreground">Main Stage</div>
            </Card>
            <Card className="w-48 border-2 border-cyan-500 bg-cyan-500/10 p-6 text-center">
              <div className="text-lg font-bold text-cyan-500">VIP LOUNGE</div>
            </Card>
          </div>

          {/* Food Court */}
          <Card className="mb-4 border-2 border-orange-500 bg-orange-500/10 p-4 text-center">
            <div className="text-lg font-bold text-orange-500">🍕 FOOD COURT 🍔</div>
          </Card>

          {/* Main Exhibition Area with Aisles */}
          <div className="relative rounded-lg border-2 border-border bg-muted/20 p-4">
            <div className="space-y-6">
              {mockEventMap.areas.map((area, areaIndex) => (
                <div key={area.id} className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-4 w-4 rounded" style={{ backgroundColor: area.color }} />
                    <span className="text-sm font-semibold text-foreground">{area.name}</span>
                  </div>

                  <div className="space-y-2">
                    {Array.from({ length: Math.ceil(area.booths.length / 12) }).map((_, rowIndex) => (
                      <div key={rowIndex} className="flex gap-2">
                        {area.booths.slice(rowIndex * 12, (rowIndex + 1) * 12).map((booth, colIndex) => {
                          const isAisle = (colIndex + 1) % 3 === 0 && colIndex !== 11

                          return (
                            <div key={booth.id} className="flex gap-2">
                              {booth.creator ? (
                                <button
                                  onClick={() => setSelectedBooth({ ...booth, area: area.name, areaColor: area.color })}
                                  className="relative h-12 w-12 rounded border-2 transition-all hover:scale-105 hover:shadow-lg"
                                  style={{
                                    backgroundColor: `${area.color}40`,
                                    borderColor: area.color,
                                    borderWidth: selectedBooth?.id === booth.id ? "3px" : "2px",
                                  }}
                                >
                                  <Star className="absolute right-0.5 top-0.5 h-2.5 w-2.5 fill-primary text-primary" />
                                </button>
                              ) : (
                                <div
                                  className="relative h-12 w-12 rounded border"
                                  style={{
                                    backgroundColor: "#1a1a1a",
                                    borderColor: "#333",
                                  }}
                                />
                              )}

                              {isAisle && <div className="w-3 rounded bg-muted/50" />}
                            </div>
                          )
                        })}
                      </div>
                    ))}
                  </div>

                  {areaIndex < mockEventMap.areas.length - 1 && (
                    <div className="my-4 h-6 rounded bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent">
                      <div className="flex h-full items-center justify-center text-[10px] text-muted-foreground">
                        • • • ПРОХОД • • •
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Entrance */}
          <Card className="mt-4 border-2 border-amber-600 bg-amber-600/10 p-4 text-center">
            <div className="text-lg font-bold text-amber-600">⬇️ ГЛАВНЫЙ ВХОД / MAIN ENTRANCE ⬇️</div>
          </Card>
        </div>

        {/* Legend */}
        <Card className="mx-4 mb-4 border-border bg-card p-4">
          <h3 className="mb-3 font-semibold text-foreground">Легенда категорий</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {mockEventMap.areas.map((area) => (
              <div key={area.id} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded" style={{ backgroundColor: area.color }} />
                <span className="text-muted-foreground">{area.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-2 border-t border-border pt-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded border-2 border-foreground bg-primary/20" />
              <span className="text-muted-foreground">Занятый стенд</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded border border-muted-foreground/30 bg-muted" />
              <span className="text-muted-foreground">Свободный стенд</span>
            </div>
          </div>
        </Card>
      </main>

      {/* Selected Booth Details */}
      {selectedBooth && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4">
          <Card className="w-full max-w-lg border-border bg-card p-6 animate-in slide-in-from-bottom">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="h-8 w-8 rounded border-2 border-foreground"
                  style={{ backgroundColor: selectedBooth.areaColor }}
                />
                <div>
                  <div className="text-sm text-muted-foreground">{selectedBooth.area}</div>
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
                        <Badge variant="secondary" className="bg-primary/20 text-xs text-primary">
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
    </div>
  )
}
