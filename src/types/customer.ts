import type { Actor, InternalActor, UserActor } from './actors.js'
import type { Connection, DateTime, EmailAddress } from './base.js'
import type { Company } from './company.js'
import type { CustomerGroup, CustomerTenantMembership } from './organization.js'

export enum CustomerStatus {
  IDLE = 'IDLE',
  ACTIVE = 'ACTIVE',
  SNOOZED = 'SNOOZED',
}

export enum CustomersSortField {
  FULL_NAME = 'FULL_NAME',
}

export interface EmailCustomerIdentity {
  email: string
}

export interface DiscordCustomerIdentity {
  discordUserId: string
}

export interface SlackCustomerIdentity {
  slackUserId: string
}

export type CustomerIdentity =
  | EmailCustomerIdentity
  | DiscordCustomerIdentity
  | SlackCustomerIdentity

export interface Customer {
  id: string
  externalId?: string
  fullName: string
  shortName?: string
  email: EmailAddress
  avatarUrl?: string
  assignedToUser?: UserActor
  assignedAt?: DateTime
  company?: Company
  isAnonymous: boolean
  createdAt: DateTime
  createdBy: Actor
  updatedAt: DateTime
  updatedBy: Actor
  markedAsSpamAt?: DateTime
  markedAsSpamBy?: InternalActor
  identities: CustomerIdentity[]
  status?: CustomerStatus // Deprecated
  statusChangedAt?: DateTime // Deprecated
  lastIdleAt?: DateTime // Deprecated
}

// Filter types
export interface CustomersFilter {
  isMarkedAsSpam?: boolean
  customerGroupIds?: string[]
  customerGroupKeys?: string[]
  companyIdentifiers?: CompanyIdentifierInput[]
  tenantIdentifiers?: TenantIdentifierInput[]
}

export interface CompanyIdentifierInput {
  companyId?: string
  companyExternalId?: string
}

export interface TenantIdentifierInput {
  tenantId?: string
  tenantExternalId?: string
}

export interface CustomersSort {
  field: CustomersSortField
  direction: 'ASC' | 'DESC'
}

// Connection types
export type CustomerConnection = Connection<Customer>

// Group membership types - forward reference resolved in organization.ts
export interface CustomerGroupMembership {
  customerId: string
  customerGroup: CustomerGroup
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
}

// biome-ignore lint/suspicious/noEmptyInterface: TODO
export interface CustomerGroupMembershipsFilter {
  // Add specific filter fields as needed
}

export type CustomerGroupMembershipConnection = Connection<CustomerGroupMembership>
export type CustomerTenantMembershipConnection = Connection<CustomerTenantMembership>
