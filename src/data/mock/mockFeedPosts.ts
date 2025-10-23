import { FeedPost } from '@/domain/entities/feed/model'
import { mockUsers } from './mockUsers'

export const mockFeedPosts: FeedPost[] = [
  {
    id: 1,
    user: mockUsers[0],
    content: "Только что завершил работу над новым артом! Скоро выставлю на аукцион 🎨",
    images: ["/furry-art-new.jpg"],
    likes: 234,
    comments: 45,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    type: "post",
  },
  {
    id: 2,
    user: mockUsers[1],
    content: "Спасибо всем за поддержку! Мы достигли 90% цели по донатам! 💖",
    likes: 567,
    comments: 89,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    type: "announcement",
  },
  {
    id: 3,
    user: mockUsers[0],
    content: "Новая коллекция значков уже в магазине! Успейте купить, пока не разобрали!",
    images: ["/enamel-pins-collection.jpg", "/pins-display.jpg"],
    likes: 123,
    comments: 23,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    type: "product",
  },
]
