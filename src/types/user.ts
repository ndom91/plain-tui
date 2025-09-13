import type { Actor, InternalActor } from './actors.js'
import type { Connection, DateTime } from './base.js'
import type { Label } from './labels.js'
import type { MachineUser, Role } from './plain.js'

export enum UserStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  BREAK = 'BREAK',
}

export interface SlackUserIdentity {
  slackTeamId: string
  slackUserId: string
}

export interface User {
  id: string
  fullName: string
  publicName: string
  avatarUrl?: string
  email: string
  roles: Role[]
  role?: Role
  additionalLegacyRoles: Role[]
  slackIdentities: SlackUserIdentity[]
  labels: Label[]
  status: UserStatus
  statusChangedAt: DateTime
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
  isDeleted: boolean
  deletedAt?: DateTime
  deletedBy?: Actor
}

export interface UserAccount {
  id: string
  fullName: string
  publicName: string
  email: string
}

// Filter and sort types
export interface UsersFilter {
  isAssignableToThread?: boolean
}

// Connection types
export type UserConnection = Connection<User>
export type MachineUserConnection = Connection<MachineUser>
