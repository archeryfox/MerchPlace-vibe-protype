import { EventMap } from '../model'

export interface IEventRepository {
  getEventMap(): Promise<EventMap>
  getBoothById(boothId: string): Promise<any | null>
}
