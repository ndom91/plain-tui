import { Box, Text, useInput, measureElement } from 'ink'
import { useState, useRef, useCallback } from 'react'
import type { GetThreadsArgs, PlainClient } from '../client.js'
import { useRefreshQueries, useThreads } from '../hooks/usePlainQueries.js'
import type { Workspace } from '../types/plain.js'
import type { Thread, ThreadStatus } from '../types/threads.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import { ScrollableList } from './ScrollableList.js'
import { SearchInput } from './SearchInput.js'
import { ThreadItem } from './ThreadItem.js'
import { ScrollBox } from './ScrollBox.js'
import { useStdoutDimensions } from '../lib/useStdoutDimensions.js'

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
    statuses: ThreadStatus[]
    priorities: number[]
    assignedToUsers: string[]
  }
}

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
  const [offset, setOffset] = useState(0)
  const [_columns, rows] = useStdoutDimensions()
  const threadItemRefs = useRef<Map<string, HTMLElement>>(new Map())

  const { refreshThreads } = useRefreshQueries()

  // Callback to store thread item refs
  const setThreadItemRef = useCallback((threadId: string, element: HTMLElement | null) => {
    if (element) {
      threadItemRefs.current.set(threadId, element)
    } else {
      threadItemRefs.current.delete(threadId)
    }
  }, [])

  const queryFilters: GetThreadsArgs = {
    statuses: state.filters.statuses.length > 0 ? state.filters.statuses : undefined,
    priorities: state.filters.priorities.length > 0 ? state.filters.priorities : undefined,
    assignedToUsers:
      state.filters.assignedToUsers.length > 0 ? state.filters.assignedToUsers : undefined,
    first: 50,
  }

  const { data: threadsData, isLoading, error, isFetching } = useThreads(client, queryFilters)
  const allThreads: Thread[] = threadsData?.threads.edges.map((edge) => edge.node) || []

  const threads = state.searchQuery.trim()
    ? allThreads.filter(
        (thread) =>
          thread.title?.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          thread.description?.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          thread.customer?.fullName?.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          thread.customer?.email?.email?.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    : allThreads

  const getThreadItemHeight = (index: number): number => {
    if (index >= threads.length) return 1
    const threadId = threads[index].id
    const element = threadItemRefs.current.get(threadId)
    if (element) {
      return measureElement(element).height
    }
    return 1
  }

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

      if (input === 'q') {
        onNavigate('home')
      } else if (key.escape) {
        if (state.searchQuery.trim()) {
          setState((prev) => ({ ...prev, showSearch: true }))
        } else {
          onNavigate('home')
        }
      } else if (input === '/') {
        setState((prev) => ({ ...prev, showSearch: true }))
      } else if (input === 'f') {
        setState((prev) => ({ ...prev, showFilters: !prev.showFilters }))
      } else if (input === 'r') {
        refreshThreads(queryFilters)
      } else if ((key.upArrow || input === 'k') && threads.length > 0) {
        if (offset <= 0) {
          return
        }
        const newSelectedIndex = Math.max(0, state.selectedIndex - 1)
        setState((prev) => ({
          ...prev,
          selectedIndex: newSelectedIndex,
        }))

        // Measure current item height and subtract that from offset
        const currentItemHeight = getThreadItemHeight(state.selectedIndex)
        setOffset((offset) => Math.max(0, offset - currentItemHeight))
      } else if ((key.downArrow || input === 'j') && threads.length > 0) {
        // if (offset >= threads.length - 1) {
        //   return
        // }
        // const nextItemHeight = getThreadItemHeight(state.selectedIndex)
        const newSelectedIndex = state.selectedIndex + 1
        setState((prev) => ({
          ...prev,
          selectedIndex: newSelectedIndex,
        }))

        // Measure next item height and add that to offset
        const nextItemHeight = getThreadItemHeight(newSelectedIndex)
        setOffset((offset) => offset + nextItemHeight)
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
    <Box key={thread.id} ref={(el) => setThreadItemRef(thread.id, el)} flexShrink={0}>
      <ThreadItem thread={thread} isSelected={index === state.selectedIndex} />
    </Box>
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
        <ScrollBox height={rows} offset={offset} flexGrow={1}>
          {threadItems}
        </ScrollBox>
      )}
    </Layout>
  )
}
