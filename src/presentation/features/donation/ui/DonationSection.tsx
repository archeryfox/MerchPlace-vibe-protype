"use client"

import { Card } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Textarea } from "@/shared/ui/textarea"
import { Heart, Target, TrendingUp } from "lucide-react"
import { useState } from "react"

interface DonationSectionProps {
  creatorName: string
  goal: number
  current: number
}

export function DonationSection({ creatorName, goal, current }: DonationSectionProps) {
  const [amount, setAmount] = useState(500)
  const [message, setMessage] = useState("")
  const progress = (current / goal) * 100

  const presetAmounts = [100, 500, 1000, 2500, 5000]

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Donation Form */}
      <Card className="border-border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Поддержать создателя</h2>
            <p className="text-sm text-muted-foreground">Помогите {creatorName} в творчестве</p>
          </div>
        </div>

        <div className="mb-6">
          <Label className="mb-3 block text-sm font-medium text-foreground">Выберите сумму</Label>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {presetAmounts.map((preset) => (
              <Button
                key={preset}
                variant={amount === preset ? "default" : "outline"}
                onClick={() => setAmount(preset)}
                className={amount === preset ? "" : "bg-transparent"}
              >
                {preset}₽
              </Button>
            ))}
          </div>

          <Label className="mb-2 block text-sm font-medium text-foreground">Или введите свою сумму</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number.parseInt(e.target.value))}
            placeholder="Введите сумму"
            className="mb-4"
          />

          <Label className="mb-2 block text-sm font-medium text-foreground">Сообщение (необязательно)</Label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Напишите слова поддержки..."
            rows={3}
            className="mb-4"
          />

          <Button className="w-full gap-2" size="lg">
            <Heart className="h-5 w-5" />
            Отправить {amount}₽
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-muted-foreground">
            Ваша поддержка помогает создателю продолжать творить и радовать вас новыми работами. Спасибо за вашу
            щедрость!
          </p>
        </div>
      </Card>

      {/* Goal Progress */}
      <div className="space-y-6">
        <Card className="border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Цель сбора</h3>
              <p className="text-sm text-muted-foreground">На новое оборудование</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-3xl font-bold text-primary">{current.toLocaleString()}₽</span>
              <span className="text-lg text-muted-foreground">из {goal.toLocaleString()}₽</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{progress.toFixed(0)}% от цели</p>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-primary/10 p-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <p className="text-sm text-foreground">
              Осталось собрать <span className="font-bold">{(goal - current).toLocaleString()}₽</span>
            </p>
          </div>
        </Card>

        <Card className="border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Последние донаты</h3>
          <div className="space-y-3">
            {[
              { name: "Анонимный", amount: 1000, message: "Спасибо за творчество!", time: "2 часа назад" },
              { name: "Мария К.", amount: 500, message: "Продолжайте в том же духе!", time: "5 часов назад" },
              { name: "Дмитрий", amount: 2500, message: "Ваши работы восхитительны!", time: "1 день назад" },
            ].map((donation, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold text-foreground">{donation.name}</span>
                  <span className="font-bold text-primary">{donation.amount}₽</span>
                </div>
                <p className="mb-1 text-sm text-muted-foreground">{donation.message}</p>
                <p className="text-xs text-muted-foreground">{donation.time}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
