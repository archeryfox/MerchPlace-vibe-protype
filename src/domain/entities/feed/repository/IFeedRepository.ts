import { FeedPost } from '../model'

export interface IFeedRepository {
  getAll(): Promise<FeedPost[]>
  getByUser(userId: number): Promise<FeedPost[]>
  getByType(type: string): Promise<FeedPost[]>
}
