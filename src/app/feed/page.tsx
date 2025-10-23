import { FeedPost } from "@/components/feed-post"
import { mockFeedPosts } from "@/lib/mock-data"

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-2xl px-4 py-6">
        <h1 className="mb-6 text-2xl font-bold text-foreground">Лента новостей</h1>

        <div className="space-y-4">
          {mockFeedPosts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
