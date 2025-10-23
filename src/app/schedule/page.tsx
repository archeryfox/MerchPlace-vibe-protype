import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card } from "@/shared/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"

const scheduleEvents = [
  {
    id: 1,
    title: "Мастер-класс: Основы фурри-арта",
    host: "Алексей Волков",
    time: "10:00 - 12:00",
    date: "Сегодня",
    location: "Зал A",
    category: "Мастер-класс",
    attendees: 45,
    maxAttendees: 50,
    price: 500,
    image: "/workshop-furry-art.jpg",
  },
  {
    id: 2,
    title: "Панельная дискуссия: Будущее цифрового искусства",
    host: "Мария Светлова и гости",
    time: "14:00 - 15:30",
    date: "Сегодня",
    location: "Главная сцена",
    category: "Панель",
    attendees: 120,
    maxAttendees: 200,
    price: 0,
    image: "/panel-digital-art.jpg",
  },
  {
    id: 3,
    title: "Конкурс косплея",
    host: "Организаторы",
    time: "16:00 - 18:00",
    date: "Сегодня",
    location: "Главная сцена",
    category: "Конкурс",
    attendees: 89,
    maxAttendees: 100,
    price: 300,
    image: "/cosplay-contest.jpg",
  },
  {
    id: 4,
    title: "Встреча с художниками",
    host: "Приглашенные гости",
    time: "11:00 - 13:00",
    date: "Завтра",
    location: "Зал B",
    category: "Встреча",
    attendees: 67,
    maxAttendees: 80,
    price: 0,
    image: "/artist-meetup.jpg",
  },
  {
    id: 5,
    title: "Аукцион редких коллекционных предметов",
    host: "Организаторы",
    time: "15:00 - 17:00",
    date: "Завтра",
    location: "Аукционный зал",
    category: "Аукцион",
    attendees: 156,
    maxAttendees: 150,
    price: 1000,
    image: "/live-auction.jpg",
  },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Расписание</h1>
          <p className="text-sm text-muted-foreground mt-1">Все события фестиваля</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="today">Сегодня</TabsTrigger>
            <TabsTrigger value="tomorrow">Завтра</TabsTrigger>
            <TabsTrigger value="all">Все дни</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-4">
            {scheduleEvents
              .filter((event) => event.date === "Сегодня")
              .map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="flex gap-4 p-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={`/.jpg?height=80&width=80&query=${event.title}`}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground text-balance">{event.title}</h3>
                        <Badge variant="secondary" className="flex-shrink-0">
                          {event.category}
                        </Badge>
                      </div>

                      <div className="space-y-1.5 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>
                            {event.attendees}/{event.maxAttendees} участников
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-lg font-bold text-primary">
                          {event.price === 0 ? "Бесплатно" : `${event.price}₽`}
                        </span>
                        <Button size="sm" disabled={event.attendees >= event.maxAttendees}>
                          {event.attendees >= event.maxAttendees ? "Мест нет" : "Записаться"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="tomorrow" className="space-y-4">
            {scheduleEvents
              .filter((event) => event.date === "Завтра")
              .map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="flex gap-4 p-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={`/.jpg?height=80&width=80&query=${event.title}`}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground text-balance">{event.title}</h3>
                        <Badge variant="secondary" className="flex-shrink-0">
                          {event.category}
                        </Badge>
                      </div>

                      <div className="space-y-1.5 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>
                            {event.attendees}/{event.maxAttendees} участников
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-lg font-bold text-primary">
                          {event.price === 0 ? "Бесплатно" : `${event.price}₽`}
                        </span>
                        <Button size="sm" disabled={event.attendees >= event.maxAttendees}>
                          {event.attendees >= event.maxAttendees ? "Мест нет" : "Записаться"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {scheduleEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={`/.jpg?height=80&width=80&query=${event.title}`}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-foreground text-balance">{event.title}</h3>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {event.category}
                      </Badge>
                    </div>

                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>
                          {event.attendees}/{event.maxAttendees} участников
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-primary">
                        {event.price === 0 ? "Бесплатно" : `${event.price}₽`}
                      </span>
                      <Button size="sm" disabled={event.attendees >= event.maxAttendees}>
                        {event.attendees >= event.maxAttendees ? "Мест нет" : "Записаться"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
