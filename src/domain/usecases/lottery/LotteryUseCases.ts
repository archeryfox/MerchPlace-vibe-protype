import { ILotteryRepository } from '@/domain/entities/lottery/repository/ILotteryRepository'
import { Lottery } from '@/domain/entities/lottery/model'

export class GetLotteriesUseCase {
  constructor(private repository: ILotteryRepository) {}

  async execute(): Promise<Lottery[]> {
    return await this.repository.getAll()
  }
}

export class GetLotteryByIdUseCase {
  constructor(private repository: ILotteryRepository) {}

  async execute(id: number): Promise<Lottery | null> {
    return await this.repository.getById(id)
  }
}

export class GetActiveLotteriesUseCase {
  constructor(private repository: ILotteryRepository) {}

  async execute(): Promise<Lottery[]> {
    return await this.repository.getActive()
  }
}
