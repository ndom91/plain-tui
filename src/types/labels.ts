import type { Actor, InternalActor } from './actors.js'
import type { Connection, DateTime } from './base.js'

export enum LabelTypeType {
  DEFAULT = 'DEFAULT',
  TEAM = 'TEAM',
}

export interface LabelType {
  id: string
  name: string
  icon?: string
  color?: string
  type: LabelTypeType
  description?: string
  parentLabelType?: LabelType
  position: string
  isArchived: boolean
  archivedBy?: InternalActor
  archivedAt?: DateTime
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
}

export interface Label {
  id: string
  labelType: LabelType
  createdAt: DateTime
  createdBy: Actor
  updatedAt: DateTime
  updatedBy: Actor
}

// Filter types
export interface LabelTypeFilter {
  isArchived?: boolean
}

// Connection types
export type LabelTypeConnection = Connection<LabelType>
