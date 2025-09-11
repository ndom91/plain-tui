import type { InternalActor } from './actors.js'
import type { Connection, DateTime } from './base.js'
import type { User } from './user.js'

export interface Tier {
  id: string
  name: string
}

export enum ThreadChannelAssociationTypes {
  SLACK = 'SLACK',
  MSTEAMS = 'MSTEAMS',
}

export interface ThreadChannelAssociation {
  id: string
  workspaceId: string
  type: ThreadChannelAssociationTypes
  connectedSlackChannelId: string
  companyId: string
}

export interface Company {
  id: string
  name: string
  logoUrl?: string
  domainName: string
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
  tier?: Tier
  threadChannelAssociations: ThreadChannelAssociation[]
  contractValue?: number
  accountOwner?: User
  isDeleted: boolean
  deletedAt?: DateTime
  deletedBy?: InternalActor
}

export type CompanyConnection = Connection<Company>

