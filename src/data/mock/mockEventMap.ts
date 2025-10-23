import { EventMap } from '@/domain/entities/event/model'
import { mockUsers } from './mockUsers'

export const mockEventMap: EventMap = {
  areas: [
    {
      id: "toys",
      name: "Игрушки и коллекционные фигурки",
      color: "#3b82f6",
      booths: Array.from({ length: 48 }, (_, i) => {
        const hasCreator = i % 3 === 0
        return {
          id: `T${i + 1}`,
          number: hasCreator ? `${Math.floor(i / 3) + 1}` : "",
          creator: hasCreator ? mockUsers[i % 2] : null,
        }
      }),
    },
    {
      id: "comics",
      name: "Комиксы, издательства, арт и фотография",
      color: "#8b5cf6",
      booths: Array.from({ length: 36 }, (_, i) => {
        const hasCreator = i % 4 === 0
        return {
          id: `C${i + 1}`,
          number: hasCreator ? `${Math.floor(i / 4) + 17}` : "",
          creator: hasCreator ? mockUsers[i % 2] : null,
        }
      }),
    },
    {
      id: "pop",
      name: "Поп-культура",
      color: "#06b6d4",
      booths: Array.from({ length: 24 }, (_, i) => {
        const hasCreator = i % 3 === 0
        return {
          id: `P${i + 1}`,
          number: hasCreator ? `${Math.floor(i / 3) + 26}` : "",
          creator: hasCreator ? mockUsers[i % 2] : null,
        }
      }),
    },
    {
      id: "anime",
      name: "Аниме",
      color: "#ec4899",
      booths: Array.from({ length: 30 }, (_, i) => {
        const hasCreator = i % 5 === 0
        return {
          id: `A${i + 1}`,
          number: hasCreator ? `${Math.floor(i / 5) + 34}` : "",
          creator: hasCreator ? mockUsers[i % 2] : null,
        }
      }),
    },
    {
      id: "cosplay",
      name: "Косплей",
      color: "#f43f5e",
      booths: Array.from({ length: 18 }, (_, i) => {
        const hasCreator = i % 4 === 0
        return {
          id: `CS${i + 1}`,
          number: hasCreator ? `${Math.floor(i / 4) + 40}` : "",
          creator: hasCreator ? mockUsers[i % 2] : null,
        }
      }),
    },
  ],
}
