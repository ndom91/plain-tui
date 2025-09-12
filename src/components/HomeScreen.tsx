import { Box, Text, useInput } from 'ink'
import { useState } from 'react'
import type { PlainClient } from '../client.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'

interface HomeScreenProps {
  client: PlainClient
  workspace: Workspace
  onNavigate: (view: View) => void
}

const menuItems = [
  {
    key: 't',
    label: 'Threads',
    view: 'threads' as View,
    description: 'View and manage support threads',
  },
  {
    key: 'c',
    label: 'Customers',
    view: 'customers' as View,
    description: 'Browse customer information',
  },
  {
    key: 'n',
    label: 'Tenants',
    view: 'tenants' as View,
    description: 'Manage tenant organizations',
  },
]

export function HomeScreen({ workspace, onNavigate }: HomeScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useInput((input, key) => {
    if (key.upArrow || input === 'k') {
      setSelectedIndex((prev) => Math.max(0, prev - 1))
    } else if (key.downArrow || input === 'j') {
      setSelectedIndex((prev) => Math.min(menuItems.length - 1, prev + 1))
    } else if (key.return) {
      onNavigate(menuItems[selectedIndex].view)
    } else {
      const item = menuItems.find((item) => item.key === input.toLowerCase())
      if (item) {
        onNavigate(item.view)
      }
    }
  })

  return (
    <Layout
      title={`Plain (${workspace.name})`}
      helpText="↑/↓/j/k: Navigate • Enter: Select • Letter keys: Quick nav • Q: Quit"
    >
      <Box flexDirection="column" padding={2} flexGrow={1}>
        <Box
          flexDirection="column"
          marginBottom={2}
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box width={60} marginBottom={2}>
            <Text color="yellow" bold>
              Main Menu
            </Text>
          </Box>

          {menuItems.map((item, index) => (
            <Box key={item.key} marginBottom={1} justifyContent="center">
              <Box width={60}>
                <Text
                  color={selectedIndex === index ? 'black' : 'white'}
                  backgroundColor={selectedIndex === index ? 'cyan' : undefined}
                >
                  {' '}
                  [{item.key.toUpperCase()}] {item.label}
                </Text>
                <Text color="gray" backgroundColor={selectedIndex === index ? 'cyan' : undefined}>
                  {' '}
                  - {item.description}{' '}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Help Section */}
        <Box marginTop={2} borderStyle="round" borderColor="gray" padding={1}>
          <Box flexDirection="column">
            <Text color="green" bold>
              ⌨ Keyboard Shortcuts
            </Text>
            <Text color="gray">↑/↓ or j/k: Navigate menu • Enter: Select option</Text>
            <Text color="gray">Letter keys: Quick navigation • Q: Quit • Ctrl+C: Force exit</Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
