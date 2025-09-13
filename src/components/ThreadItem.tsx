import { Box, Text } from 'ink'
import { Badge } from '@inkjs/ui'
import type { Thread } from '../types/threads.js'

interface ThreadItemProps {
  thread: Thread
  isSelected: boolean
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

  const getPriorityColor = (priority: number) => {
    const icons = ['red', 'red', 'yellow', 'blue']
    return icons[priority] || 'blue'
  }

  // const getPriorityLabel = (priority: number) => {
  //   const labels: { [key: number]: string } = ['Low', 'Normal', 'High', 'Urgent']
  //   return labels[priority]
  // }
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
  )
}
