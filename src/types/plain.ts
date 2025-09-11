import type { Actor, InternalActor } from './actors.js'
import type { Connection, DateTime } from './base.js'

export enum RoleKey {}
// Add specific role keys as needed

export enum BillingSeatType {}
// Add specific billing seat types as needed

export enum MachineUserType {
  API_USER = 'API_USER',
}

export interface Role {
  id: string
  name: string
  description?: string
  permissions: string[]
  isAssignableToThread: boolean
  assignableBillingSeats?: BillingSeatType[] // Deprecated
  requiresBillableSeat?: boolean // Deprecated
  key?: RoleKey
}

export interface ApiKey {
  id: string
  description?: string
  permissions: string[]
  createdBy: InternalActor
  createdAt: DateTime
  updatedBy: InternalActor
  updatedAt: DateTime
  isDeleted: boolean
  deletedAt?: DateTime
  deletedBy?: Actor
}

export interface MachineUser {
  id: string
  fullName: string
  publicName: string
  description?: string
  type: MachineUserType
  avatar?: WorkspaceFile
  createdBy: InternalActor
  createdAt: DateTime
  updatedBy: InternalActor
  updatedAt: DateTime
  isDeleted: boolean
  deletedAt?: DateTime
  deletedBy?: Actor
}

export interface WorkspaceFile {
  // Add specific properties as needed
  id: string
  fileName: string
  // Add other file properties
}

// biome-ignore lint/suspicious/noEmptyInterface: TODO
export interface WorkspaceEmailSettings {
  // Add specific email settings properties
}

// biome-ignore lint/suspicious/noEmptyInterface: TODO
export interface WorkspaceChatSettings {
  // Add specific chat settings properties
}

export interface Workspace {
  id: string
  name: string
  publicName: string
  isDemoWorkspace: boolean
  domainName?: string // Deprecated
  domainNames: string[]
  createdBy: InternalActor
  createdAt: DateTime
  updatedBy: InternalActor
  updatedAt: DateTime
  workspaceEmailSettings: WorkspaceEmailSettings
  workspaceChatSettings: WorkspaceChatSettings
  logo?: WorkspaceFile
}

export interface WorkspaceInvite {
  id: string
  createdBy: InternalActor
  createdAt: DateTime
  email: string
  workspace: Workspace
  isAccepted: boolean
  roles: Role[]
  updatedBy: InternalActor
  updatedAt: DateTime
  usingBillingRotaSeat: boolean
  role?: Role
}

export interface Permissions {
  permissions: string[]
}

// Connection types
export type WorkspaceConnection = Connection<Workspace>
export type WorkspaceInviteConnection = Connection<WorkspaceInvite>
export type RoleConnection = Connection<Role>
export type ApiKeyConnection = Connection<ApiKey>
