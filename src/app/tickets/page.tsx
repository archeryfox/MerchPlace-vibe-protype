import { Ticket, QrCode, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { Card } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"

const userTickets = [
  {
    id: "TKT-2024-001",
    type: "VIP Пропуск",
    event: "FurryCon 2024",
    date: "15-17 декабря 2024",
    location: "Экспоцентр, Москва",
    status: "active",
    benefits: ["Ранний вход", "VIP зона", "Встречи с художниками", "Подарочный набор"],
    qrCode: "/qr-vip-pass.png",
  },
  {
    id: "TKT-2024-002",
    type: "Мастер-класс",
    event: "Основы фурри-арта",
    date: "15 декабря, 10:00",
    location: "Зал A",
    status: "active",
    host: "Алексей Волков",
    qrCode: "/qr-workshop.png",
  },
  {
    id: "TKT-2024-003",
    type: "Конкурс косплея",
    event: "Участие в конкурсе",
    date: "16 декабря, 16:00",
    location: "Главная сцена",
    status: "used",
    qrCode: "/qr-cosplay.png",
  },
]

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Мои билеты</h1>
          <p className="text-sm text-muted-foreground mt-1">Все ваши пропуски и билеты</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-4">
        {userTickets.map((ticket) => (
          <Card key={ticket.id} className="overflow-hidden">
            <div className="p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Ticket className="w-5 h-5 text-primary" />
                    <Badge variant={ticket.status === "active" ? "default" : "secondary"}>
                      {ticket.status === "active" ? "Активен" : "Использован"}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{ticket.type}</h3>
                  <p className="text-sm text-muted-foreground">{ticket.event}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{ticket.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{ticket.location}</span>
                </div>
                {ticket.host && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-medium">Ведущий:</span>
                    <span>{ticket.host}</span>
                  </div>
                )}
              </div>

              {ticket.benefits && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Преимущества:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {ticket.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
                <div className="text-center space-y-2">
                  <div className="w-48 h-48 bg-background rounded-lg flex items-center justify-center mx-auto">
                    <img
                      src={`/generic-qr-code.png?height=192&width=192&query=QR code for ${ticket.id}`}
                      alt="QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">{ticket.id}</p>
                </div>
              </div>

              {ticket.status === "active" && (
                <Button className="w-full" size="lg">
                  <QrCode className="w-5 h-5 mr-2" />
                  Показать на входе
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
