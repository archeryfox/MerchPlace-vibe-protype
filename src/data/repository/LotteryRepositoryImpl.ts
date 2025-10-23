import { ILotteryRepository } from '@/domain/entities/lottery/repository/ILotteryRepository'
import { Lottery } from '@/domain/entities/lottery/model'
import { mockLotteries } from '@/data/mock'

export class LotteryRepositoryImpl implements ILotteryRepository {
  async getAll(): Promise<Lottery[]> {
    return Promise.resolve(mockLotteries)
  }

  async getById(id: number): Promise<Lottery | null> {
    const lottery = mockLotteries.find(l => l.id === id)
    return Promise.resolve(lottery || null)
  }

  async getActive(): Promise<Lottery[]> {
    const now = new Date()
    return Promise.resolve(mockLotteries.filter(l => l.endTime > now))
  }

  async getHistory(): Promise<Lottery[]> {
    const now = new Date()
    return Promise.resolve(mockLotteries.filter(l => l.endTime <= now))
  }
}
