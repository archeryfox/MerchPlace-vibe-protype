"use client"

import { Button } from "@/shared/ui/button"
import { useState, useRef } from "react"
import { Sparkles, Trophy } from "lucide-react"
import { LotteryPrize } from '@/domain/entities/lottery/model'

interface LotteryWheelProps {
  prizes: LotteryPrize[]
}

export function LotteryWheel({ prizes }: LotteryWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [winner, setWinner] = useState<{ description: string; value: number } | null>(null)
  const wheelRef = useRef<HTMLDivElement>(null)

  const colors = ["#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e"]

  const spinWheel = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setWinner(null)

    const spins = 8
    const randomDegree = Math.floor(Math.random() * 360)
    const totalRotation = spins * 360 + randomDegree

    setRotation(rotation + totalRotation)

    setTimeout(() => {
      setIsSpinning(false)
      const winnerIndex = Math.floor(Math.random() * prizes.length)
      setWinner({
        description: prizes[winnerIndex].description,
        value: prizes[winnerIndex].value,
      })
    }, 5000)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        {/* Pointer */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-3">
          <div className="h-0 w-0 border-l-[16px] border-r-[16px] border-t-[28px] border-l-transparent border-r-transparent border-t-primary drop-shadow-lg" />
        </div>

        {/* Wheel */}
        <div
          ref={wheelRef}
          className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-primary shadow-2xl"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? "transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
          }}
        >
          {prizes.map((prize, index) => {
            const angle = 360 / prizes.length
            const rotation = angle * index

            return (
              <div
                key={prize.place}
                className="absolute left-1/2 top-1/2 h-40 w-40 origin-bottom"
                style={{
                  transform: `rotate(${rotation}deg) translateY(-100%)`,
                  clipPath: `polygon(50% 100%, 0% 0%, 100% 0%)`,
                  backgroundColor: colors[index % colors.length],
                }}
              >
                <div
                  className="flex h-full flex-col items-center justify-start gap-1 pt-6"
                  style={{
                    transform: `rotate(${angle / 2}deg)`,
                  }}
                >
                  <span className="text-center text-sm font-bold text-white drop-shadow">{prize.place}</span>
                  <span className="text-center text-xs font-semibold text-white/90 drop-shadow">{prize.value}₽</span>
                </div>
              </div>
            )
          })}

          {/* Center circle */}
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-primary bg-background shadow-lg">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
        </div>
      </div>

      <Button onClick={spinWheel} disabled={isSpinning} className="mb-4 w-full gap-2 text-base" size="lg">
        <Sparkles className="h-5 w-5" />
        {isSpinning ? "Крутится..." : "Крутить колесо"}
      </Button>

      {winner && (
        <div className="animate-in fade-in zoom-in w-full rounded-xl border-2 border-primary bg-gradient-to-br from-primary/20 to-primary/5 p-6 text-center duration-500">
          <Trophy className="mx-auto mb-3 h-12 w-12 text-primary" />
          <p className="mb-1 text-sm font-medium text-muted-foreground">Поздравляем! Вы выиграли:</p>
          <p className="mb-2 text-xl font-bold text-foreground">{winner.description}</p>
          <p className="text-3xl font-bold text-primary">{winner.value}₽</p>
        </div>
      )}
    </div>
  )
}
