import { FeedPost } from '@/presentation/widgets/feed-post/ui/FeedPost'
import { mockFeedPosts } from '@/data/mock/mockFeedPosts'

export function FeedScreen() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Лента</h1>
          <p className="text-muted-foreground">Последние обновления и новости</p>
        </div>
        
        <div className="space-y-6">
          {mockFeedPosts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
