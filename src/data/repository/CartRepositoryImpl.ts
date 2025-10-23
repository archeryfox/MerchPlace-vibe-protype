import { ICartRepository } from '@/domain/entities/cart/repository/ICartRepository'
import { CartItem } from '@/domain/entities/cart/model'

// Простая реализация корзины в памяти (в будущем можно заменить на localStorage)
class CartStore {
  private items: CartItem[] = []

  getItems(): CartItem[] {
    return [...this.items]
  }

  addItem(item: CartItem): void {
    const existingItem = this.items.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      this.items.push({ ...item })
    }
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter(i => i.id !== itemId)
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.items.find(i => i.id === itemId)
    if (item) {
      if (quantity <= 0) {
        this.removeItem(itemId)
      } else {
        item.quantity = quantity
      }
    }
  }

  clearCart(): void {
    this.items = []
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0)
  }
}

const cartStore = new CartStore()

export class CartRepositoryImpl implements ICartRepository {
  async getItems(): Promise<CartItem[]> {
    return Promise.resolve(cartStore.getItems())
  }

  async addItem(item: CartItem): Promise<void> {
    cartStore.addItem(item)
    return Promise.resolve()
  }

  async removeItem(itemId: number): Promise<void> {
    cartStore.removeItem(itemId)
    return Promise.resolve()
  }

  async updateQuantity(itemId: number, quantity: number): Promise<void> {
    cartStore.updateQuantity(itemId, quantity)
    return Promise.resolve()
  }

  async clearCart(): Promise<void> {
    cartStore.clearCart()
    return Promise.resolve()
  }

  async getTotalPrice(): Promise<number> {
    return Promise.resolve(cartStore.getTotalPrice())
  }

  async getTotalItems(): Promise<number> {
    return Promise.resolve(cartStore.getTotalItems())
  }
}
