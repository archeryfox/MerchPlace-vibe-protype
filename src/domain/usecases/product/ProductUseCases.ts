import { IProductRepository } from '@/domain/entities/product/repository/IProductRepository'
import { Product } from '@/domain/entities/product/model'

export class GetProductsUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.repository.getAll()
  }
}

export class GetProductByIdUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(id: number): Promise<Product | null> {
    return await this.repository.getById(id)
  }
}

export class SearchProductsUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(query: string): Promise<Product[]> {
    return await this.repository.search(query)
  }
}
