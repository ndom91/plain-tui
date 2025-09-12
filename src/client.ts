import { readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { GraphQLClient } from 'graphql-request'
import {
  GetCustomersQuery,
  GetTenantsQuery,
  GetThreadDetailsQuery,
  GetThreadsQuery,
  GetWorkspaceQuery,
} from './queries/index.js'
import type { Connection } from './types/base.js'
import type {
  SimpleCustomer as Customer,
  SimpleTenant as Tenant,
  SimpleThread as Thread,
} from './types/compatibility.js'
import type { Workspace } from './types/plain.js'
import type { ThreadsFilter, ThreadsSort, ThreadStatus } from './types/threads.js'
import type { TimelineEntry } from './types/timeline.js'

interface PlainConfig {
  apiKey: string
  workspaceId?: string
  endpoint?: string
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

export class PlainClient {
  private client: GraphQLClient
  private config: PlainConfig

  // biome-ignore lint/suspicious/noExplicitAny: API Response
  private transformTimestamps<T extends Record<string, any>>(obj: T): T {
    const transformed = { ...obj }

    if (obj.createdAt && typeof obj.createdAt === 'object' && obj.createdAt.iso8601) {
      transformed.createdAt = obj.createdAt.iso8601
    }

    if (obj.updatedAt && typeof obj.updatedAt === 'object' && obj.updatedAt.iso8601) {
      transformed.updatedAt = obj.updatedAt.iso8601
    }

    return transformed
  }

  // biome-ignore lint/suspicious/noExplicitAny: API Response
  private transformConnection<T extends Record<string, any>>(
    connection: Connection<T>
  ): Connection<T> {
    return {
      ...connection,
      edges: connection.edges.map((edge) => ({
        ...edge,
        node: this.transformTimestamps(edge.node),
      })),
    }
  }

  constructor() {
    this.config = this.loadConfig()

    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json',
    }

    // Add workspace ID if provided
    if (this.config.workspaceId) {
      headers['Plain-Workspace-Id'] = this.config.workspaceId
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
    } catch (error) {
      throw new Error(
        `Failed to load config from ${configPath}. Please create the file with your Plain API key and workspaceId.`
      )
    }
  }

  async request<T>(query: string, variables?: any): Promise<T> {
    return this.client.request<T>(query, variables)
  }

  // Get workspace info (Machine Users can't access myUser)
  async getWorkspace(): Promise<WorkspaceResponse> {
    return this.request<WorkspaceResponse>(GetWorkspaceQuery)
  }

  // Get threads with filtering
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

    // Build request variables properly
    const variables: Partial<PaginationFilters> & Partial<ThreadsSort> = {
      first: filters?.first || 20,
    }

    // Only add sortBy if we want sorting
    variables.sortBy = {
      field: 'STATUS_CHANGED_AT',
      direction: 'DESC',
    }

    // Only add filters if we have any
    if (Object.keys(threadsFilter).length > 0) {
      variables.filters = threadsFilter
    }

    // Only add after if provided
    if (filters?.after) {
      variables.after = filters.after
    }

    return this.request<ThreadsResponse>(GetThreadsQuery, variables)
  }

  // Get customers
  async getCustomers(filters?: PaginationFilters): Promise<CustomersResponse> {
    return this.request<CustomersResponse>(GetCustomersQuery, {
      first: filters?.first || 20,
      after: filters?.after,
    })
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

  // Get thread details with timeline
  async getThreadDetails(threadId: string): Promise<ThreadDetailsResponse> {
    return this.request<ThreadDetailsResponse>(GetThreadDetailsQuery, { threadId })
  }
}
