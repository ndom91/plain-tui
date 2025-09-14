import { Box, Text } from 'ink'
import { Badge } from '@inkjs/ui'
import type { Thread } from '../types/threads.js'

interface ThreadItemProps {
  thread: Thread
  isSelected: boolean
}

export const getStatusColor = (status: string) => {
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

export const getPriorityColor = (priority: number) => {
  const icons = ['red', 'red', 'yellow', 'blue']
  return icons[priority] || 'blue'
}

export function ThreadItem({ thread, isSelected }: ThreadItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString() +
      ' ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    )
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

  return (
    <Box
      borderStyle={isSelected ? 'round' : undefined}
      borderColor={isSelected ? 'cyan' : undefined}
      flexShrink={0}
    >
      <Box flexDirection="column" width="100%">
        <Box justifyContent="space-between">
          <Text color={isSelected ? 'cyan' : 'white'} bold>
            {thread.title || 'Untitled Thread'}
          </Text>
          <Box>
            <Badge color={getStatusColor(thread.status)}>{thread.status} </Badge>
            <Badge color={getPriorityColor(thread.priority)}>
              {getPriorityLabel(thread.priority)}
            </Badge>
          </Box>
        </Box>

        <Box>
          <Text color="gray">
            👤 {thread.customer.fullName} ({thread.customer.email.email})
            {thread.customer.company && ` • 🏢 ${thread.customer.company.name}`}
          </Text>
        </Box>
        {thread.assignedTo && (
          <Box>
            <Text color="gray">👨 Assigned: {thread.assignedTo.fullName ?? 'System'}</Text>
          </Box>
        )}

        {thread.labels.length > 0 && (
          <Box>
            <Text color="gray">
              {`📝`} Labels: {thread.labels.map((label) => label.labelType.name).join(', ')}
            </Text>
          </Box>
        )}
        <Box>
          <Text color="gray">
            🕐 Updated {formatDate(thread.updatedAt as unknown as string)} • Created{' '}
            {formatDate(thread.createdAt as unknown as string)}
          </Text>
        </Box>

        {thread.previewText && (
          <Box>
            <Text color="gray" wrap="truncate">
              💬 {thread.previewText}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}
