import { Product } from '../model'

export interface IProductRepository {
  getAll(): Promise<Product[]>
  getById(id: number): Promise<Product | null>
  getByCategory(category: string): Promise<Product[]>
  getBySeller(sellerId: number): Promise<Product[]>
  search(query: string): Promise<Product[]>
}
