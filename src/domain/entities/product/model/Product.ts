import { User } from '@/domain/entities/user/model'

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
