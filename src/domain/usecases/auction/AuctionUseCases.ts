import { IAuctionRepository } from '@/domain/entities/auction/repository/IAuctionRepository'
import { Auction } from '@/domain/entities/auction/model'

export class GetAuctionsUseCase {
  constructor(private repository: IAuctionRepository) {}

  async execute(): Promise<Auction[]> {
    return await this.repository.getAll()
  }
}

export class GetAuctionByIdUseCase {
  constructor(private repository: IAuctionRepository) {}

  async execute(id: number): Promise<Auction | null> {
    return await this.repository.getById(id)
  }
}

export class GetAuctionsByCategoryUseCase {
  constructor(private repository: IAuctionRepository) {}

  async execute(category: string): Promise<Auction[]> {
    return await this.repository.getByCategory(category)
  }
}

export class GetFeaturedAuctionsUseCase {
  constructor(private repository: IAuctionRepository) {}

  async execute(): Promise<Auction[]> {
    return await this.repository.getFeatured()
  }
}
