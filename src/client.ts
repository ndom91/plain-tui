import { GraphQLClient } from 'graphql-request'
import { readFileSync } from 'fs'
import { homedir } from 'os'
import { join } from 'path'
import {
  GetWorkspaceQuery,
  GetThreadsQuery,
  GetCustomersQuery,
  GetTenantsQuery,
  GetThreadDetailsQuery,
} from './queries/index.js'

interface PlainConfig {
  apiKey: string
  workspaceId?: string
  endpoint?: string
}

export class PlainClient {
  private client: GraphQLClient
  private config: PlainConfig

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
  async getWorkspace() {
    return this.request(GetWorkspaceQuery)
  }

  // Get threads with filtering
  async getThreads(filters?: {
    statuses?: string[]
    assignedToUsers?: string[]
    priorities?: number[]
    first?: number
    after?: string
  }) {
    return this.request(GetThreadsQuery, {
      first: filters?.first || 20,
      after: filters?.after,
    })
  }

  // Get customers
  async getCustomers(filters?: { first?: number; after?: string }) {
    return this.request(GetCustomersQuery, {
      first: filters?.first || 20,
      after: filters?.after,
    })
  }

  // Get tenants
  async getTenants(filters?: { first?: number; after?: string }) {
    return this.request(GetTenantsQuery, {
      first: filters?.first || 20,
      after: filters?.after,
    })
  }

  // Get thread details with timeline
  async getThreadDetails(threadId: string) {
    return this.request(GetThreadDetailsQuery, { threadId })
  }
}
