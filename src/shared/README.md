# Shared Layer (Общие ресурсы)

Аналог core module в Android.

## Структура:
- `ui/` - UI Kit компоненты (shadcn/ui)
- `lib/` - Утилиты
- `hooks/` - Кастомные React хуки
- `config/` - Конфигурация приложения
- `types/` - Общие TypeScript типы

## Правила:
- Переиспользуется во всех слоях
- Не зависит от бизнес-логики
- Содержит только общие компоненты и утилиты

## UI Kit:
Базовые UI компоненты из shadcn/ui:
- Button, Card, Input, Badge, Avatar и др.

## Hooks:
- use-toast - Уведомления
- use-cart - Работа с корзиной
- use-media-query - Адаптивность

## Config:
- app.ts - Конфигурация приложения
- routes.ts - Маршруты
- constants.ts - Константы
