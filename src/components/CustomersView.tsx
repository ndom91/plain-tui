import React, { useState, useEffect } from 'react'
import { Box, Text, useInput } from 'ink'
import type { PlainClient } from '../client.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { ScrollableList } from './ScrollableList.js'

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

  const customerItems = customers.map((customer, index) => (
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
          <Text color="gray">🕐 Created: {new Date(customer.createdAt).toLocaleDateString()}</Text>
        </Box>
      </Box>
    </Box>
  ))

  return (
    <Layout
      title="Customers"
      subtitle={`${customers.length} customers found`}
      helpText="↑/↓: Navigate • Q: Back"
    >
      {customers.length === 0 ? (
        <Box flexGrow={1} justifyContent="center" alignItems="center">
          <Text color="gray">No customers found</Text>
        </Box>
      ) : (
        <ScrollableList selectedIndex={selectedIndex} itemHeight={4}>
          {customerItems}
        </ScrollableList>
      )}
    </Layout>
  )
}
