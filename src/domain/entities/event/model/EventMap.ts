import { User } from '@/domain/entities/user/model'

export interface EventMap {
  areas: EventArea[]
}

export interface EventArea {
  id: string
  name: string
  color: string
  booths: Booth[]
}

export interface Booth {
  id: string
  number: string
  creator: User | null
}
