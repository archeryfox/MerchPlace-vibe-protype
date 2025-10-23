import { IUserRepository } from '@/domain/entities/user/repository/IUserRepository'
import { User } from '@/domain/entities/user/model'

export class GetUsersUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.getAll()
  }
}

export class GetUserByIdUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: number): Promise<User | null> {
    return await this.repository.getById(id)
  }
}

export class GetTopRatedUsersUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(limit: number = 10): Promise<User[]> {
    return await this.repository.getTopRated(limit)
  }
}
