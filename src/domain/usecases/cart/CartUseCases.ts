import { ICartRepository } from '@/domain/entities/cart/repository/ICartRepository'
import { CartItem } from '@/domain/entities/cart/model'

export class GetCartItemsUseCase {
  constructor(private repository: ICartRepository) {}

  async execute(): Promise<CartItem[]> {
    return await this.repository.getItems()
  }
}

export class AddToCartUseCase {
  constructor(private repository: ICartRepository) {}

  async execute(item: CartItem): Promise<void> {
    return await this.repository.addItem(item)
  }
}

export class RemoveFromCartUseCase {
  constructor(private repository: ICartRepository) {}

  async execute(itemId: number): Promise<void> {
    return await this.repository.removeItem(itemId)
  }
}

export class UpdateQuantityUseCase {
  constructor(private repository: ICartRepository) {}

  async execute(itemId: number, quantity: number): Promise<void> {
    return await this.repository.updateQuantity(itemId, quantity)
  }
}

export class ClearCartUseCase {
  constructor(private repository: ICartRepository) {}

  async execute(): Promise<void> {
    return await this.repository.clearCart()
  }
}

export class GetCartTotalUseCase {
  constructor(private repository: ICartRepository) {}

  async execute(): Promise<number> {
    return await this.repository.getTotalPrice()
  }
}
