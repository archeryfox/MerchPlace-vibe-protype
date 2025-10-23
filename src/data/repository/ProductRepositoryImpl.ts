import { IProductRepository } from '@/domain/entities/product/repository/IProductRepository'
import { Product } from '@/domain/entities/product/model'
import { mockProducts } from '@/data/mock'

export class ProductRepositoryImpl implements IProductRepository {
  async getAll(): Promise<Product[]> {
    return Promise.resolve(mockProducts)
  }

  async getById(id: number): Promise<Product | null> {
    const product = mockProducts.find(p => p.id === id)
    return Promise.resolve(product || null)
  }

  async getByCategory(category: string): Promise<Product[]> {
    return Promise.resolve(mockProducts.filter(p => p.category === category))
  }

  async getBySeller(sellerId: number): Promise<Product[]> {
    return Promise.resolve(mockProducts.filter(p => p.seller.id === sellerId))
  }

  async search(query: string): Promise<Product[]> {
    const lowercaseQuery = query.toLowerCase()
    return Promise.resolve(
      mockProducts.filter(p => 
        p.title.toLowerCase().includes(lowercaseQuery) ||
        p.description.toLowerCase().includes(lowercaseQuery)
      )
    )
  }
}
