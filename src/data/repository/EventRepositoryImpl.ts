import { IEventRepository } from '@/domain/entities/event/repository/IEventRepository'
import { EventMap } from '@/domain/entities/event/model'
import { mockEventMap } from '@/data/mock'

export class EventRepositoryImpl implements IEventRepository {
  async getEventMap(): Promise<EventMap> {
    return Promise.resolve(mockEventMap)
  }

  async getBoothById(boothId: string): Promise<any | null> {
    for (const area of mockEventMap.areas) {
      const booth = area.booths.find(b => b.id === boothId)
      if (booth) {
        return Promise.resolve(booth)
      }
    }
    return Promise.resolve(null)
  }
}
