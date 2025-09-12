import { Box, Text, useInput } from 'ink'
import { useState } from 'react'
import type { PlainClient } from '../client.js'
import type { SimpleCustomer as Customer } from '../types/compatibility.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { useCustomers, useRefreshQueries } from '../hooks/usePlainQueries.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'
import { ScrollableList } from './ScrollableList.js'

interface CustomersViewProps {
  client: PlainClient
  workspace: Workspace
  onNavigate: (view: View) => void
}

export function CustomersView({ client, onNavigate }: CustomersViewProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { refreshCustomers } = useRefreshQueries()

  // Use TanStack Query for customers data
  const { data: customersData, isLoading, error, isFetching } = useCustomers(client, { first: 50 })
  const customers = customersData?.customers.edges.map((edge: any) => edge.node) || []

  // Reset selectedIndex when customers change
  if (selectedIndex >= customers.length && customers.length > 0) {
    setSelectedIndex(0)
  }

  useInput((input, key) => {
    if (input === 'q' || key.escape) {
      onNavigate('home')
    } else if (input === 'r') {
      refreshCustomers({ first: 50 })
    } else if ((key.upArrow || input === 'k') && customers.length > 0) {
      setSelectedIndex((prev) => Math.max(0, prev - 1))
    } else if ((key.downArrow || input === 'j') && customers.length > 0) {
      setSelectedIndex((prev) => Math.min(customers.length - 1, prev + 1))
    }
  })

  if (isLoading) {
    return (
      <Box margin={1}>
        <LoadingSpinner text="Loading customers..." />
      </Box>
    )
  }

  if (error) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">
          ❌ Error: {error instanceof Error ? error.message : 'Failed to load customers'}
        </Text>
        <Text color="gray">Press 'r' to retry or 'q' to go back</Text>
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

  const helpText =
    isFetching && !isLoading ? (
      <Box>
        <Text color="gray" dimColor>
          ↑/↓/j/k: Navigate • F: Filters •{' '}
        </Text>
        <LoadingSpinner text="" />
        <Text color="gray" dimColor>
          {' '}
          Refreshing • Q: Back
        </Text>
      </Box>
    ) : (
      '↑/↓/j/k: Navigate • F: Filters • R: Refresh • Q: Back'
    )

  return (
    <Layout
      title="Customers"
      subtitle={`Customers: ${customers.length} customers found`}
      helpText={helpText}
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
