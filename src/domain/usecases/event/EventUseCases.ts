import { IEventRepository } from '@/domain/entities/event/repository/IEventRepository'
import { EventMap } from '@/domain/entities/event/model'

export class GetEventMapUseCase {
  constructor(private repository: IEventRepository) {}

  async execute(): Promise<EventMap> {
    return await this.repository.getEventMap()
  }
}
