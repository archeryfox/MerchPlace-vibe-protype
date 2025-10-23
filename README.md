# RareMerch - Биржа раритетного мерча

## Архитектура

Проект построен на **Feature-Sliced Design (FSD)** + **Android Clean Architecture**.

### Структура:

```
src/
├── app/           # Next.js App Router (роутинг)
├── domain/        # Бизнес-логика (entities, use cases)
├── data/          # Данные (repositories, API, mock)
├── presentation/  # UI (features, widgets, screens)
└── shared/        # Общие ресурсы (UI kit, utils, hooks)
```

### Слои:

- **Domain** - Бизнес-логика, не зависит от других слоёв
- **Data** - Работа с данными, реализует интерфейсы domain
- **Presentation** - UI и состояние, использует domain use cases
- **Shared** - Переиспользуемые компоненты и утилиты

Подробнее в README каждого слоя.

## Технологии

- **Next.js 16** - React фреймворк
- **React 19** - UI библиотека
- **TypeScript** - Типизация
- **Tailwind CSS 4** - Стилизация
- **Zustand** - State management
- **shadcn/ui** - UI компоненты
- **Bun** - Runtime и package manager

## Запуск

```bash
# Установка зависимостей
bun install

# Разработка
bun run dev

# Сборка
bun run build

# Production
bun run start
```

## Структура для Kotlin-разработчиков

Если вы знакомы с Android разработкой:

- `domain/` = domain layer (Clean Architecture)
- `data/` = data layer (repositories, data sources)
- `presentation/` = presentation layer (MVVM/MVI)
- `entities/model/` = data classes
- `usecases/` = use cases / interactors
- `viewmodel/` = ViewModel (на Zustand)
- `widgets/` = Composables
- `screens/` = Activities/Fragments
