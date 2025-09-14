import { Box, Text, useInput } from 'ink'
import { useState } from 'react'
import type { PlainClient } from '../client.js'
import { useRefreshQueries, useThreadDetails, useTimelineEvents } from '../hooks/usePlainQueries.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import { ScrollBox } from './ScrollBox.js'
import { useStdoutDimensions } from '../lib/useStdoutDimensions.js'
import { TimelineEntry } from './TimelineEntry.js'
import Link from 'ink-link'
import { Badge } from '@inkjs/ui'

interface ThreadDetailViewProps {
  client: PlainClient
  workspace: Workspace
  threadId: string
  onNavigate: (view: View) => void
}

export function ThreadDetailView({
  client,
  workspace,
  threadId,
  onNavigate,
}: ThreadDetailViewProps) {
  const { refreshThreadDetails, refreshTimelineEvents } = useRefreshQueries()
  const { data: threadData, isLoading, error, isFetching } = useThreadDetails(client, threadId)
  const {
    data: timelineData,
    isLoading: timelineLoading,
    error: timelineError,
    isFetching: timelineFetching,
  } = useTimelineEvents(client, threadId)

  const thread = threadData?.thread
  const timeline = timelineData?.thread?.timelineEntries

  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [_columns, rows] = useStdoutDimensions()

  useInput((input, key) => {
    if (input === 'q' || key.escape) {
      onNavigate('threads')
    } else if (input === 'r') {
      refreshThreadDetails(threadId)
      refreshTimelineEvents(threadId)
    } else if ((key.downArrow || input === 'j') && timeline) {
      const newSelectedIndex = Math.min(selectedTimelineIndex + 1, timeline.edges.length - 1)
      setSelectedTimelineIndex(newSelectedIndex)

      // Calculate how many items can fit in the viewport
      const availableRows = Math.max(1, rows - 10) // Account for header, customer info, and footer
      const visibleItems = Math.floor(availableRows / 3) // Assuming ~3 rows per timeline entry

      // Adjust offset to keep the selected item visible
      if (newSelectedIndex >= offset + visibleItems) {
        setOffset(newSelectedIndex - visibleItems + 1)
      }
    } else if ((key.upArrow || input === 'k') && timeline) {
      const newSelectedIndex = Math.max(selectedTimelineIndex - 1, 0)
      setSelectedTimelineIndex(newSelectedIndex)

      // Adjust offset to keep the selected item visible
      if (newSelectedIndex < offset) {
        setOffset(newSelectedIndex)
      }
    }
  })

  if (isLoading || timelineLoading) {
    return (
      <Box margin={1}>
        <LoadingSpinner
          text={isLoading ? 'Loading thread details...' : 'Loading timeline events...'}
        />
      </Box>
    )
  }

  if (error || !thread) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">
          ❌ Error: {error instanceof Error ? error.message : 'Thread not found'}
        </Text>
        <Text color="gray">Press 'r' to retry or 'q' to go back</Text>
      </Box>
    )
  }

  if (timelineError && !timeline) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">
          ❌ Timeline Error:{' '}
          {timelineError instanceof Error ? timelineError.message : 'Timeline not found'}
        </Text>
        <Text color="gray">Press 'r' to retry or 'q' to go back</Text>
      </Box>
    )
  }

  const getPriorityIcon = (priority: number) => {
    const icons = ['🚨', '🔴', '🟠', '🟡']
    return icons[priority] || '⚪'
  }
  const getPriorityLabel = (priority: number) => {
    const priorityLabels = {
      0: 'Urgent',
      1: 'High',
      2: 'Normal',
      3: 'Low',
    }
    return priorityLabels[priority]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString() +
      ' ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    )
  }

  const helpText =
    (isFetching && !isLoading) || (timelineFetching && !timelineLoading) ? (
      <Box>
        <Text color="gray" dimColor>
          ↑/↓/j/k: Navigate • F: Filters •{' '}
        </Text>
        <LoadingSpinner text="" />
        <Text color="gray" dimColor>
          {' '}
          Refreshing • Q/Esc: Back
        </Text>
      </Box>
    ) : (
      '↑/↓/j/k: Navigate • F: Filters • R: Refresh • Q/Esc: Back'
    )

  const generatePlainLink = () => {
    return `https://app.plain.com/workspace/${workspace.id}/thread/${thread.id}`
  }

  return (
    <Layout
      title={
        <Box flexDirection="row" justifyContent="space-between" alignItems="center" width={'100%'}>
          <Box flexGrow={1}>
            <Text color="cyan" bold>
              {thread.title}
            </Text>
          </Box>
          <Box flexShrink={0} marginRight={-6}>
            <Badge color="green">
              <Link url={generatePlainLink()}>Open in Plain</Link>
            </Badge>
          </Box>
        </Box>
      }
      subtitle={`${getPriorityIcon(thread.priority)} ${getPriorityLabel(thread.priority)}`}
      statusText={thread.status}
      helpText={helpText}
    >
      <Box marginBottom={1} borderStyle="round" borderColor="green" flexShrink={0}>
        <Box flexDirection="column">
          <Box>
            <Text color="green" bold>
              👤 Customer Information
            </Text>
          </Box>
          <Box>
            <Text>
              {thread.customer.fullName} ({thread.customer.email.email})
              {thread.customer.company && ` • 🏢 ${thread.customer.company.name}`}
            </Text>
          </Box>

          {thread.assignedToUser && (
            <Box marginTop={1}>
              <Text>👨 Assigned to: {thread.assignedToUser.user.publicName}</Text>
            </Box>
          )}

          {thread.labels.length > 0 && (
            <Box marginTop={1}>
              <Text>🏷 Labels: {thread.labels.map((label) => label.labelType.name).join(', ')}</Text>
            </Box>
          )}

          <Box marginTop={1}>
            <Text color="gray">
              🕐 Created: {formatDate(thread.createdAt)} • Updated: {formatDate(thread.updatedAt)}
            </Text>
          </Box>
        </Box>
      </Box>

      <Box flexDirection="column" marginBottom={1}>
        <Text color="yellow" bold>
          📜 Timeline {timeline ? `(${timeline.edges.length} entries)` : '(Loading...)'}
        </Text>

        {timelineError ? (
          <Text color="red">Error loading timeline: {timelineError.message}</Text>
        ) : !timeline ? (
          <LoadingSpinner text="Loading timeline..." />
        ) : timeline.edges.length === 0 ? (
          <Text color="gray">No timeline entries found</Text>
        ) : (
          <ScrollBox height={rows} offset={offset} flexGrow={1} gap={1}>
            {timeline.edges
              .slice()
              .reverse()
              .map(({ node }, index) => (
                <TimelineEntry
                  key={node.id}
                  entry={node.entry}
                  actor={node.actor}
                  timestamp={node.timestamp}
                  index={index}
                  isSelected={index === selectedTimelineIndex}
                />
              ))}
          </ScrollBox>
        )}
      </Box>
    </Layout>
  )
}
