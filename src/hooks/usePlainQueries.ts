import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { PlainClient, GetThreadsArgs, PaginationFilters } from '../client.js'

// Query keys for consistent caching
export const queryKeys = {
  workspace: () => ['workspace'],
  threads: (filters?: GetThreadsArgs) => ['threads', filters],
  customers: (filters?: PaginationFilters) => ['customers', filters],
  tenants: (filters?: PaginationFilters) => ['tenants', filters],
  threadDetails: (threadId: string) => ['thread-details', threadId],
}

// Workspace query hook
export function useWorkspace(client: PlainClient) {
  return useQuery({
    queryKey: queryKeys.workspace(),
    queryFn: () => client.getWorkspace(),
    staleTime: 5 * 60 * 1000, // 5 minutes for workspace (changes less frequently)
  })
}

// Threads query hook
export function useThreads(client: PlainClient, filters?: GetThreadsArgs) {
  return useQuery({
    queryKey: queryKeys.threads(filters),
    queryFn: () => client.getThreads(filters),
    staleTime: 60 * 1000, // 1 minute
  })
}

// Customers query hook
export function useCustomers(client: PlainClient, filters?: PaginationFilters) {
  return useQuery({
    queryKey: queryKeys.customers(filters),
    queryFn: () => client.getCustomers(filters),
    staleTime: 60 * 1000, // 1 minute
  })
}

// Tenants query hook
export function useTenants(client: PlainClient, filters?: PaginationFilters) {
  return useQuery({
    queryKey: queryKeys.tenants(filters),
    queryFn: () => client.getTenants(filters),
    staleTime: 60 * 1000, // 1 minute
  })
}

// Thread details query hook
export function useThreadDetails(client: PlainClient, threadId: string) {
  return useQuery({
    queryKey: queryKeys.threadDetails(threadId),
    queryFn: () => client.getThreadDetails(threadId),
    staleTime: 30 * 1000, // 30 seconds for thread details (more dynamic)
    enabled: !!threadId, // Only run if threadId exists
  })
}

// Hook to manually refresh all queries
export function useRefreshQueries() {
  const queryClient = useQueryClient()
  
  return {
    refreshAll: () => queryClient.invalidateQueries(),
    refreshWorkspace: () => queryClient.invalidateQueries({ queryKey: queryKeys.workspace() }),
    refreshThreads: (filters?: GetThreadsArgs) => 
      queryClient.invalidateQueries({ queryKey: queryKeys.threads(filters) }),
    refreshCustomers: (filters?: PaginationFilters) => 
      queryClient.invalidateQueries({ queryKey: queryKeys.customers(filters) }),
    refreshTenants: (filters?: PaginationFilters) => 
      queryClient.invalidateQueries({ queryKey: queryKeys.tenants(filters) }),
    refreshThreadDetails: (threadId: string) => 
      queryClient.invalidateQueries({ queryKey: queryKeys.threadDetails(threadId) }),
  }
}