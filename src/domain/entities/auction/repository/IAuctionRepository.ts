import { Auction } from '../model'

export interface IAuctionRepository {
  getAll(): Promise<Auction[]>
  getById(id: number): Promise<Auction | null>
  getByCategory(category: string): Promise<Auction[]>
  getBySeller(sellerId: number): Promise<Auction[]>
  getFeatured(): Promise<Auction[]>
}
