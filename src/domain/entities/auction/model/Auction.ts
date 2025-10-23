import { User } from '@/domain/entities/user/model'

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

export interface AuctionBid {
  id: number
  auctionId: number
  userId: number
  amount: number
  timestamp: Date
}
