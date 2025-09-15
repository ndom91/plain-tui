import { readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { GraphQLClient } from 'graphql-request'
import {
  GetCustomersQuery,
  GetTenantsQuery,
  GetThreadDetailsQuery,
  GetThreadsQuery,
  GetTimelineEventsQuery,
  GetWorkspaceQuery,
} from './queries/index.js'
// Import generated query types (avoid conflicts with existing response types)
import type {
  GetWorkspaceQuery,
  GetThreadsQuery,
  GetCustomersQuery,
  GetTenantsQuery,
  GetThreadDetailsQuery,
  GetTimelineEventsQuery,
} from './types/generated/graphql.js'

// Define response types based on generated types
type WorkspaceResponse = GetWorkspaceQuery
type ThreadsResponse = GetThreadsQuery
type CustomersResponse = GetCustomersQuery
type TenantsResponse = GetTenantsQuery
type ThreadDetailsResponse = GetThreadDetailsQuery
type TimelineEventsResponse = GetTimelineEventsQuery
import type { Connection } from './types/base.js'
import type {
  SimpleCustomer as Customer,
  SimpleTenant as Tenant,
  SimpleThread as Thread,
} from './types/compatibility.js'
import type { Workspace } from './types/plain.js'
import {
  type ThreadStatus,
  type ThreadsFilter,
  type ThreadsSort,
  ThreadsSortField,
} from './types/threads.js'
import type { TimelineEntry, TimelineEntryConnection } from './types/timeline.js'

interface PlainConfig {
  apiKey: string
  endpoint?: string
}

type GetThreadsQueryInput = Partial<PaginationFilters> & { sortBy?: Partial<ThreadsSort> } & {
  filters?: Partial<ThreadsFilter>
}

export interface GetThreadsArgs {
  statuses?: ThreadStatus[]
  assignedToUsers?: string[]
  priorities?: number[]
  first?: number
  after?: string
}

export interface PaginationFilters {
  first?: number
  after?: string
  last?: number
  before?: string
}

interface WorkspaceResponse {
  myWorkspace: Workspace
}

interface ThreadsResponse {
  threads: Connection<Thread>
}

interface CustomersResponse {
  customers: Connection<Customer>
}

interface TenantsResponse {
  tenants: Connection<Tenant>
}

interface ThreadDetailsResponse {
  thread: Thread & {
    timelineEntries: Connection<TimelineEntry[]>
  }
}

interface TimelineEventsResponse {
  thread: {
    id: string
    timelineEntries: TimelineEntryConnection
  }
}

export class PlainClient {
  private client: GraphQLClient
  private config: PlainConfig

  // biome-ignore lint/suspicious/noExplicitAny: API Response
  private transformTimestamps<T extends Record<string, any>>(obj: T): T {
    if (!obj || typeof obj !== 'object') {
      return obj
    }

    const transformed = { ...obj }

    const dateTimeFields = [
      'createdAt',
      'updatedAt',
      'timestamp',
      'customerReadAt',
      'sentAt',
      'receivedAt',
      'bouncedAt',
      'lastEditedOnSlackAt',
      'deletedOnSlackAt',
      'lastEditedOnMsTeamsAt',
      'deletedOnMsTeamsAt',
      'lastEditedOnDiscordAt',
      'deletedOnDiscordAt',
      'resolvedAt',
      'statusChangedAt',
      'assignedAt',
      'markedAsSpamAt',
      'deletedAt',
      'archivedAt',
      'verifiedAt',
    ]

    for (const field of dateTimeFields) {
      if (obj[field] && typeof obj[field] === 'object' && obj[field].iso8601) {
        transformed[field] = obj[field].iso8601
      }
    }

    for (const key in transformed) {
      const value = transformed[key]

      if (Array.isArray(value)) {
        transformed[key] = value.map((item) => this.transformTimestamps(item))
      } else if (value && typeof value === 'object' && !value.iso8601) {
        transformed[key] = this.transformTimestamps(value)
      }
    }

    return transformed
  }

  // biome-ignore lint/suspicious/noExplicitAny: API Response
  private transformConnection<T extends Record<string, any>>(
    connection: Connection<T>
  ): Connection<T> {
    if (!connection || typeof connection !== 'object') {
      return connection
    }

    return {
      ...connection,
      edges: connection.edges.map((edge) => ({
        ...edge,
        node: this.transformTimestamps(edge.node),
      })),
      ...Object.keys(connection).reduce((acc, key) => {
        if (key !== 'edges') {
          const value = connection[key]
          if (value && typeof value === 'object') {
            acc[key] = this.transformTimestamps(value)
          } else {
            acc[key] = value
          }
        }
        return acc
      }, {} as any),
    }
  }

  constructor() {
    this.config = this.loadConfig()

    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json',
    }

    this.client = new GraphQLClient(
      this.config.endpoint || 'https://core-api.uk.plain.com/graphql/v1',
      {
        headers,
      }
    )
  }

  private loadConfig(): PlainConfig {
    const configPath = join(homedir(), '.config', 'plain-tui.json')
    try {
      const configFile = readFileSync(configPath, 'utf8')
      const config = JSON.parse(configFile)

      if (!config.apiKey) {
        throw new Error('API key is required')
      }
      return config
    } catch {
      throw new Error(
        `Failed to load config from ${configPath}. Please create the file with your Plain API key.`
      )
    }
  }

  async request<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    return this.client.request<T>(query, variables)
  }

  async getWorkspace(): Promise<WorkspaceResponse> {
    return this.request<WorkspaceResponse>(GetWorkspaceQuery)
  }

  async getThreads(filters?: GetThreadsArgs): Promise<ThreadsResponse> {
    const threadsFilter: ThreadsFilter = {}

    if (filters?.statuses && filters.statuses.length > 0) {
      threadsFilter.statuses = filters.statuses
    }

    if (filters?.assignedToUsers && filters.assignedToUsers.length > 0) {
      threadsFilter.assignedToUser = filters.assignedToUsers
    }

    if (filters?.priorities && filters.priorities.length > 0) {
      threadsFilter.priorities = filters.priorities
    }

    const variables: GetThreadsQueryInput = {
      first: filters?.first || 20,
    }

    variables.sortBy = {
      field: ThreadsSortField.STATUS_CHANGED_AT,
      direction: 'DESC',
    }

    if (Object.keys(threadsFilter).length > 0) {
      variables.filters = threadsFilter
    }

    if (filters?.after) {
      variables.after = filters.after
    }

    const response = await this.request<ThreadsResponse>(GetThreadsQuery, variables)

    return {
      ...response,
      threads: this.transformConnection(response.threads),
    }
  }

  // Get customers
  async getCustomers(filters?: PaginationFilters): Promise<CustomersResponse> {
    const response = await this.request<CustomersResponse>(GetCustomersQuery, {
      first: filters?.first || 20,
      after: filters?.after,
    })

    return {
      ...response,
      customers: this.transformConnection(response.customers),
    }
  }

  // Get tenants
  async getTenants(filters?: PaginationFilters): Promise<TenantsResponse> {
    const response = await this.request<TenantsResponse>(GetTenantsQuery, {
      first: filters?.first || 20,
      after: filters?.after,
    })

    return {
      ...response,
      tenants: this.transformConnection(response.tenants),
    }
  }

  // Get thread details
  async getThreadDetails(threadId: string): Promise<ThreadDetailsResponse> {
    const response = await this.request<ThreadDetailsResponse>(GetThreadDetailsQuery, { threadId })

    return {
      ...response,
      thread: this.transformTimestamps(response.thread),
    }
  }

  // Get timeline events for a thread
  async getTimelineEvents(
    threadId: string,
    filters?: PaginationFilters
  ): Promise<TimelineEventsResponse> {
    const variables = {
      threadId,
      first: filters?.first || 50,
      after: filters?.after,
      last: filters?.last,
      before: filters?.before,
    }

    const response = await this.request<TimelineEventsResponse>(GetTimelineEventsQuery, variables)

    return {
      ...response,
      thread: {
        ...response.thread,
        timelineEntries: this.transformConnection(response.thread.timelineEntries),
      },
    }
  }
}

// Export types for use in hooks
export type {
  WorkspaceResponse,
  ThreadsResponse,
  CustomersResponse,
  TenantsResponse,
  ThreadDetailsResponse,
  TimelineEventsResponse,
}
