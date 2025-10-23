import { Lottery } from '@/domain/entities/lottery/model'

export const mockLotteries: Lottery[] = [
  {
    id: 1,
    title: "Мега-розыгрыш: Коллекция редких фигурок",
    description: "Выиграй набор из 5 редких коллекционных фигурок общей стоимостью 15000₽!",
    image: "/collectible-figures-set.jpg",
    ticketPrice: 100,
    totalTickets: 1000,
    soldTickets: 743,
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
    prizes: [
      { place: 1, description: "Набор из 5 фигурок", value: 15000 },
      { place: 2, description: "Артбук + стикерпак", value: 2000 },
      { place: 3, description: "Футболка + значки", value: 1000 },
    ],
  },
  {
    id: 2,
    title: "Розыгрыш эксклюзивного арта",
    description: "Получи оригинальный арт от известного художника!",
    image: "/exclusive-artwork.jpg",
    ticketPrice: 200,
    totalTickets: 500,
    soldTickets: 312,
    endTime: new Date(Date.now() + 72 * 60 * 60 * 1000),
    prizes: [
      { place: 1, description: "Оригинальный арт 50x70", value: 10000 },
      { place: 2, description: "Принт с автографом", value: 3000 },
    ],
  },
]
