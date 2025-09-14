import { Box, Text } from 'ink'
import type { GetTimelineEventsQuery } from '../types/generated/graphql.js'
import Divider from './Divider.js'
import { getPriorityColor, getStatusColor } from './ThreadItem.js'

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
    case 'ChatEntry': {
      return (
        <Box borderStyle="round" borderColor="blue" flexShrink={0}>
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
    }

    case 'EmailEntry': {
      return (
        <Box borderStyle="round" borderColor="green" flexShrink={0}>
          <Box flexDirection="column" width="100%">
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
                <Text>{entry.textContent}</Text>
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
    }

    case 'NoteEntry': {
      return (
        <Box borderStyle="round" borderColor="yellow" flexShrink={0}>
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
    }

    case 'SlackMessageEntry': {
      return (
        <Box borderStyle="round" borderColor="magenta" width="100%" flexShrink={0}>
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
    }

    case 'SlackReplyEntry': {
      return (
        <Box borderStyle="round" borderColor="magenta" flexShrink={0}>
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
    }

    case 'ThreadEventEntry': {
      return (
        <Box borderStyle="round" borderColor="cyan" flexShrink={0}>
          <Box justifyContent="space-between">
            <Text color="cyan">🎯 {entry.title}</Text>
            <Text color="gray">{time}</Text>
          </Box>
        </Box>
      )
    }

    case 'CustomerEventEntry': {
      return (
        <Box borderStyle="round" borderColor="blue" flexShrink={0}>
          <Box justifyContent="space-between" width="100%">
            <Text color="blue">👤 {entry.title}</Text>
            <Text color="gray">{time}</Text>
          </Box>
        </Box>
      )
    }
    case 'CustomEntry': {
      return (
        <Box borderStyle="round" borderColor="white" flexShrink={0}>
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
    }
    case 'ThreadAssignmentTransitionedEntry': {
      const prevAssignee = entry.previousAssignee?.fullName || 'Unassigned'
      const nextAssignee = entry.nextAssignee?.fullName || 'Unassigned'
      return (
        <Box borderStyle="round" borderColor="orange" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="orange">👤 Assignment Changed</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">
                From: {prevAssignee} → To: {nextAssignee}
              </Text>
            </Box>
          </Box>
        </Box>
      )
    }

    case 'ThreadAdditionalAssigneesTransitionedEntry': {
      const prevAssignees = entry.previousAssignees?.map((a) => a.fullName).join(', ') || 'None'
      const nextAssignees = entry.nextAssignees?.map((a) => a.fullName).join(', ') || 'None'
      return (
        <Box borderStyle="round" borderColor="orange" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="orange">👥 Additional Assignees Changed</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">From: {prevAssignees}</Text>
            </Box>
            <Box>
              <Text color="gray">To: {nextAssignees}</Text>
            </Box>
          </Box>
        </Box>
      )
    }

    case 'ThreadStatusTransitionedEntry': {
      return (
        <Divider
          title={
            <Box gap={1}>
              <Text>Status changed to</Text>
              <Text color={getStatusColor(entry.nextStatus)}>{entry.nextStatus}</Text>
              <Text>({actorName})</Text>
            </Box>
          }
        />
      )
    }

    case 'ThreadPriorityChangedEntry': {
      const getPriorityLabel = (priority: number) => {
        const labels = { 0: 'Urgent', 1: 'High', 2: 'Normal', 3: 'Low' }
        return labels[priority] || `Priority ${priority}`
      }
      return (
        <Divider
          title={
            <Box gap={1}>
              <Text>Priority changed</Text>
              <Text color={getPriorityColor(entry.previousPriority)}>
                {getPriorityLabel(entry.previousPriority)}
              </Text>
              <Text>→</Text>
              <Text color={getPriorityColor(entry.nextPriority)}>
                {getPriorityLabel(entry.nextPriority)}
              </Text>
              <Text>({actorName})</Text>
            </Box>
          }
        />
      )
    }

    case 'ThreadLabelsChangedEntry': {
      const prevLabels = entry.previousLabels?.map((l) => l.labelType.name).join(', ') || 'None'
      const nextLabels = entry.nextLabels?.map((l) => l.labelType.name).join(', ') || 'None'
      return (
        <Box borderStyle="round" borderColor="cyan" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="cyan">🏷 Labels Changed</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">From: {prevLabels}</Text>
            </Box>
            <Box>
              <Text color="gray">To: {nextLabels}</Text>
            </Box>
          </Box>
        </Box>
      )
    }

    case 'LinearIssueThreadLinkStateTransitionedEntry': {
      return (
        <Box borderStyle="round" borderColor="magenta" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="magenta">🔗 Linear Issue Link Changed</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">Issue ID: {entry.linearIssueId}</Text>
            </Box>
            <Box>
              <Text color="gray">
                State: {entry.previousLinearStateId} → {entry.nextLinearStateId}
              </Text>
            </Box>
          </Box>
        </Box>
      )
    }

    case 'ServiceLevelAgreementStatusTransitionedEntry': {
      return (
        <Box borderStyle="round" borderColor="green" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="green">⏰ SLA Status Changed</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">
                {entry.previousSLAStatus} → {entry.nextSLAStatus}
              </Text>
            </Box>
          </Box>
        </Box>
      )
    }

    case 'ThreadDiscussionEntry': {
      return (
        <Box borderStyle="round" borderColor="blue" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="blue">💬 Discussion Started</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">Channel: #{entry.slackChannelName}</Text>
            </Box>
            {entry.slackMessageLink && (
              <Box>
                <Text color="blue">🔗 View in Slack</Text>
              </Box>
            )}
          </Box>
        </Box>
      )
    }

    case 'ThreadDiscussionResolvedEntry': {
      return (
        <Box borderStyle="round" borderColor="green" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="green">✅ Discussion Resolved</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">Channel: #{entry.slackChannelName}</Text>
            </Box>
            <Box>
              <Text color="gray">Resolved: {formatDate(entry.resolvedAt)}</Text>
            </Box>
          </Box>
        </Box>
      )
    }

    case 'MSTeamsMessageEntry': {
      return (
        <Box borderStyle="round" borderColor="blue" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="blue">💬 Teams Message from {actorName}</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text>{entry.text || entry.markdownContent || '(no content)'}</Text>
            </Box>
            {entry.attachments && entry.attachments.length > 0 && (
              <Box marginTop={1}>
                <Text color="cyan">📎 {entry.attachments.length} attachment(s)</Text>
              </Box>
            )}
          </Box>
        </Box>
      )
    }

    case 'ThreadLinkUpdatedEntry': {
      const linkTitle = entry.threadLink?.title || entry.threadLink?.url || 'Link'
      const prevLinkTitle =
        entry.previousThreadLink?.title || entry.previousThreadLink?.url || 'Previous Link'
      return (
        <Box borderStyle="round" borderColor="cyan" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="cyan">🔗 Thread Link Updated</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text color="gray">From: {prevLinkTitle}</Text>
            </Box>
            <Box>
              <Text color="gray">To: {linkTitle}</Text>
            </Box>
            {entry.threadLink?.status && (
              <Box>
                <Text color="gray">Status: {entry.threadLink.status}</Text>
              </Box>
            )}
          </Box>
        </Box>
      )
    }

    case 'DiscordMessageEntry': {
      return (
        <Box borderStyle="round" borderColor="magenta" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="magenta">💬 Discord Message from {actorName}</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text>{entry.markdownContent ?? '(no content)'}</Text>
            </Box>
            {entry.attachments && entry.attachments.length > 0 && (
              <Box marginTop={1}>
                <Text color="cyan">📎 {entry.attachments.length} attachment(s)</Text>
              </Box>
            )}
          </Box>
        </Box>
      )
    }

    case 'HelpCenterAiConversationMessageEntry': {
      return (
        <Box borderStyle="round" borderColor="green" flexShrink={0}>
          <Box flexDirection="column" width="100%">
            <Box justifyContent="space-between" width="100%">
              <Text color="green">🤖 AI Conversation Message</Text>
              <Text color="gray">{time}</Text>
            </Box>
            <Box marginTop={1}>
              <Text>{entry.messageMarkdown || '(no content)'}</Text>
            </Box>
          </Box>
        </Box>
      )
    }

    default: {
      return (
        <Box padding={1} flexShrink={0}>
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
}
