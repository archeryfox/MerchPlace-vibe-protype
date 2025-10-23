import { User } from '../model'

export interface IUserRepository {
  getAll(): Promise<User[]>
  getById(id: number): Promise<User | null>
  getByUsername(username: string): Promise<User | null>
  getTopRated(limit: number): Promise<User[]>
}
