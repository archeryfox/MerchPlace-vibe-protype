"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 5000])

  const categories = ["Аксессуары", "Стикеры", "Книги", "Игрушки", "Одежда", "Арт"]

  return (
    <Card className="h-fit border-border bg-card p-6">
      <h3 className="mb-4 font-semibold text-foreground">Фильтры</h3>

      <div className="mb-6">
        <Label className="mb-3 block text-sm font-medium text-foreground">Категория</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox id={category} />
              <label htmlFor={category} className="text-sm text-muted-foreground">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <Label className="mb-3 block text-sm font-medium text-foreground">Цена</Label>
        <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="mb-2" />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{priceRange[0]}₽</span>
          <span>{priceRange[1]}₽</span>
        </div>
      </div>

      <div>
        <Label className="mb-3 block text-sm font-medium text-foreground">Наличие</Label>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox id="in-stock" defaultChecked />
            <label htmlFor="in-stock" className="text-sm text-muted-foreground">
              В наличии
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="pre-order" />
            <label htmlFor="pre-order" className="text-sm text-muted-foreground">
              Предзаказ
            </label>
          </div>
        </div>
      </div>
    </Card>
  )
}
