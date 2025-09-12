import { Box, Text, useApp, useInput } from 'ink'
import type React from 'react'
import { useEffect, useState } from 'react'
import { PlainClient } from '../client.js'
import type { Workspace } from '../types/plain.js'
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
  workspace?: Workspace
  error?: string
}

export function App(): React.ReactNode {
  const { exit } = useApp()
  const [state, setState] = useState<AppState>({ view: 'home' })

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const client = new PlainClient()
        const workspaceData = await client.getWorkspace()

        setState((prev) => ({
          ...prev,
          client,
          workspace: workspaceData.myWorkspace,
        }))
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: error instanceof Error ? error.message : 'Unknown error occurred',
        }))
      }
    }

    initializeApp()
  }, [])

  useInput((input, key) => {
    // Global keyboard shortcuts
    if (key.ctrl && input === 'c') {
      exit()
      process.exit(0)
    } else if (input === 'q') {
      if (state.view === 'home') {
        exit() // Exit app from home screen
        process.exit(0)
      } else {
        setState((prev) => ({ ...prev, view: 'home' })) // Go back to home from other views
      }
    }
  })

  const navigateToView = (view: View, threadId?: string) => {
    setState((prev) => ({
      ...prev,
      view,
      selectedThreadId: view === 'thread-detail' ? threadId : undefined,
    }))
  }

  if (state.error) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">❌ Error: {state.error}</Text>
        <Text color="gray">
          Please ensure you have a valid configuration file at ~/.config/plain-tui.json
        </Text>
        <Text color="gray">
          Example: {JSON.stringify({ apiKey: 'your-api-key-here' }, null, 2)}
        </Text>
      </Box>
    )
  }

  if (!state.client || !state.workspace) {
    return <LoadingSpinner text="Connecting to Plain..." />
  }

  const commonProps = {
    client: state.client,
    workspace: state.workspace,
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
      return <ThreadDetailView {...commonProps} threadId={state.selectedThreadId!} />
    default:
      return <HomeScreen {...commonProps} />
  }
}
