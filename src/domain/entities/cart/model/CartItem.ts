export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
  seller: {
    id: number
    name: string
  }
}
