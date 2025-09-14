import { Box, Text, useInput } from 'ink'
import { useState } from 'react'
import type { PlainClient } from '../client.js'
import { useRefreshQueries, useTenants } from '../hooks/usePlainQueries.js'
import type { Workspace } from '../types/plain.js'
import type { View } from './App.js'
import { Layout } from './Layout.js'
import { LoadingSpinner } from './LoadingSpinner.js'

interface TenantsViewProps {
  client: PlainClient
  workspace: Workspace
  onNavigate: (view: View) => void
}

export function TenantsView({ client, onNavigate }: TenantsViewProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { refreshTenants } = useRefreshQueries()
  const { data: tenantsData, isLoading, error, isFetching } = useTenants(client, { first: 50 })
  const tenants = tenantsData?.tenants.edges.map((edge: any) => edge.node) || []

  if (selectedIndex >= tenants.length && tenants.length > 0) {
    setSelectedIndex(0)
  }

  useInput((input, key) => {
    if (input === 'q' || key.escape) {
      onNavigate('home')
    } else if (input === 'r') {
      refreshTenants({ first: 50 })
    } else if ((key.upArrow || input === 'k') && tenants.length > 0) {
      setSelectedIndex((prev) => Math.max(0, prev - 1))
    } else if ((key.downArrow || input === 'j') && tenants.length > 0) {
      setSelectedIndex((prev) => Math.min(tenants.length - 1, prev + 1))
    }
  })

  if (isLoading) {
    return (
      <Box margin={1}>
        <LoadingSpinner text="Loading tenants..." />
      </Box>
    )
  }

  if (error) {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="red">
          ❌ Error: {error instanceof Error ? error.message : 'Failed to load tenants'}
        </Text>
        <Text color="gray">Press 'r' to retry or 'q' to go back</Text>
      </Box>
    )
  }

  const helpText =
    isFetching && !isLoading ? (
      <Box>
        <Text color="gray" dimColor>
          ↑/↓/j/k: Navigate • Enter: View • F: Filters •{' '}
        </Text>
        <LoadingSpinner text="" />
        <Text color="gray" dimColor>
          {' '}
          Refreshing • Q/Esc: Back
        </Text>
      </Box>
    ) : (
      '↑/↓/j/k: Navigate • Enter: View • F: Filters • R: Refresh • Q/Esc: Back'
    )

  return (
    <Layout title="Tenants" subtitle={``} helpText={helpText}>
      <Box flexDirection="column" padding={1}>
        <Box flexDirection="column">
          {tenants.length === 0 ? (
            <Box padding={2}>
              <Text color="gray">No tenants found</Text>
            </Box>
          ) : (
            tenants.map((tenant, index) => (
              <Box
                key={tenant.id}
                borderStyle={index === selectedIndex ? 'round' : undefined}
                borderColor={index === selectedIndex ? 'magenta' : undefined}
                padding={index === selectedIndex ? 1 : 0}
                marginBottom={1}
              >
                <Box flexDirection="column" width="100%">
                  <Box justifyContent="space-between">
                    <Text color={index === selectedIndex ? 'magenta' : 'white'} bold>
                      {tenant.name}
                    </Text>
                    <Text color="gray">ID: {tenant.identifier}</Text>
                  </Box>

                  <Box marginLeft={2}>
                    <Text color="gray">
                      🕐 Created: {new Date(tenant.createdAt).toLocaleDateString()}
                      {' • '}Updated: {new Date(tenant.updatedAt).toLocaleDateString()}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Layout>
  )
}
