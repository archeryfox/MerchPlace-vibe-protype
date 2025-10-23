"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { QrCode, CalendarIcon, Clock, User, CheckCircle } from "lucide-react"
import { useState } from "react"

interface QRBookingProps {
  creatorId: number
}

export function QRBooking({ creatorId }: QRBookingProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState("14:00")
  const [name, setName] = useState("")
  const [showQR, setShowQR] = useState(false)

  const handleBooking = () => {
    setShowQR(true)
  }

  const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Booking Form */}
      <Card className="border-border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <CalendarIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Забронировать встречу</h2>
            <p className="text-sm text-muted-foreground">Встретьтесь с создателем лично</p>
          </div>
        </div>

        {!showQR ? (
          <>
            <div className="mb-6">
              <Label className="mb-3 block text-sm font-medium text-foreground">Выберите дату</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border border-border bg-background"
              />
            </div>

            <div className="mb-6">
              <Label className="mb-3 block text-sm font-medium text-foreground">Выберите время</Label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={time === slot ? "default" : "outline"}
                    onClick={() => setTime(slot)}
                    className={time === slot ? "" : "bg-transparent"}
                    size="sm"
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Label className="mb-2 block text-sm font-medium text-foreground">Ваше имя</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите ваше имя" />
            </div>

            <Button className="w-full gap-2" size="lg" onClick={handleBooking} disabled={!name || !date}>
              <CheckCircle className="h-5 w-5" />
              Забронировать
            </Button>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-lg border-4 border-primary bg-white p-4">
                <QrCode className="h-48 w-48 text-foreground" />
              </div>
            </div>

            <div className="mb-6 rounded-lg border border-border bg-background p-4">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Бронирование подтверждено!</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{name}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{date?.toLocaleDateString("ru-RU")}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{time}</span>
                </div>
              </div>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
              Покажите этот QR-код на стенде создателя для подтверждения бронирования
            </p>

            <Button variant="outline" onClick={() => setShowQR(false)} className="bg-transparent">
              Создать новое бронирование
            </Button>
          </div>
        )}
      </Card>

      {/* Info */}
      <div className="space-y-6">
        <Card className="border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">О встрече</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Забронируйте личную встречу с создателем на его стенде во время мероприятия.</p>
            <p>Вы сможете:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Обсудить индивидуальный заказ</li>
              <li>Получить автограф</li>
              <li>Сфотографироваться с создателем</li>
              <li>Задать вопросы о творчестве</li>
            </ul>
          </div>
        </Card>

        <Card className="border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Правила бронирования</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Встреча длится 15 минут</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Приходите за 5 минут до начала</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Бронирование бесплатное</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Можно отменить за 1 час</span>
            </div>
          </div>
        </Card>

        <Card className="border-primary/50 bg-primary/10 p-6">
          <div className="flex items-start gap-3">
            <QrCode className="h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">QR-код профиля</h4>
              <p className="text-sm text-muted-foreground">
                После бронирования вы получите уникальный QR-код для быстрого доступа к встрече
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
