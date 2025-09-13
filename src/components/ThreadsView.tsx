import { Box, Text, useInput } from 'ink'
import { useState, useCallback } from 'react'
import type { PlainClient } from '../client.js'
import { useRefreshQueries, useThreads } from '../hooks/usePlainQueries.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import { ScrollableList } from './ScrollableList.js'
import { ThreadItem } from './ThreadItem.js'
import { SearchInput } from './SearchInput.js'
import type { Thread } from '../types/threads.js'

interface ThreadsViewProps {
  client: PlainClient
  workspace: Workspace
  onNavigate: (view: View, threadId?: string) => void
}

interface ThreadsState {
  selectedIndex: number
  showFilters: boolean
  showSearch: boolean
  searchQuery: string
  filters: {
    statuses: string[]
    priorities: number[]
    assignedToUsers: string[]
  }
}

const statusOptions = ['TODO', 'SNOOZED', 'DONE']
const priorityOptions = [0, 1, 2, 3, 4]

export function ThreadsView({ client, onNavigate }: ThreadsViewProps) {
  const [state, setState] = useState<ThreadsState>({
    selectedIndex: 0,
    showFilters: false,
    showSearch: false,
    searchQuery: '',
    filters: {
      statuses: [],
      priorities: [],
      assignedToUsers: [],
    },
  })


  const { refreshThreads } = useRefreshQueries()

  const queryFilters = {
    statuses: state.filters.statuses.length > 0 ? state.filters.statuses : undefined,
    priorities: state.filters.priorities.length > 0 ? state.filters.priorities : undefined,
    assignedToUsers:
      state.filters.assignedToUsers.length > 0 ? state.filters.assignedToUsers : undefined,
    first: 50,
  }

  const { data: threadsData, isLoading, error, isFetching } = useThreads(client, queryFilters)
  const allThreads: Thread[] = threadsData?.threads.edges.map((edge: any) => edge.node) || []

  const threads = state.searchQuery.trim()
    ? allThreads.filter(
        (thread) =>
          thread.title?.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          thread.description?.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          thread.customer?.fullName?.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          thread.customer?.email?.email?.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    : allThreads

  if (state.selectedIndex >= threads.length && threads.length > 0) {
    setState((prev) => ({ ...prev, selectedIndex: 0 }))
  }

  useInput(
    (input, key) => {
      if (state.showFilters) {
        if (input === 'q' || key.escape) {
          setState((prev) => ({ ...prev, showFilters: false }))
        }
        return
      }

      if (input === 'q' || key.escape) {
        onNavigate('home')
      } else if (input === '/') {
        setState((prev) => ({ ...prev, showSearch: true }))
      } else if (input === 'f') {
        setState((prev) => ({ ...prev, showFilters: !prev.showFilters }))
      } else if (input === 'r') {
        refreshThreads(queryFilters)
      } else if ((key.upArrow || input === 'k') && threads.length > 0) {
        setState((prev) => ({
          ...prev,
          selectedIndex: Math.max(0, prev.selectedIndex - 1),
        }))
      } else if ((key.downArrow || input === 'j') && threads.length > 0) {
        setState((prev) => ({
          ...prev,
          selectedIndex: Math.min(threads.length - 1, prev.selectedIndex + 1),
        }))
      } else if (key.return && threads.length > 0) {
        const selectedThread = threads[state.selectedIndex]
        if (selectedThread) {
          onNavigate('thread-detail', selectedThread.id)
        }
      }
    },
    { isActive: !state.showSearch }
  )


  if (isLoading) {
    return (
      <Box margin={1}>
        <LoadingSpinner text="Loading threads..." />
      </Box>
    )
  }

  if (error) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">
          ❌ Error: {error instanceof Error ? error.message : 'Failed to load threads'}
        </Text>
        <Text color="gray">Press 'r' to retry or 'q' to go back</Text>
      </Box>
    )
  }

  if (state.showFilters) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="cyan" bold>
          🔍 Filters
        </Text>
        <Box marginTop={1} marginBottom={1}>
          <Text color="gray">Filter functionality coming soon...</Text>
          <Text color="gray">Press 'q' or ESC to close</Text>
        </Box>
      </Box>
    )
  }

  const threadItems = threads.map((thread, index) => (
    <ThreadItem key={thread.id} thread={thread} isSelected={index === state.selectedIndex} />
  ))

  const helpText =
    isFetching && !isLoading ? (
      <Box>
        <Text color="gray" dimColor>
          ↑/↓/j/k: Navigate • Enter: View • /: Search • F: Filters •{' '}
        </Text>
        <LoadingSpinner text="" />
        <Text color="gray" dimColor>
          {' '}
          Refreshing • Q: Back
        </Text>
      </Box>
    ) : (
      '↑/↓/j/k: Navigate • Enter: View • /: Search • F: Filters • R: Refresh • Q: Back'
    )

  const searchInputComponent = state.showSearch ? (
    <SearchInput
      value={state.searchQuery}
      onChange={(value) => setState((prev) => ({ ...prev, searchQuery: value }))}
      onCancel={() => setState((prev) => ({ ...prev, showSearch: false, searchQuery: '' }))}
      onSubmit={() => setState((prev) => ({ ...prev, showSearch: false }))}
      placeholder="Type to search threads..."
    />
  ) : null

  return (
    <Layout
      title="Threads"
      subtitle={`${threads.length} threads found${state.searchQuery.trim() ? ` (filtered by: "${state.searchQuery}")` : ''}`}
      statusText={
        state.showFilters
          ? 'Filters Active'
          : state.searchQuery.trim()
            ? 'Search Active'
            : undefined
      }
      searchInput={searchInputComponent}
      helpText={helpText}
    >
      {threads.length === 0 ? (
        <Box flexGrow={1} justifyContent="center" alignItems="center">
          <Text color="gray">No threads found</Text>
        </Box>
      ) : (
        <ScrollableList selectedIndex={state.selectedIndex}>{threadItems}</ScrollableList>
      )}
    </Layout>
  )
}
