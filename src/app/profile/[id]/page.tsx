import { ProfileHeader } from "@/presentation/widgets/profile-header/ui/ProfileHeader"
import { ProfileStats } from "@/presentation/widgets/profile-stats/ui/ProfileStats"
import { ProfileTabs } from "@/presentation/widgets/profile-tabs/ui/ProfileTabs"
import { mockUsers } from "@/data/mock/mockUsers"
import { use } from "react"

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const user = mockUsers.find((u) => u.id === Number.parseInt(resolvedParams.id)) || mockUsers[0]

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
