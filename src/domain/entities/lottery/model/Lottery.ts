export interface Lottery {
  id: number
  title: string
  description: string
  image: string
  ticketPrice: number
  totalTickets: number
  soldTickets: number
  endTime: Date
  prizes: LotteryPrize[]
}

export interface LotteryPrize {
  place: number
  description: string
  value: number
}

export interface LotteryTicket {
  id: number
  lotteryId: number
  userId: number
  ticketNumber: number
  purchaseDate: Date
}
