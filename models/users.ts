// These two interfaces are for Auth0 login purposes
export interface ProfileDraft {
  username: string | undefined
  full_name: string | undefined
  email: string | undefined
  points: number | undefined
  location: string | undefined
}
export interface Profile extends ProfileDraft {
  id: string
}

// These interfaces are for getting a user's details back
export interface User {
  username: string
  full_name: string
  email: string
  points: number
  location: string
}

export interface UserWithId extends User {
  id: string
}

export interface EditUser {
  username?: string
  full_name?: string
  email?: string
  location?: string
}