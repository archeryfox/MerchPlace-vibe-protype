import { Product } from '@/domain/entities/product/model'
import { mockUsers } from './mockUsers'

export const mockProducts: Product[] = [
  {
    id: 101,
    title: "Значок 'Furry Pride' эмалированный",
    description: "Эмалированный значок высокого качества. Размер 3см.",
    image: "/enamel-pin-furry.jpg",
    price: 350,
    stock: 45,
    category: "Аксессуары",
    seller: mockUsers[0],
    rating: 4.8,
    reviews: 23,
  },
  {
    id: 102,
    title: "Стикерпак 'Anime Vibes' (20 шт)",
    description: "Набор из 20 водостойких стикеров с аниме персонажами.",
    image: "/anime-sticker-pack.png",
    price: 500,
    stock: 120,
    category: "Стикеры",
    seller: mockUsers[1],
    rating: 5.0,
    reviews: 67,
  },
  {
    id: 103,
    title: "Артбук 'Furry Fantasy' 2024",
    description: "Коллекционный артбук с работами 30 художников. 120 страниц.",
    image: "/artbook-fantasy.jpg",
    price: 1500,
    stock: 15,
    category: "Книги",
    seller: mockUsers[0],
    rating: 4.9,
    reviews: 12,
  },
  {
    id: 104,
    title: "Плюшевая игрушка 'Дракон' ручной работы",
    description: "Мягкая игрушка ручной работы, высота 25см.",
    image: "/plush-dragon-toy.jpg",
    price: 2500,
    stock: 8,
    category: "Игрушки",
    seller: mockUsers[1],
    rating: 5.0,
    reviews: 34,
  },
]

// Alias for backward compatibility
export const mockShopItems = mockProducts
