# Domain Layer (Слой бизнес-логики)

Аналог domain layer в Android Clean Architecture.

## Структура:
- `entities/` - Бизнес-сущности (как data classes в Kotlin)
  - `model/` - Модели данных
  - `repository/` - Интерфейсы репозиториев
- `usecases/` - Use cases (бизнес-логика)

## Правила:
- Не зависит от других слоёв
- Содержит только бизнес-логику
- Определяет интерфейсы репозиториев
- Все модели иммутабельны (readonly)

## Entities:
- Auction - Аукционы
- User - Пользователи
- Product - Товары
- Lottery - Лотереи
- Cart - Корзина
- Feed - Лента новостей
- Event - События и карта

## Use Cases:
Каждый use case выполняет одну конкретную задачу:
- GetAuctionsUseCase - получение списка аукционов
- PlaceBidUseCase - размещение ставки
- AddToCartUseCase - добавление в корзину
- и т.д.
