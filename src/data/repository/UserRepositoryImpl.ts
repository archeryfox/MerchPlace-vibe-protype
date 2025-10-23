import { IUserRepository } from '@/domain/entities/user/repository/IUserRepository'
import { User } from '@/domain/entities/user/model'
import { mockUsers } from '@/data/mock'

export class UserRepositoryImpl implements IUserRepository {
  async getAll(): Promise<User[]> {
    return Promise.resolve(mockUsers)
  }

  async getById(id: number): Promise<User | null> {
    const user = mockUsers.find(u => u.id === id)
    return Promise.resolve(user || null)
  }

  async getByUsername(username: string): Promise<User | null> {
    const user = mockUsers.find(u => u.username === username)
    return Promise.resolve(user || null)
  }

  async getTopRated(limit: number): Promise<User[]> {
    const sortedUsers = [...mockUsers].sort((a, b) => b.rating - a.rating)
    return Promise.resolve(sortedUsers.slice(0, limit))
  }
}
