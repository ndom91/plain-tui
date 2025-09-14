import { Box, Text, useInput } from 'ink'
import { useState } from 'react'
import type { PlainClient } from '../client.js'
import { useRefreshQueries, useThreadDetails, useTimelineEvents } from '../hooks/usePlainQueries.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import { ScrollableList } from './ScrollableList.js'
import { TimelineEntry } from './TimelineEntry.js'
import Link from 'ink-link'

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

  useInput((input, key) => {
    if (input === 'q' || key.escape) {
      onNavigate('threads')
    } else if (input === 'r') {
      refreshThreadDetails(threadId)
      refreshTimelineEvents(threadId)
    } else if ((key.downArrow || input === 'j') && timeline) {
      setSelectedTimelineIndex((prev) => Math.min(prev + 1, timeline.edges.length - 1))
    } else if ((key.upArrow || input === 'k') && timeline) {
      setSelectedTimelineIndex((prev) => Math.max(prev - 1, 0))
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
          Refreshing • Q: Back
        </Text>
      </Box>
    ) : (
      '↑/↓/j/k: Navigate • F: Filters • R: Refresh • Q: Back'
    )

  const generatePlainLink = () => {
    return `https://app.plain.com/workspace/${workspace.id}/thread/${thread.id}`
  }

  return (
    <Layout
      title={
        <Box justifyContent="space-between" width={'100%'}>
          <Text color="cyan" bold>
            {thread.title}
          </Text>
          <Box>
            <Link url={generatePlainLink()}>Open in Plain</Link>
          </Box>
        </Box>
      }
      subtitle={`${getPriorityIcon(thread.priority)} ${getPriorityLabel(thread.priority)}`}
      statusText={thread.status}
      helpText={helpText}
    >
      <Box marginBottom={1} borderStyle="round" borderColor="green">
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
          <ScrollableList selectedIndex={selectedTimelineIndex}>
            {timeline.edges
              .slice()
              .reverse() // Show most recent first
              .map(({ node }, index) => (
                <TimelineEntry
                  key={`${index}-${node.entry.__typename}-${node.timestamp}`}
                  entry={node.entry}
                  actor={node.actor}
                  timestamp={node.timestamp}
                  index={index}
                />
              ))}
          </ScrollableList>
        )}
      </Box>
    </Layout>
  )
}
