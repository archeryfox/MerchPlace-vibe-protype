# Presentation Layer (Слой представления)

Аналог presentation layer в Android (MVVM/MVI).

## Структура:
- `features/` - Изолированные фичи (как feature modules)
  - `ui/` - UI компоненты фичи
  - `viewmodel/` - ViewModel (Zustand store)
  - `model/` - UI state и events
- `widgets/` - Переиспользуемые UI блоки (как Composables)
- `screens/` - Экраны приложения (как Activities/Fragments)

## Правила:
- Использует domain use cases
- Управляет UI состоянием через viewmodel (Zustand)
- Отображает данные пользователю
- Не содержит бизнес-логику

## Features:
- cart-management - Управление корзиной
- auction-bidding - Размещение ставок
- lottery-participation - Участие в лотереях
- donation - Донаты создателям
- booking - Бронирование встреч
- event-map - Карта мероприятия

## Widgets:
- header - Шапка сайта
- navigation - Навигация
- auction-list - Список аукционов
- lottery-list - Список лотерей
- shop-catalog - Каталог товаров
- feed - Лента новостей
- profile - Профиль пользователя
- и др.

## Screens:
Каждый screen соответствует странице приложения и использует widgets и features.
