# Data Layer (Слой данных)

Аналог data layer в Android Clean Architecture.

## Структура:
- `repository/` - Реализации репозиториев
- `datasource/` - Источники данных
  - `remote/` - API клиенты
  - `local/` - LocalStorage
- `mock/` - Моковые данные для разработки

## Правила:
- Реализует интерфейсы из domain
- Работает с источниками данных
- Преобразует данные в domain модели
- Обрабатывает ошибки

## Repository Implementations:
- AuctionRepositoryImpl
- UserRepositoryImpl
- ProductRepositoryImpl
- LotteryRepositoryImpl
- CartRepositoryImpl
- FeedRepositoryImpl
- EventRepositoryImpl

## Mock Data:
Моковые данные разделены по файлам для удобства:
- mockAuctions.ts
- mockUsers.ts
- mockProducts.ts
- mockLotteries.ts
- mockFeedPosts.ts
- mockEventMap.ts
