import React, { useState } from 'react'
import { Box, Text, useInput } from 'ink'
import type { PlainClient } from '../client.js'
import type { View } from './App.js'

interface HomeScreenProps {
  client: PlainClient
  workspace: any
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

export function HomeScreen({ client, workspace, onNavigate }: HomeScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useInput((input, key) => {
    if (key.upArrow) {
      setSelectedIndex((prev) => Math.max(0, prev - 1))
    } else if (key.downArrow) {
      setSelectedIndex((prev) => Math.min(menuItems.length - 1, prev + 1))
    } else if (key.return) {
      onNavigate(menuItems[selectedIndex].view)
    } else {
      // Handle direct key navigation
      const item = menuItems.find((item) => item.key === input.toLowerCase())
      if (item) {
        onNavigate(item.view)
      }
    }
  })

  return (
    <Box flexDirection="column" padding={1}>
      {/* Header */}
      <Box marginBottom={1} borderStyle="round" borderColor="blue" padding={1}>
        <Box flexDirection="column">
          <Text color="cyan" bold>
            ✨ Plain TUI
          </Text>
          <Text color="gray">
            Connected to {workspace.name}
          </Text>
        </Box>
      </Box>

      {/* Menu */}
      <Box flexDirection="column" marginBottom={1}>
        <Text color="yellow" bold marginBottom={1}>
          📋 Main Menu
        </Text>

        {menuItems.map((item, index) => (
          <Box key={item.key} marginBottom={0}>
            <Text
              color={selectedIndex === index ? 'black' : 'white'}
              backgroundColor={selectedIndex === index ? 'cyan' : undefined}
            >
              {selectedIndex === index ? '► ' : '  '}[{item.key.toUpperCase()}] {item.label}
            </Text>
            <Text color="gray" marginLeft={1}>
              - {item.description}
            </Text>
          </Box>
        ))}
      </Box>

      {/* Help */}
      <Box borderStyle="round" borderColor="gray" padding={1}>
        <Box flexDirection="column">
          <Text color="green" bold>
            ⌨️ Keyboard Shortcuts
          </Text>
          <Text color="gray">↑/↓ : Navigate menu</Text>
          <Text color="gray">Enter: Select option</Text>
          <Text color="gray">Letter keys: Quick navigation</Text>
          <Text color="gray">Q: Go back / Quit</Text>
        </Box>
      </Box>
    </Box>
  )
}
