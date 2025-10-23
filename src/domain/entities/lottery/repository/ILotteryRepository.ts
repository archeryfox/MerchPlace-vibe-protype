import { Lottery } from '../model'

export interface ILotteryRepository {
  getAll(): Promise<Lottery[]>
  getById(id: number): Promise<Lottery | null>
  getActive(): Promise<Lottery[]>
  getHistory(): Promise<Lottery[]>
}
