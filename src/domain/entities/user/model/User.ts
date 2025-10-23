export interface User {
  id: number
  name: string
  username: string
  avatar: string
  bio: string
  followers: number
  following: number
  itemsSold: number
  rating: number
  verified: boolean
  isCreator: boolean
  categories: string[]
  location: string
  donationEnabled: boolean
  donationGoal: number
  donationCurrent: number
}
