import { User } from '@/domain/entities/user/model'

export interface FeedPost {
  id: number
  user: User
  content: string
  images?: string[]
  likes: number
  comments: number
  timestamp: Date
  type: string
}
