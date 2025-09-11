import React, { useState, useEffect } from 'react'
import { Box, Text, useInput } from 'ink'
import type { PlainClient } from '../client.js'
import type { View } from './App.js'

interface CustomersViewProps {
  client: PlainClient
  workspace: any
  onNavigate: (view: View) => void
}

interface Customer {
  id: string
  fullName: string
  shortName?: string
  email: {
    email: string
    isVerified: boolean
  }
  avatarUrl?: string
  company?: {
    id: string
    name: string
  }
  status: string
  createdAt: string
  updatedAt: string
}

export function CustomersView({ client, workspace, onNavigate }: CustomersViewProps) {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const response = await client.getCustomers({ first: 50 })
        setCustomers(response.customers.edges.map((edge: any) => edge.node))
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load customers')
        setLoading(false)
      }
    }

    loadCustomers()
  }, [client])

  useInput((input, key) => {
    if (input === 'q') {
      onNavigate('home')
    } else if (key.upArrow && customers.length > 0) {
      setSelectedIndex((prev) => Math.max(0, prev - 1))
    } else if (key.downArrow && customers.length > 0) {
      setSelectedIndex((prev) => Math.min(customers.length - 1, prev + 1))
    }
  })

  if (loading) {
    return (
      <Box padding={1}>
        <Text>Loading customers...</Text>
      </Box>
    )
  }

  if (error) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">❌ Error: {error}</Text>
        <Text color="gray">Press 'q' to go back</Text>
      </Box>
    )
  }

  return (
    <Box flexDirection="column" padding={1}>
      {/* Header */}
      <Box marginBottom={1} borderStyle="round" borderColor="green" padding={1}>
        <Box justifyContent="space-between">
          <Text color="green" bold>
            👥 Customers ({customers.length})
          </Text>
          <Text color="gray">[Q] Back</Text>
        </Box>
      </Box>

      {/* Customer List */}
      <Box flexDirection="column">
        {customers.length === 0 ? (
          <Box padding={2}>
            <Text color="gray">No customers found</Text>
          </Box>
        ) : (
          customers.map((customer, index) => (
            <Box
              key={customer.id}
              borderStyle={index === selectedIndex ? 'round' : undefined}
              borderColor={index === selectedIndex ? 'green' : undefined}
              padding={index === selectedIndex ? 1 : 0}
              marginBottom={1}
            >
              <Box flexDirection="column" width="100%">
                <Box justifyContent="space-between">
                  <Text color={index === selectedIndex ? 'green' : 'white'} bold>
                    {index === selectedIndex ? '► ' : '  '}
                    {customer.fullName}
                    {customer.shortName && ` (${customer.shortName})`}
                  </Text>
                  <Text color="gray">
                    {customer.status}
                    {customer.email.isVerified ? ' ✅' : ' ❌'}
                  </Text>
                </Box>

                <Box marginLeft={2}>
                  <Text color="gray">
                    📧 {customer.email.email}
                    {customer.company && ` • 🏢 ${customer.company.name}`}
                  </Text>
                </Box>

                <Box marginLeft={2}>
                  <Text color="gray">
                    🕐 Created: {new Date(customer.createdAt).toLocaleDateString()}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>

      {/* Help */}
      <Box marginTop={1} borderStyle="round" borderColor="gray" padding={1}>
        <Text color="green">↑/↓: Navigate • Q: Back</Text>
      </Box>
    </Box>
  )
}
