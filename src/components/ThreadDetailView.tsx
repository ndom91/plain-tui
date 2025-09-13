import { Box, Text, useInput } from 'ink'
import type { PlainClient } from '../client.js'
import { useRefreshQueries, useThreadDetails, useTimelineEvents } from '../hooks/usePlainQueries.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import type {
  GetTimelineEventsQuery,
  GetThreadDetailsQuery
} from '../types/generated/graphql.js'

// Extract types from generated GraphQL types
type TimelineNode = NonNullable<GetTimelineEventsQuery['thread']>['timelineEntries']['edges'][0]['node']
type Actor = TimelineNode['actor']
type Entry = TimelineNode['entry']
type DateTime = TimelineNode['timestamp']

interface ThreadDetailViewProps {
  client: PlainClient
  workspace: Workspace
  threadId: string
  onNavigate: (view: View) => void
}

export function ThreadDetailView({
  client,
  workspace: _workspace,
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

  useInput((input, key) => {
    if (input === 'q' || key.escape) {
      onNavigate('threads')
    } else if (input === 'r') {
      refreshThreadDetails(threadId)
      refreshTimelineEvents(threadId)
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

  const renderTimelineEntry = (entry: Entry, actor: Actor, timestamp: string, index: number) => {
    const actorName =
      actor.__typename === 'UserActor'
        ? actor.user.publicName
        : actor.__typename === 'CustomerActor'
          ? actor.customer.fullName
          : actor.__typename === 'MachineUserActor'
            ? actor.machineUser.publicName
            : actor.__typename === 'SystemActor'
              ? 'System'
              : 'Unknown'

    const time = formatDate(timestamp)

    switch (entry.__typename) {
      case 'ChatEntry':
        return (
          <Box
            key={`${index}-chat-${entry.chatId}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="blue"
          >
            <Box flexDirection="column" width="100%">
              <Box justifyContent="space-between" width="100%">
                <Text color="blue">💬 Chat from {actorName}</Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Box marginTop={1}>
                <Text>{entry.text || '(no text)'}</Text>
              </Box>
              {entry.customerReadAt && (
                <Box marginTop={1}>
                  <Text color="green">
                    ✓ Read by customer at {formatDate(entry.customerReadAt)}
                  </Text>
                </Box>
              )}
              {entry.attachments && entry.attachments.length > 0 && (
                <Box marginTop={1}>
                  <Text color="cyan">📎 {entry.attachments.length} attachment(s)</Text>
                </Box>
              )}
            </Box>
          </Box>
        )

      case 'EmailEntry':
        return (
          <Box
            key={`${index}-email-${entry.emailId}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="green"
          >
            <Box flexDirection="column" width="100%" flexGrow={1}>
              <Box justifyContent="space-between" width="100%">
                <Text color="green">📧 Email: {entry.subject || '(no subject)'}</Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Text color="gray">
                From: {entry.from.name || entry.from.email} ({entry.from.email})
              </Text>
              <Text color="gray">
                To: {entry.to.name || entry.to.email} ({entry.to.email})
              </Text>
              {entry.textContent && (
                <Box marginTop={1}>
                  <Text>{entry.textContent.substring(0, 200)}...</Text>
                </Box>
              )}
              {entry.sendStatus && (
                <Box marginTop={1}>
                  <Text
                    color={
                      entry.sendStatus === 'SENT'
                        ? 'green'
                        : entry.sendStatus === 'FAILED'
                          ? 'red'
                          : 'yellow'
                    }
                  >
                    Status: {entry.sendStatus}
                  </Text>
                </Box>
              )}
              {entry.attachments && entry.attachments.length > 0 && (
                <Box marginTop={1}>
                  <Text color="cyan">📎 {entry.attachments.length} attachment(s)</Text>
                </Box>
              )}
            </Box>
          </Box>
        )

      case 'NoteEntry':
        return (
          <Box
            key={`${index}-note-${entry.noteId}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="yellow"
          >
            <Box flexDirection="column" width="100%">
              <Box justifyContent="space-between" width="100%">
                <Text color="yellow">📝 Note from {actorName}</Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Box marginTop={1}>
                <Text>{entry.text}</Text>
              </Box>
              {entry.attachments && entry.attachments.length > 0 && (
                <Box marginTop={1}>
                  <Text color="cyan">📎 {entry.attachments.length} attachment(s)</Text>
                </Box>
              )}
            </Box>
          </Box>
        )

      case 'SlackMessageEntry':
        return (
          <Box
            key={`${index}-slack-${entry.slackMessageLink}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="magenta"
            width="100%"
          >
            <Box flexDirection="column" width="100%">
              <Box justifyContent="space-between" width="100%">
                <Text color="magenta">💬 Slack message from {actorName}</Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Box marginTop={1}>
                <Text>{entry.text}</Text>
              </Box>
              {entry.reactions && entry.reactions.length > 0 && (
                <Box marginTop={1}>
                  <Text color="cyan">
                    Reactions: {entry.reactions.map((r: any) => r.name).join(' ')}
                  </Text>
                </Box>
              )}
            </Box>
          </Box>
        )

      case 'SlackReplyEntry':
        return (
          <Box
            key={`${index}-slack-reply-${entry.slackMessageLink}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="magenta"
          >
            <Box flexDirection="column" width="100%">
              <Box justifyContent="space-between" width="100%">
                <Text color="magenta">
                  {`↳`} Slack reply from {actorName}
                </Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Box marginTop={1}>
                <Text>{entry.text}</Text>
              </Box>
            </Box>
          </Box>
        )

      case 'ThreadEventEntry':
        return (
          <Box
            key={`${index}-thread-event-${entry.timelineEventId}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="cyan"
          >
            <Box justifyContent="space-between">
              <Text color="cyan">🎯 {entry.title}</Text>
              <Text color="gray">{time}</Text>
            </Box>
          </Box>
        )

      case 'CustomerEventEntry':
        return (
          <Box
            key={`${index}-customer-event-${entry.timelineEventId}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="blue"
          >
            <Box justifyContent="space-between" width="100%">
              <Text color="blue">👤 {entry.title}</Text>
              <Text color="gray">{time}</Text>
            </Box>
          </Box>
        )

      case 'CustomEntry':
        return (
          <Box
            key={`${index}-custom-${entry.externalId || 'no-id'}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="white"
          >
            <Box flexDirection="column" width="100%">
              <Box justifyContent="space-between" width="100%">
                <Text color="white">
                  ⚡ {entry.title} {entry.type ? `(${entry.type})` : ''}
                </Text>
                <Text color="gray">{time}</Text>
              </Box>
            </Box>
          </Box>
        )

      default:
        return (
          <Box
            key={`${index}-other-${entry.__typename}`}
            marginBottom={1}
            borderStyle="round"
            borderColor="gray"
          >
            <Box justifyContent="space-between" width="100%">
              <Text color="gray">
                🔄 {entry.__typename} by {actorName}
              </Text>
              <Text color="gray">{time}</Text>
            </Box>
          </Box>
        )
    }
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

  return (
    <Layout
      title={thread.title}
      subtitle={`Priority: ${getPriorityIcon(thread.priority)} (${getPriorityLabel(thread.priority)})`}
      statusText={thread.status}
      helpText={helpText}
    >
      <Box marginBottom={1} borderStyle="round" borderColor="green" padding={1}>
        <Box flexDirection="column">
          <Text color="green" bold>
            👤 Customer Information
          </Text>
          <Text>
            {thread.customer.fullName} ({thread.customer.email.email})
            {thread.customer.company && ` • 🏢 ${thread.customer.company.name}`}
          </Text>

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

      {/* Timeline */}
      <Box flexDirection="column" marginBottom={1}>
        <Text color="yellow" bold marginBottom={1}>
          📜 Timeline {timeline ? `(${timeline.edges.length} entries)` : '(Loading...)'}
        </Text>

        <Box flexDirection="column" height={20} overflow="hidden">
          {timelineError ? (
            <Text color="red">Error loading timeline: {timelineError.message}</Text>
          ) : !timeline ? (
            <LoadingSpinner text="Loading timeline..." />
          ) : timeline.edges.length === 0 ? (
            <Text color="gray">No timeline entries found</Text>
          ) : (
            timeline.edges
              .slice()
              .reverse() // Show most recent first
              .map(({ node }, index) =>
                renderTimelineEntry(node.entry, node.actor, node.timestamp, index)
              )
          )}
        </Box>
      </Box>
    </Layout>
  )
}
