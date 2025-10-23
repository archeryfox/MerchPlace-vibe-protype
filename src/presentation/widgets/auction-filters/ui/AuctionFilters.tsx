"use client"

import { Card } from "@/shared/ui/card"
import { Label } from "@/shared/ui/label"
import { Checkbox } from "@/shared/ui/checkbox"
import { Slider } from "@/shared/ui/slider"
import { Button } from "@/shared/ui/button"

const categories = ["Часы", "Одежда", "Винил", "Техника", "Игры", "Книги"]

export function AuctionFilters() {
  return (
    <Card className="border-border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold text-foreground">Фильтры</h2>

      <div className="mb-6">
        <h3 className="mb-3 text-sm font-medium text-foreground">Категории</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm font-normal text-muted-foreground">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-sm font-medium text-foreground">Цена</h3>
        <div className="space-y-4">
          <Slider defaultValue={[0, 100000]} max={100000} step={1000} />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$100,000</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-sm font-medium text-foreground">Время окончания</h3>
        <div className="space-y-3">
          {["Менее 1 часа", "1-6 часов", "6-24 часа", "Более 24 часов"].map((time) => (
            <div key={time} className="flex items-center space-x-2">
              <Checkbox id={time} />
              <Label htmlFor={time} className="text-sm font-normal text-muted-foreground">
                {time}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full bg-transparent" variant="outline">
        Сбросить фильтры
      </Button>
    </Card>
  )
}
