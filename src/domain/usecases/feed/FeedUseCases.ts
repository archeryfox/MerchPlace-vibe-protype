import { IFeedRepository } from '@/domain/entities/feed/repository/IFeedRepository'
import { FeedPost } from '@/domain/entities/feed/model'

export class GetFeedPostsUseCase {
  constructor(private repository: IFeedRepository) {}

  async execute(): Promise<FeedPost[]> {
    return await this.repository.getAll()
  }
}
