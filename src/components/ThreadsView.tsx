import { Box, Text, useInput } from 'ink'
import { useState } from 'react'
import type { PlainClient } from '../client.js'
import { useRefreshQueries, useThreads } from '../hooks/usePlainQueries.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import { ScrollableList } from './ScrollableList.js'

interface ThreadsViewProps {
  client: PlainClient
  workspace: Workspace
  onNavigate: (view: View, threadId?: string) => void
}

// Thread interface imported from compatibility layer

interface ThreadsState {
  selectedIndex: number
  showFilters: boolean
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
  const threads = threadsData?.threads.edges.map((edge: any) => edge.node) || []

  if (state.selectedIndex >= threads.length && threads.length > 0) {
    setState((prev) => ({ ...prev, selectedIndex: 0 }))
  }

  useInput((input, key) => {
    if (state.showFilters) {
      if (input === 'q' || key.escape) {
        setState((prev) => ({ ...prev, showFilters: false }))
      }
      return
    }

    if (input === 'q' || key.escape) {
      onNavigate('home')
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
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString() +
      ' ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'TODO':
        return 'yellow'
      case 'DONE':
        return 'green'
      case 'SNOOZED':
        return 'blue'
      default:
        return 'gray'
    }
  }

  const getPriorityIcon = (priority: number) => {
    const icons = ['⚪', '🟡', '🟠', '🔴', '🚨']
    return icons[priority] || '⚪'
  }

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
    <Box
      key={thread.id}
      borderStyle={index === state.selectedIndex ? 'round' : undefined}
      borderColor={index === state.selectedIndex ? 'cyan' : undefined}
    >
      <Box flexDirection="column" width="100%">
        <Box justifyContent="space-between">
          <Text color={index === state.selectedIndex ? 'cyan' : 'white'} bold>
            {thread.title || 'Untitled Thread'}
          </Text>
          <Box>
            <Text color={getStatusColor(thread.status)}>{thread.status} </Text>
            <Text>{getPriorityIcon(thread.priority)}</Text>
          </Box>
        </Box>

        <Box>
          <Text color="gray">
            👤 {thread.customer.fullName} ({thread.customer.email.email})
            {thread.customer.company && ` • 🏢 ${thread.customer.company.name}`}
          </Text>
        </Box>

        {thread.assignedToUser && (
          <Box>
            <Text color="gray">👨 {thread.assignedToUser.user.publicName}</Text>
          </Box>
        )}

        {thread.labels.length > 0 && (
          <Box>
            <Text color="gray">
              🏷 {thread.labels.map((label) => label.labelType.name).join(', ')}
            </Text>
          </Box>
        )}

        {thread.previewText && (
          <Box>
            <Text color="gray" wrap="truncate">
              💬 {thread.previewText}
            </Text>
          </Box>
        )}

        <Box>
          <Text color="gray" dimColor>
            🕐 Updated {formatDate(thread.updatedAt)} • Created {formatDate(thread.createdAt)}
          </Text>
        </Box>
      </Box>
    </Box>
  ))

  const helpText =
    isFetching && !isLoading ? (
      <Box>
        <Text color="gray" dimColor>
          ↑/↓/j/k: Navigate • Enter: View • F: Filters •{' '}
        </Text>
        <LoadingSpinner text="" />
        <Text color="gray" dimColor>
          {' '}
          Refreshing • Q: Back
        </Text>
      </Box>
    ) : (
      '↑/↓/j/k: Navigate • Enter: View • F: Filters • R: Refresh • Q: Back'
    )

  return (
    <Layout
      title="Threads"
      subtitle={`${threads.length} threads found`}
      statusText={state.showFilters ? 'Filters Active' : undefined}
      helpText={helpText}
    >
      {threads.length === 0 ? (
        <Box flexGrow={1} justifyContent="center" alignItems="center">
          <Text color="gray">No threads found</Text>
        </Box>
      ) : (
        <ScrollableList selectedIndex={state.selectedIndex} itemHeight={4}>
          {threadItems}
        </ScrollableList>
      )}
    </Layout>
  )
}
