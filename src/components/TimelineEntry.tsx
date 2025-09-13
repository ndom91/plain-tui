import { Box, Text } from 'ink'
import type { GetTimelineEventsQuery } from '../types/generated/graphql.js'

type TimelineNode = NonNullable<
  GetTimelineEventsQuery['thread']
>['timelineEntries']['edges'][0]['node']
type Actor = TimelineNode['actor']
type Entry = TimelineNode['entry']

interface TimelineEntryProps {
  entry: Entry
  actor: Actor
  timestamp: string
  index: number
}

export function TimelineEntry({ entry, actor, timestamp, index }: TimelineEntryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString() +
      ' ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    )
  }

  const rawActorName =
    actor.__typename === 'UserActor'
      ? actor.user.publicName
      : actor.__typename === 'CustomerActor'
        ? actor.customer.fullName
        : actor.__typename === 'MachineUserActor'
          ? actor.machineUser.publicName
          : actor.__typename === 'SystemActor'
            ? 'System'
            : 'Unknown'

  const actorName = rawActorName.trim()
  const time = formatDate(timestamp)

  switch (entry.__typename) {
    case 'ChatEntry':
      return (
        <Box borderStyle="round" borderColor="blue">
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
                <Text color="green">✓ Read by customer at {formatDate(entry.customerReadAt)}</Text>
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
        <Box borderStyle="round" borderColor="green">
          <Box flexDirection="column" width="100%" flexGrow={1}>
            <Box justifyContent="space-between" width="100%">
              <Text color="green">📧 Email: {entry.subject || '(no subject)'}</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box>
              <Text color="gray">
                From: {entry.from.name || entry.from.email} ({entry.from.email})
              </Text>
            </Box>
            <Box>
              <Text color="gray">
                To: {entry.to.name || entry.to.email} ({entry.to.email})
              </Text>
            </Box>
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
        <Box borderStyle="round" borderColor="yellow">
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
        <Box borderStyle="round" borderColor="magenta" width="100%">
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
        <Box borderStyle="round" borderColor="magenta">
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
        <Box borderStyle="round" borderColor="cyan">
          <Box justifyContent="space-between">
            <Text color="cyan">🎯 {entry.title}</Text>
            <Text color="gray">{time}</Text>
          </Box>
        </Box>
      )

    case 'CustomerEventEntry':
      return (
        <Box borderStyle="round" borderColor="blue">
          <Box justifyContent="space-between" width="100%">
            <Text color="blue">👤 {entry.title}</Text>
            <Text color="gray">{time}</Text>
          </Box>
        </Box>
      )

    case 'CustomEntry':
      return (
        <Box borderStyle="round" borderColor="white">
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
        <Box padding={1}>
          <Box justifyContent="space-between" width="100%">
            <Text color="gray">
              🔄 {entry.__typename} by {actorName} {JSON.stringify(entry, null, 2)}
            </Text>
            <Text color="gray">{time}</Text>
          </Box>
        </Box>
      )
  }
}

