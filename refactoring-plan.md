# 🚀 План рефакторинга к Feature-Sliced Design

## 📋 Текущее состояние vs Целевое состояние

### ❌ Текущая структура
```
components/
├── ui/                    # UI компоненты
├── auction-card.tsx       # Бизнес компоненты
├── lottery-card.tsx       # Бизнес компоненты
└── shop-item-card.tsx    # Бизнес компоненты

lib/
├── cart-store.ts         # Единственный store
└── mock-data.ts          # Все данные в одном файле
```

### ✅ Целевая FSD структура
```
src/
├── app/                  # Next.js App Router
├── pages/                # Next.js страницы
├── widgets/              # Сложные UI блоки
├── features/             # Бизнес-фичи
├── entities/              # Бизнес-сущности
├── shared/               # Общие ресурсы
└── ...
```

## 🎯 Этапы рефакторинга

### Этап 1: Создание базовой структуры FSD

#### 1.1 Создание папок
```bash
mkdir -p src/{widgets,features,entities,shared}
mkdir -p src/shared/{ui,lib,api,config}
mkdir -p src/entities/{auction,user,product,lottery}
mkdir -p src/features/{auction-bidding,lottery-participation,cart-management}
mkdir -p src/widgets/{header,auction-list,lottery-wheel}
```

#### 1.2 Перемещение UI компонентов
```bash
# Переместить в shared/ui
mv components/ui/* src/shared/ui/
mv components/theme-provider.tsx src/shared/ui/
```

### Этап 2: Выделение сущностей (Entities)

#### 2.1 Auction Entity
```typescript
// src/entities/auction/model/types.ts
export interface Auction {
  id: number
  title: string
  description: string
  images: string[]
  currentBid: number
  startingBid: number
  bids: number
  timeLeft: string
  endTime: Date
  category: string
  seller: User
  condition: string
  rarity: string
  views: number
}

// src/entities/auction/model/store.ts
export const useAuctionStore = create<AuctionStore>((set, get) => ({
  auctions: [],
  currentAuction: null,
  // ... методы
}))

// src/entities/auction/ui/auction-card.tsx
export const AuctionCard = ({ auction }: AuctionCardProps) => {
  // Компонент карточки аукциона
}
```

#### 2.2 User Entity
```typescript
// src/entities/user/model/types.ts
export interface User {
  id: number
  name: string
  username: string
  avatar: string
  bio: string
  followers: number
  following: number
  itemsSold: number
  rating: number
  verified: boolean
  isCreator: boolean
  categories: string[]
  location: string
  donationEnabled: boolean
  donationGoal: number
  donationCurrent: number
}

// src/entities/user/model/store.ts
export const useUserStore = create<UserStore>((set, get) => ({
  currentUser: null,
  users: [],
  // ... методы
}))
```

#### 2.3 Product Entity
```typescript
// src/entities/product/model/types.ts
export interface Product {
  id: number
  title: string
  description: string
  image: string
  price: number
  stock: number
  category: string
  seller: User
  rating: number
  reviews: number
}

// src/entities/product/model/store.ts
export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  currentProduct: null,
  // ... методы
}))
```

### Этап 3: Создание фич (Features)

#### 3.1 Auction Bidding Feature
```typescript
// src/features/auction-bidding/model/types.ts
export interface Bid {
  id: number
  auctionId: number
  userId: number
  amount: number
  timestamp: Date
}

// src/features/auction-bidding/model/store.ts
export const useBiddingStore = create<BiddingStore>((set, get) => ({
  bids: [],
  placeBid: async (auctionId, amount) => {
    // Логика размещения ставки
  },
  // ... методы
}))

// src/features/auction-bidding/ui/bid-form.tsx
export const BidForm = ({ auctionId }: BidFormProps) => {
  // Форма для размещения ставки
}

// src/features/auction-bidding/ui/bid-history.tsx
export const BidHistory = ({ auctionId }: BidHistoryProps) => {
  // История ставок
}
```

#### 3.2 Lottery Participation Feature
```typescript
// src/features/lottery-participation/model/types.ts
export interface LotteryTicket {
  id: number
  lotteryId: number
  userId: number
  ticketNumber: number
  purchaseDate: Date
}

// src/features/lottery-participation/model/store.ts
export const useLotteryStore = create<LotteryStore>((set, get) => ({
  tickets: [],
  buyTicket: async (lotteryId) => {
    // Логика покупки билета
  },
  // ... методы
}))

// src/features/lottery-participation/ui/ticket-purchase.tsx
export const TicketPurchase = ({ lotteryId }: TicketPurchaseProps) => {
  // Компонент покупки билета
}
```

#### 3.3 Cart Management Feature
```typescript
// src/features/cart-management/model/types.ts
export interface CartItem {
  id: number
  productId: number
  quantity: number
  price: number
}

// src/features/cart-management/model/store.ts
export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (productId, quantity) => {
    // Логика добавления в корзину
  },
  removeItem: (itemId) => {
    // Логика удаления из корзины
  },
  // ... методы
}))

// src/features/cart-management/ui/cart-item.tsx
export const CartItem = ({ item }: CartItemProps) => {
  // Компонент элемента корзины
}
```

### Этап 4: Создание виджетов (Widgets)

#### 4.1 Header Widget
```typescript
// src/widgets/header/ui/header.tsx
export const Header = () => {
  const cartCount = useCartStore(state => state.getTotalItems())
  
  return (
    <header className="sticky top-0 z-50">
      {/* Логика шапки */}
    </header>
  )
}

// src/widgets/header/model/store.ts
export const useHeaderStore = create<HeaderStore>((set, get) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {
    // Логика мобильного меню
  },
}))
```

#### 4.2 Auction List Widget
```typescript
// src/widgets/auction-list/ui/auction-list.tsx
export const AuctionList = ({ filters }: AuctionListProps) => {
  const auctions = useAuctionStore(state => state.auctions)
  
  return (
    <div className="grid gap-4">
      {auctions.map(auction => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </div>
  )
}

// src/widgets/auction-list/ui/auction-filters.tsx
export const AuctionFilters = () => {
  // Компонент фильтров
}
```

### Этап 5: Настройка API слоя

#### 5.1 API клиенты
```typescript
// src/shared/api/base.ts
export class ApiClient {
  private baseURL: string
  
  constructor(baseURL: string) {
    this.baseURL = baseURL
  }
  
  async get<T>(endpoint: string): Promise<T> {
    // Базовая логика GET запросов
  }
  
  async post<T>(endpoint: string, data: any): Promise<T> {
    // Базовая логика POST запросов
  }
}

// src/shared/api/auctions.ts
export const auctionsApi = {
  getAll: () => apiClient.get<Auction[]>('/auctions'),
  getById: (id: number) => apiClient.get<Auction>(`/auctions/${id}`),
  create: (auction: CreateAuctionDto) => apiClient.post<Auction>('/auctions', auction),
}
```

#### 5.2 Типизация API
```typescript
// src/shared/api/types.ts
export interface ApiResponse<T> {
  data: T
  message: string
  status: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
```

### Этап 6: Настройка конфигурации

#### 6.1 Environment конфигурация
```typescript
// src/shared/config/env.ts
export const config = {
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
    timeout: 10000,
  },
  app: {
    name: 'RareMerch',
    version: '1.0.0',
  },
} as const
```

#### 6.2 Константы
```typescript
// src/shared/config/constants.ts
export const ROUTES = {
  HOME: '/',
  AUCTIONS: '/auctions',
  LOTTERIES: '/lotteries',
  SHOP: '/shop',
  PROFILE: '/profile',
} as const

export const API_ENDPOINTS = {
  AUCTIONS: '/auctions',
  LOTTERIES: '/lotteries',
  PRODUCTS: '/products',
  USERS: '/users',
} as const
```

## 🔄 Миграционный план

### Неделя 1: Подготовка
- [ ] Создание базовой структуры папок
- [ ] Настройка TypeScript конфигурации
- [ ] Создание базовых типов

### Неделя 2: Entities
- [ ] Миграция Auction entity
- [ ] Миграция User entity
- [ ] Миграция Product entity
- [ ] Создание базовых stores

### Неделя 3: Features
- [ ] Реализация Auction Bidding feature
- [ ] Реализация Lottery Participation feature
- [ ] Реализация Cart Management feature

### Неделя 4: Widgets
- [ ] Создание Header widget
- [ ] Создание Auction List widget
- [ ] Создание Lottery Wheel widget

### Неделя 5: API и тестирование
- [ ] Настройка API слоя
- [ ] Написание unit тестов
- [ ] Интеграционное тестирование

## 🧪 Тестирование

### Unit тесты
```typescript
// src/entities/auction/model/__tests__/store.test.ts
describe('AuctionStore', () => {
  it('should add auction', () => {
    const store = useAuctionStore.getState()
    store.addAuction(mockAuction)
    expect(store.auctions).toContain(mockAuction)
  })
})
```

### Integration тесты
```typescript
// src/features/auction-bidding/__tests__/integration.test.ts
describe('Auction Bidding Integration', () => {
  it('should place bid and update auction', async () => {
    // Тест полного цикла размещения ставки
  })
})
```

## 📊 Метрики успеха

### До рефакторинга
- ❌ Смешанные уровни абстракции
- ❌ Отсутствие типизации
- ❌ Слабая переиспользуемость
- ❌ Сложность тестирования

### После рефакторинга
- ✅ Чёткое разделение ответственности
- ✅ Полная типизация
- ✅ Высокая переиспользуемость
- ✅ Простота тестирования
- ✅ Масштабируемость

## 🎯 Заключение

Рефакторинг к FSD архитектуре значительно улучшит:
- **Масштабируемость** проекта
- **Переиспользуемость** компонентов
- **Тестируемость** кода
- **Читаемость** и поддержку
- **Командную работу** разработчиков

Это инвестиция в будущее проекта, которая окупится при росте команды и функциональности.

