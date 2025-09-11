import React, { useState, useEffect } from 'react'
import { Box, Text, useInput } from 'ink'
import type { PlainClient } from '../client.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { ScrollableList } from './ScrollableList.js'

interface ThreadsViewProps {
  client: PlainClient
  workspace: any
  onNavigate: (view: View, threadId?: string) => void
}

interface Thread {
  id: string
  title: string
  status: string
  priority: number
  statusChangedAt: string
  updatedAt: string
  createdAt: string
  customer: {
    id: string
    fullName: string
    email: { email: string }
    company?: { name: string }
  }
  assignedToUser?: {
    user: {
      id: string
      fullName: string
      publicName: string
    }
  }
  labels: Array<{
    id: string
    labelType: {
      name: string
      color: string
      icon?: string
    }
  }>
  previewText?: string
}

interface ThreadsState {
  threads: Thread[]
  loading: boolean
  error?: string
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

export function ThreadsView({ client, workspace, onNavigate }: ThreadsViewProps) {
  const [state, setState] = useState<ThreadsState>({
    threads: [],
    loading: true,
    selectedIndex: 0,
    showFilters: false,
    filters: {
      statuses: [],
      priorities: [],
      assignedToUsers: [],
    },
  })

  const loadThreads = async () => {
    setState((prev) => ({ ...prev, loading: true }))
    try {
      const response = await client.getThreads({
        statuses: state.filters.statuses.length > 0 ? state.filters.statuses : undefined,
        priorities: state.filters.priorities.length > 0 ? state.filters.priorities : undefined,
        assignedToUsers:
          state.filters.assignedToUsers.length > 0 ? state.filters.assignedToUsers : undefined,
        first: 50,
      })

      setState((prev) => ({
        ...prev,
        threads: response.threads.edges.map((edge: any) => edge.node),
        loading: false,
        selectedIndex: 0,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to load threads',
        loading: false,
      }))
    }
  }

  useEffect(() => {
    loadThreads()
  }, [state.filters])

  useInput((input, key) => {
    if (state.showFilters) {
      if (input === 'q' || key.escape) {
        setState((prev) => ({ ...prev, showFilters: false }))
      }
      return
    }

    if (input === 'q') {
      onNavigate('home')
    } else if (input === 'f') {
      setState((prev) => ({ ...prev, showFilters: !prev.showFilters }))
    } else if (input === 'r') {
      loadThreads()
    } else if (key.upArrow && state.threads.length > 0) {
      setState((prev) => ({
        ...prev,
        selectedIndex: Math.max(0, prev.selectedIndex - 1),
      }))
    } else if (key.downArrow && state.threads.length > 0) {
      setState((prev) => ({
        ...prev,
        selectedIndex: Math.min(prev.threads.length - 1, prev.selectedIndex + 1),
      }))
    } else if (key.return && state.threads.length > 0) {
      const selectedThread = state.threads[state.selectedIndex]
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

  if (state.loading) {
    return (
      <Box padding={1}>
        <Text>Loading threads...</Text>
      </Box>
    )
  }

  if (state.error) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">❌ Error: {state.error}</Text>
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

  const threadItems = state.threads.map((thread, index) => (
    <Box
      key={thread.id}
      borderStyle={index === state.selectedIndex ? 'round' : undefined}
      borderColor={index === state.selectedIndex ? 'cyan' : undefined}
      padding={index === state.selectedIndex ? 1 : 0}
      marginBottom={1}
    >
      <Box flexDirection="column" width="100%">
        {/* Main thread info */}
        <Box justifyContent="space-between">
          <Box>
            <Text color={index === state.selectedIndex ? 'cyan' : 'white'} bold>
              {index === state.selectedIndex ? '► ' : '  '}
              {thread.title || 'Untitled Thread'}
            </Text>
          </Box>
          <Box>
            <Text color={getStatusColor(thread.status)}>{thread.status}</Text>
            <Text> {getPriorityIcon(thread.priority)}</Text>
          </Box>
        </Box>

        {/* Customer and company info */}
        <Box marginTop={0} marginLeft={2}>
          <Text color="gray">
            👤 {thread.customer.fullName} ({thread.customer.email.email})
            {thread.customer.company && ` • 🏢 ${thread.customer.company.name}`}
          </Text>
        </Box>

        {/* Assignee */}
        {thread.assignedToUser && (
          <Box marginLeft={2}>
            <Text color="gray">👨‍💼 Assigned to: {thread.assignedToUser.user.publicName}</Text>
          </Box>
        )}

        {/* Labels */}
        {thread.labels.length > 0 && (
          <Box marginLeft={2}>
            <Text color="gray">
              🏷️ {thread.labels.map((label) => label.labelType.name).join(', ')}
            </Text>
          </Box>
        )}

        {/* Preview text */}
        {thread.previewText && (
          <Box marginLeft={2} marginTop={0}>
            <Text color="gray">
              💬 {thread.previewText.substring(0, 100)}
              {thread.previewText.length > 100 ? '...' : ''}
            </Text>
          </Box>
        )}

        {/* Dates */}
        <Box marginLeft={2} marginTop={0}>
          <Text color="gray">
            🕐 Updated: {formatDate(thread.updatedAt)}
            {' • '}Created: {formatDate(thread.createdAt)}
          </Text>
        </Box>
      </Box>
    </Box>
  ))

  return (
    <Layout
      title="Threads"
      subtitle={`${state.threads.length} threads found`}
      statusText={state.showFilters ? 'Filters Active' : undefined}
      helpText="↑/↓: Navigate • Enter: View • F: Filters • R: Refresh • Q: Back"
    >
      {state.threads.length === 0 ? (
        <Box flexGrow={1} justifyContent="center" alignItems="center">
          <Text color="gray">No threads found</Text>
        </Box>
      ) : (
        <ScrollableList selectedIndex={state.selectedIndex} itemHeight={6}>
          {threadItems}
        </ScrollableList>
      )}
    </Layout>
  )
}
