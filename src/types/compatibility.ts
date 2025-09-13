export interface SimpleCustomer {
  id: string
  fullName: string
  shortName?: string
  email: {
    email: string
    isVerified: boolean
  }
  avatarUrl?: string
  company?: {
    id: string
    name: string
  }
  status: string
  createdAt: string
  updatedAt: string
}

export interface SimpleTenant {
  id: string
  name: string
  identifier: string
  createdAt: string
  updatedAt: string
}

export interface SimpleThread {
  id: string
  title?: string
  status: string
  priority: number
  statusChangedAt: {
    iso8601: string
  }
  updatedAt: {
    iso8601: string
  }
  createdAt: {
    iso8601: string
  }
  customer: {
    id: string
    fullName: string
    email: { email: string }
    company?: { name: string }
  }
  assignedToUser?: {
    user: {
      id: string
      fullName: string
      publicName: string
    }
  }
  labels: Array<{
    id: string
    labelType: {
      name: string
      color: string
      icon?: string
    }
  }>
  previewText?: string
}
