import { CartItem } from '../model'

export interface ICartRepository {
  getItems(): Promise<CartItem[]>
  addItem(item: CartItem): Promise<void>
  removeItem(itemId: number): Promise<void>
  updateQuantity(itemId: number, quantity: number): Promise<void>
  clearCart(): Promise<void>
  getTotalPrice(): Promise<number>
  getTotalItems(): Promise<number>
}
