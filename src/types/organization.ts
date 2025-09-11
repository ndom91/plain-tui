import type { InternalActor } from './actors.js'
import type { Connection, DateTime } from './base.js'
import type { Tier } from './company.js'

export enum TenantFieldType {
  STRING_TYPE = 'STRING_TYPE',
  NUMBER_TYPE = 'NUMBER_TYPE',
  BOOLEAN_TYPE = 'BOOLEAN_TYPE',
  STRING_ARRAY = 'STRING_ARRAY',
  DATETIME_TYPE = 'DATETIME_TYPE',
}

export interface TenantField {
  id: string
  key: string
  type: TenantFieldType
  stringValue?: string
  numberValue?: number
  booleanValue?: boolean
  stringArrayValue?: string[]
  datetimeValue?: DateTime
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
}

export interface Tenant {
  id: string
  name: string
  identifier: string
  externalId?: string
  url?: string
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
  tier?: Tier
  tenantFields: TenantField[]
}

export interface CustomerGroup {
  id: string
  name: string
  key: string
  color: string
  externalId?: string
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
}

export interface CustomerTenantMembership {
  tenant: Tenant
  createdAt: DateTime
  createdBy: InternalActor
  updatedAt: DateTime
  updatedBy: InternalActor
}

// Connection types
export type TenantConnection = Connection<Tenant>
export type CustomerGroupConnection = Connection<CustomerGroup>

