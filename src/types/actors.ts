import type { Customer } from './customer.js'
import type { MachineUser } from './plain.js'
import type { User } from './user.js'

export interface UserActor {
  userId: string
  user: User
}

export interface CustomerActor {
  customerId: string
  customer: Customer
}

export interface DeletedCustomerActor {
  customerId: string
}

export interface SystemActor {
  systemId: string
}

export interface MachineUserActor {
  machineUserId: string
  machineUser: MachineUser
}

export interface System {
  id: string
}

// Union types
export type Actor =
  | UserActor
  | CustomerActor
  | DeletedCustomerActor
  | SystemActor
  | MachineUserActor

export type InternalActor = UserActor | SystemActor | MachineUserActor

