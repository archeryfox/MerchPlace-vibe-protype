import { ProfileHeader } from "@/components/profile-header"
import { ProfileStats } from "@/components/profile-stats"
import { ProfileTabs } from "@/components/profile-tabs"
import { mockUsers } from "@/lib/mock-data"

export default function ProfilePage({ params }: { params: { id: string } }) {
  const user = mockUsers.find((u) => u.id === Number.parseInt(params.id)) || mockUsers[0]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <ProfileHeader user={user} />
        <ProfileStats user={user} />
        <ProfileTabs user={user} />
      </main>
    </div>
  )
}
