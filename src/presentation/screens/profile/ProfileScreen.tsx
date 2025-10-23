import { ProfileHeader } from '@/presentation/widgets/profile-header/ui/ProfileHeader'
import { ProfileStats } from '@/presentation/widgets/profile-stats/ui/ProfileStats'
import { ProfileTabs } from '@/presentation/widgets/profile-tabs/ui/ProfileTabs'
import { mockUsers } from '@/data/mock/mockUsers'

export function ProfileScreen() {
  const currentUser = mockUsers[0] // Используем первого пользователя как текущего

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <ProfileHeader user={currentUser} />
        <ProfileStats user={currentUser} />
        <ProfileTabs user={currentUser} />
      </div>
    </div>
  )
}
