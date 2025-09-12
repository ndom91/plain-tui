import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client with 1-minute stale time
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (garbage collection time)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

interface QueryProviderProps {
  children: React.ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

// Export the query client for direct access when needed (e.g., for invalidation)
export { queryClient }