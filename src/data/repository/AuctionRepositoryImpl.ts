import { IAuctionRepository } from '@/domain/entities/auction/repository/IAuctionRepository'
import { Auction } from '@/domain/entities/auction/model'
import { mockAuctions } from '@/data/mock'

export class AuctionRepositoryImpl implements IAuctionRepository {
  async getAll(): Promise<Auction[]> {
    return Promise.resolve(mockAuctions)
  }

  async getById(id: number): Promise<Auction | null> {
    const auction = mockAuctions.find(a => a.id === id)
    return Promise.resolve(auction || null)
  }

  async getByCategory(category: string): Promise<Auction[]> {
    return Promise.resolve(mockAuctions.filter(a => a.category === category))
  }

  async getBySeller(sellerId: number): Promise<Auction[]> {
    return Promise.resolve(mockAuctions.filter(a => a.seller.id === sellerId))
  }

  async getFeatured(): Promise<Auction[]> {
    // Возвращаем первые 2 аукциона как рекомендуемые
    return Promise.resolve(mockAuctions.slice(0, 2))
  }
}
