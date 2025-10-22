import { Heart, MessageCircle, Gavel, ShoppingBag, Calendar, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const notifications = [
  {
    id: 1,
    type: "bid",
    icon: Gavel,
    title: "Новая ставка на ваш аукцион",
    message: "Пользователь @maria_art сделал ставку 2500₽ на 'Фигурка Sonic'",
    time: "5 минут назад",
    read: false,
    avatar: "/female-artist.png",
  },
  {
    id: 2,
    type: "like",
    icon: Heart,
    title: "Новый лайк",
    message: "Алексей Волков лайкнул ваш пост",
    time: "1 час назад",
    read: false,
    avatar: "/artist-portrait.png",
  },
  {
    id: 3,
    type: "comment",
    icon: MessageCircle,
    title: "Новый комментарий",
    message: "@alexwolf: 'Отличная работа! Когда будет доступна для покупки?'",
    time: "2 часа назад",
    read: false,
    avatar: "/artist-portrait.png",
  },
  {
    id: 4,
    type: "order",
    icon: ShoppingBag,
    title: "Заказ оформлен",
    message: "Ваш заказ #12345 успешно оформлен и отправлен",
    time: "3 часа назад",
    read: true,
  },
  {
    id: 5,
    type: "event",
    icon: Calendar,
    title: "Напоминание о событии",
    message: "Мастер-класс 'Основы фурри-арта' начнется через 1 час",
    time: "4 часа назад",
    read: true,
  },
  {
    id: 6,
    type: "winner",
    icon: CheckCircle2,
    title: "Вы выиграли лотерею!",
    message: "Поздравляем! Вы выиграли 'Набор из 5 фигурок' в розыгрыше",
    time: "1 день назад",
    read: true,
  },
]

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Уведомления</h1>
              {unreadCount > 0 && <p className="text-sm text-muted-foreground mt-1">{unreadCount} непрочитанных</p>}
            </div>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm">
                Прочитать все
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-2">
        {notifications.map((notification) => {
          const Icon = notification.icon

          return (
            <Card
              key={notification.id}
              className={cn(
                "p-4 transition-colors cursor-pointer hover:bg-muted/50",
                !notification.read && "bg-primary/5 border-primary/20",
              )}
            >
              <div className="flex gap-3">
                {notification.avatar ? (
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm text-foreground">{notification.title}</h3>
                    {!notification.read && <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1" />}
                  </div>
                  <p className="text-sm text-muted-foreground text-balance">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
