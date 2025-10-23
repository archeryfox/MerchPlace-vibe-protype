import { User, Bell, Lock, CreditCard, Globe, Moon, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { Card } from "@/shared/ui/card"
import { Switch } from "@/shared/ui/switch"
import { Button } from "@/shared/ui/button"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Настройки</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        <Card className="divide-y divide-border">
          <div className="p-4">
            <h2 className="text-sm font-semibold text-foreground mb-3">Аккаунт</h2>
            <div className="space-y-3">
              <button className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Профиль</p>
                    <p className="text-xs text-muted-foreground">Редактировать информацию</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>

              <button className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Безопасность</p>
                    <p className="text-xs text-muted-foreground">Пароль и двухфакторная аутентификация</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>

              <button className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Платежи</p>
                    <p className="text-xs text-muted-foreground">Способы оплаты и история</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-sm font-semibold text-foreground mb-3">Уведомления</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Push-уведомления</p>
                    <p className="text-xs text-muted-foreground">Получать уведомления на устройство</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email-уведомления</p>
                    <p className="text-xs text-muted-foreground">Получать письма о новых событиях</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Уведомления о ставках</p>
                    <p className="text-xs text-muted-foreground">Когда кто-то делает ставку</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-sm font-semibold text-foreground mb-3">Приложение</h2>
            <div className="space-y-3">
              <button className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Язык</p>
                    <p className="text-xs text-muted-foreground">Русский</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Темная тема</p>
                    <p className="text-xs text-muted-foreground">Использовать темное оформление</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <button className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Помощь и поддержка</p>
                    <p className="text-xs text-muted-foreground">FAQ и связь с поддержкой</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </Card>

        <Button variant="destructive" className="w-full" size="lg">
          <LogOut className="w-5 h-5 mr-2" />
          Выйти из аккаунта
        </Button>

        <div className="text-center text-xs text-muted-foreground">
          <p>RareMerch v1.0.0</p>
          <p className="mt-1">© 2025 FurryCon. Все права защищены.</p>
        </div>
      </div>
    </div>
  )
}
