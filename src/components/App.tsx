import { Box, Text, useApp, useInput } from 'ink'
import type React from 'react'
import { useState } from 'react'
import { PlainClient } from '../client.js'
import { useRefreshQueries, useWorkspace } from '../hooks/usePlainQueries.js'
import { CustomersView } from './CustomersView.js'
import { HomeScreen } from './HomeScreen.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import { TenantsView } from './TenantsView.js'
import { ThreadDetailView } from './ThreadDetailView.js'
import { ThreadsView } from './ThreadsView.js'

export type View = 'home' | 'threads' | 'customers' | 'tenants' | 'thread-detail'

interface AppState {
  view: View
  selectedThreadId?: string
  client?: PlainClient
}

export function App(): React.ReactNode {
  const { exit } = useApp()
  const [state, setState] = useState<AppState>({ view: 'home' })
  const { refreshAll } = useRefreshQueries()

  const client = new PlainClient()
  const { data: workspaceData, isLoading, error } = useWorkspace(client)

  if (!state.client) {
    setState((prev) => ({ ...prev, client }))
  }

  // Global keyboard shortcuts
  useInput((input, key) => {
    if (key.ctrl && input === 'c') {
      exit()
      process.exit(0)
    } else if (input === 'q') {
      if (state.view === 'home') {
        exit()
        process.exit(0)
      } else {
        setState((prev) => ({ ...prev, view: 'home' }))
      }
    } else if (input === 'r') {
      refreshAll()
    }
  })

  const navigateToView = (view: View, threadId?: string) => {
    setState((prev) => ({
      ...prev,
      view,
      selectedThreadId: view === 'thread-detail' ? threadId : undefined,
    }))
  }

  if (error) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">
          ❌ Error: {error instanceof Error ? error.message : 'Unknown error occurred'}
        </Text>
        <Text color="gray">
          Please ensure you have a valid configuration file at ~/.config/plain-tui.json
        </Text>
        <Text color="gray">
          Example: {JSON.stringify({ apiKey: 'your-api-key-here' }, null, 2)}
        </Text>
        <Text color="gray">Press 'r' to retry</Text>
      </Box>
    )
  }

  if (isLoading || !workspaceData) {
    return <LoadingSpinner text="Connecting to Plain..." />
  }

  const commonProps = {
    client: state.client,
    workspace: workspaceData.myWorkspace,
    onNavigate: navigateToView,
  }

  switch (state.view) {
    case 'home':
      return <HomeScreen {...commonProps} />
    case 'threads':
      return <ThreadsView {...commonProps} />
    case 'customers':
      return <CustomersView {...commonProps} />
    case 'tenants':
      return <TenantsView {...commonProps} />
    case 'thread-detail':
      return <ThreadDetailView {...commonProps} threadId={state.selectedThreadId} />
    default:
      return <HomeScreen {...commonProps} />
  }
}
