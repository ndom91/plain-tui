import type { Actor, InternalActor, System } from './actors.js'
import type { Connection, DateTime, MessageSource } from './base.js'
import type { Customer } from './customer.js'
import type { Label } from './labels.js'
import type { MachineUser } from './plain.js'
import type { User } from './user.js'

export enum ThreadStatus {
  TODO = 'TODO',
  SNOOZED = 'SNOOZED',
  DONE = 'DONE',
}

export enum ThreadsSortField {
  STATUS_CHANGED_AT = 'STATUS_CHANGED_AT',
  CREATED_AT = 'CREATED_AT',
  CLOSEST_TO_BREACH_SLA = 'CLOSEST_TO_BREACH_SLA',
  LAST_INBOUND_MESSAGE_AT = 'LAST_INBOUND_MESSAGE_AT',
  PRIORITY = 'PRIORITY',
}

export enum ThreadFieldSchemaType {
  STRING = 'STRING',
  BOOL = 'BOOL',
  ENUM = 'ENUM',
}

export enum ThreadsGroupBy {
  NONE = 'NONE',
  PRIORITY = 'PRIORITY',
  STATUS = 'STATUS',
  COMPANY = 'COMPANY',
  LABEL = 'LABEL',
  TIER = 'TIER',
  CHANNEL = 'CHANNEL',
  ASSIGNEE = 'ASSIGNEE',
  CUSTOMER_GROUP = 'CUSTOMER_GROUP',
  TENANT = 'TENANT',
}

export enum ThreadsLayout {
  TABLE = 'TABLE',
  BOARD = 'BOARD',
}

export enum StatusDetailType {}
// Add specific status detail types as needed

export type ThreadAssignee = User | MachineUser | System

export interface ThreadMessageInfo {
  timestamp: DateTime
}

export interface ThreadField {
  id: string
  threadId: string
  key: string
  type: ThreadFieldSchemaType
  isAiGenerated: boolean
  stringValue?: string
  booleanValue?: boolean
  createdAt: DateTime
  createdBy: Actor
  updatedAt: DateTime
  updatedBy: Actor
}

export interface ThreadFieldSchema {
  id: string
  label: string
  key: string
  description: string
  order: number
  type: ThreadFieldSchemaType
  enumValues: string[]
  defaultStringValue?: string
  defaultBooleanValue?: boolean
  isRequired: boolean
  isAiAutoFillEnabled: boolean
  dependsOnThreadField?: DependsOnThreadFieldType
  dependsOnLabels: DependsOnLabelType[]
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
}

export interface DependsOnThreadFieldType {
  threadFieldSchemaId: string
  threadFieldSchemaValue: string
}

export interface DependsOnLabelType {
  labelTypeId: string
}

export interface Thread {
  id: string
  title?: string
  description?: string
  externalId?: string
  customer: Customer
  status: ThreadStatus
  statusDetail?: ThreadStatusDetail
  statusChangedAt: DateTime
  priority: number
  assignedToUser?: {
    user: User
  }
  assignedAt?: DateTime
  labels: Label[]
  previewText?: string
  createdAt: DateTime
  createdBy: Actor
  updatedAt: DateTime
  updatedBy: Actor
  // Add other thread properties as needed
}

export type ThreadStatusDetail =
  | {
      type: 'CREATED'
      createdAt: DateTime
    }
  | {
      type: 'NEW_REPLY'
    }
  | {
      type: 'THREAD_LINK_UPDATED'
      linear?: {
        issueId: string // UUID string
      }
    }
  | {
      type: 'IN_PROGRESS'
    }
  | {
      type: 'WAITING_FOR_CUSTOMER'
    }
  | {
      type: 'WAITING_FOR_DURATION'
      waitingUntil: DateTime
      durationSeconds: number
    }
  | {
      type: 'DONE_MANUALLY_SET'
    }
  | {
      type: 'IGNORED'
    }
  | {
      type: 'DONE_AUTOMATICALLY_SET'
      afterSeconds?: number
    }
  | {
      type: 'THREAD_DISCUSSION_RESOLVED'
      threadDiscussionId?: string
    }

// Thread filter and query types
export interface ThreadsFilter {
  statuses?: ThreadStatus[]
  statusDetails?: StatusDetailType[]
  priorities?: number[]
  assignedToUser?: string[]
  participants?: string[]
  customerGroups?: string[]
  companies?: string[]
  tenants?: string[]
  tiers?: string[]
  labelTypeIds?: string[]
  messageSource?: MessageSource[]
  supportEmailAddresses?: string[]
  slaTypes?: string[]
  slaStatuses?: string[]
  threadFields?: SavedThreadsViewFilterThreadField[]
  threadLinkGroupIds?: string[]
}

export interface SavedThreadsViewFilterThreadField {
  key: string
  stringValue?: string
  booleanValue?: boolean
}

export interface ThreadsSort {
  field: ThreadsSortField
  direction: 'ASC' | 'DESC'
}

export interface ThreadsDisplayOptions {
  hasStatus: boolean
  hasCustomer: boolean
  hasCompany: boolean
  hasPreviewText: boolean
  hasTier: boolean
  hasCustomerGroups: boolean
  hasLabels: boolean
  hasLinkedThreads: boolean
  hasServiceLevelAgreements: boolean
  hasChannels: boolean
  hasLastUpdated: boolean
  hasAssignees: boolean
  hasIssueTrackerIssues: boolean
}

// Connection types
export type ThreadConnection = Connection<Thread>
export type ThreadFieldSchemaConnection = Connection<ThreadFieldSchema>
