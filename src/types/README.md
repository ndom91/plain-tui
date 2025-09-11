# Types Directory

This directory contains comprehensive TypeScript type definitions for the Plain TUI application, derived from the GraphQL schema.

## Structure

### Core Type Modules

- **`base.ts`** - Base utility types, enums, and common interfaces like `DateTime`, `PageInfo`, connection patterns
- **`actors.ts`** - Actor system types (`UserActor`, `CustomerActor`, etc.) and unions
- **`user.ts`** - User-related types including `User`, `UserAccount`, `UserStatus`
- **`customer.ts`** - Customer management types like `Customer`, `CustomerIdentity`, filters
- **`company.ts`** - Company and tier-related types
- **`organization.ts`** - Tenant, customer groups, and organizational structure types
- **`labels.ts`** - Label and label type definitions
- **`threads.ts`** - Thread management, status, fields, and related types
- **`timeline.ts`** - Timeline entries, communication types (email, chat, etc.)
- **`plain.ts`** - Workspace, authentication, roles, and core Plain platform types

### Special Modules

- **`compatibility.ts`** - Simplified type definitions for easier migration from existing component interfaces
- **`index.ts`** - Main export file that re-exports all type modules

## Usage

### Import from Main Index
```typescript
import type { User, Customer, Thread, Workspace } from '../types/index.js'
```

### Import Specific Module
```typescript
import type { ThreadStatus, ThreadsFilter } from '../types/threads.js'
import type { UserStatus } from '../types/user.js'
```

### Compatibility Types
For existing components that use simpler interfaces:
```typescript
import type { SimpleCustomer, SimpleTenant, SimpleThread } from '../types/compatibility.js'
```

## Type Organization Principles

1. **Modular**: Types are grouped by domain (users, customers, threads, etc.)
2. **Comprehensive**: Full type definitions matching the GraphQL schema
3. **Compatible**: Compatibility layer for easier migration
4. **Connected**: Proper relationships and references between types
5. **Standard**: Follows GraphQL Relay connection patterns

## Migration Strategy

1. **Existing Components**: Use compatibility types initially (`SimpleCustomer`, etc.)
2. **New Components**: Use full comprehensive types from main modules
3. **Gradual Migration**: Replace compatibility types with comprehensive ones as needed

## Key Patterns

### Connection Types
Following GraphQL Relay patterns:
```typescript
export type CustomerConnection = Connection<Customer>
export interface Edge<T> {
  cursor: string
  node: T
}
```

### Actor System
Flexible actor types for tracking who performs actions:
```typescript
export type Actor = UserActor | CustomerActor | DeletedCustomerActor | SystemActor | MachineUserActor
```

### Enums
Comprehensive enums matching GraphQL schema:
```typescript
export enum ThreadStatus {
  TODO = 'TODO',
  SNOOZED = 'SNOOZED', 
  DONE = 'DONE'
}
```