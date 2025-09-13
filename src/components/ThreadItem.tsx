import { Box, Text } from 'ink'

interface ThreadItemProps {
  thread: any
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

  const getPriorityIcon = (priority: number) => {
    const icons = ['⚪', '🟡', '🟠', '🔴', '🚨']
    return icons[priority] || '⚪'
  }

  return (
    <Box
      borderStyle={isSelected ? 'round' : undefined}
      borderColor={isSelected ? 'cyan' : undefined}
    >
      <Box flexDirection="column" width="100%">
        <Box justifyContent="space-between">
          <Text color={isSelected ? 'cyan' : 'white'} bold>
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
  )
}