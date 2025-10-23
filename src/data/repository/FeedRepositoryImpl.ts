import { IFeedRepository } from '@/domain/entities/feed/repository/IFeedRepository'
import { FeedPost } from '@/domain/entities/feed/model'
import { mockFeedPosts } from '@/data/mock'

export class FeedRepositoryImpl implements IFeedRepository {
  async getAll(): Promise<FeedPost[]> {
    return Promise.resolve(mockFeedPosts)
  }

  async getByUser(userId: number): Promise<FeedPost[]> {
    return Promise.resolve(mockFeedPosts.filter(p => p.user.id === userId))
  }

  async getByType(type: string): Promise<FeedPost[]> {
    return Promise.resolve(mockFeedPosts.filter(p => p.type === type))
  }
}
