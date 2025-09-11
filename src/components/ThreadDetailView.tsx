import React, { useState, useEffect } from 'react'
import { Box, Text, useInput } from 'ink'
import type { PlainClient } from '../client.js'
import type { View } from './App.js'

interface ThreadDetailViewProps {
  client: PlainClient
  workspace: any
  threadId: string
  onNavigate: (view: View) => void
}

interface ThreadDetail {
  id: string
  title: string
  status: string
  priority: number
  statusChangedAt: string
  createdAt: string
  updatedAt: string
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
      avatarUrl?: string
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
  // timeline: {
  //   edges: Array<{
  //     node: {
  //       id: string
  //       timestamp: string
  //       actor: any
  //       entry: any
  //     }
  //   }>
  // }
}

export function ThreadDetailView({
  client,
  workspace,
  threadId,
  onNavigate,
}: ThreadDetailViewProps) {
  const [thread, setThread] = useState<ThreadDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const loadThreadDetail = async () => {
      try {
        const response = await client.getThreadDetails(threadId)
        setThread(response.thread)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load thread details')
        setLoading(false)
      }
    }

    loadThreadDetail()
  }, [client, threadId])

  useInput((input, key) => {
    if (input === 'q') {
      onNavigate('threads')
    }
  })

  if (loading) {
    return (
      <Box padding={1}>
        <Text>Loading thread details...</Text>
      </Box>
    )
  }

  if (error || !thread) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">❌ Error: {error || 'Thread not found'}</Text>
        <Text color="gray">Press 'q' to go back</Text>
      </Box>
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString() +
      ' ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    )
  }

  const renderTimelineEntry = (entry: any, actor: any, timestamp: string) => {
    const actorName =
      actor.__typename === 'UserActor'
        ? actor.user.publicName
        : actor.__typename === 'CustomerActor'
          ? actor.customer.fullName
          : 'System'

    const time = formatDate(timestamp)

    switch (entry.__typename) {
      case 'ChatEntry':
        return (
          <Box
            key={`${timestamp}-chat`}
            marginBottom={1}
            borderStyle="round"
            borderColor="blue"
            padding={1}
          >
            <Box flexDirection="column">
              <Box justifyContent="space-between">
                <Text color="blue">💬 Chat from {actorName}</Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Box marginTop={1}>
                <Text>{entry.text}</Text>
              </Box>
              {entry.customerReadAt && (
                <Box marginTop={1}>
                  <Text color="green">
                    ✓ Read by customer at {formatDate(entry.customerReadAt)}
                  </Text>
                </Box>
              )}
            </Box>
          </Box>
        )

      case 'EmailEntry':
        return (
          <Box
            key={`${timestamp}-email`}
            marginBottom={1}
            borderStyle="round"
            borderColor="green"
            padding={1}
          >
            <Box flexDirection="column">
              <Box justifyContent="space-between">
                <Text color="green">📧 Email: {entry.subject}</Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Text color="gray">
                From: {entry.from.name} ({entry.from.email}) → To: {entry.to.name} ({entry.to.email}
                )
              </Text>
              {entry.textContent && (
                <Box marginTop={1}>
                  <Text>{entry.textContent.substring(0, 200)}...</Text>
                </Box>
              )}
            </Box>
          </Box>
        )

      case 'NoteEntry':
        return (
          <Box
            key={`${timestamp}-note`}
            marginBottom={1}
            borderStyle="round"
            borderColor="yellow"
            padding={1}
          >
            <Box flexDirection="column">
              <Box justifyContent="space-between">
                <Text color="yellow">📝 Note from {actorName}</Text>
                <Text color="gray">{time}</Text>
              </Box>
              <Box marginTop={1}>
                <Text>{entry.text}</Text>
              </Box>
            </Box>
          </Box>
        )

      default:
        return (
          <Box
            key={`${timestamp}-other`}
            marginBottom={1}
            borderStyle="round"
            borderColor="gray"
            padding={1}
          >
            <Box justifyContent="space-between">
              <Text color="gray">
                🔄 {entry.__typename} by {actorName}
              </Text>
              <Text color="gray">{time}</Text>
            </Box>
          </Box>
        )
    }
  }

  return (
    <Box flexDirection="column" padding={1}>
      {/* Header */}
      <Box marginBottom={1} borderStyle="round" borderColor="cyan" padding={1}>
        <Box flexDirection="column">
          <Box justifyContent="space-between">
            <Text color="cyan" bold>
              🎫 {thread.title || 'Untitled Thread'}
            </Text>
            <Text color="gray">[Q] Back to Threads</Text>
          </Box>

          <Box marginTop={1}>
            <Text color={getStatusColor(thread.status)}>Status: {thread.status}</Text>
            <Text>
              {' '}
              • Priority: {getPriorityIcon(thread.priority)} ({thread.priority})
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Thread Info */}
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
      {/* <Box flexDirection="column" marginBottom={1}> */}
      {/*   <Text color="yellow" bold marginBottom={1}> */}
      {/*     📜 Timeline ({thread.timeline.edges.length} entries) */}
      {/*   </Text> */}
      {/**/}
      {/*   <Box flexDirection="column" height={20} overflow="hidden"> */}
      {/*     {thread.timeline.edges.length === 0 ? ( */}
      {/*       <Text color="gray">No timeline entries found</Text> */}
      {/*     ) : ( */}
      {/*       thread.timeline.edges */}
      {/*         .slice() */}
      {/*         .reverse() // Show most recent first */}
      {/*         .map(({ node }) => renderTimelineEntry(node.entry, node.actor, node.timestamp)) */}
      {/*     )} */}
      {/*   </Box> */}
      {/* </Box> */}

      {/* Help */}
      <Box borderStyle="round" borderColor="gray" padding={1}>
        <Text color="green">Q: Back to threads list</Text>
      </Box>
    </Box>
  )
}
