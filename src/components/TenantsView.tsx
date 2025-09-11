import React, { useState, useEffect } from 'react'
import { Box, Text, useInput } from 'ink'
import type { PlainClient } from '../client.js'
import type { View } from './App.js'

interface TenantsViewProps {
  client: PlainClient
  workspace: any
  onNavigate: (view: View) => void
}

interface Tenant {
  id: string
  name: string
  identifier: string
  createdAt: string
  updatedAt: string
}

export function TenantsView({ client, workspace, onNavigate }: TenantsViewProps) {
  const [tenants, setTenants] = useState<Tenant[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const loadTenants = async () => {
      try {
        const response = await client.getTenants({ first: 50 })
        setTenants(response.tenants.edges.map((edge: any) => edge.node))
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tenants')
        setLoading(false)
      }
    }

    loadTenants()
  }, [client])

  useInput((input, key) => {
    if (input === 'q') {
      onNavigate('home')
    } else if (key.upArrow && tenants.length > 0) {
      setSelectedIndex((prev) => Math.max(0, prev - 1))
    } else if (key.downArrow && tenants.length > 0) {
      setSelectedIndex((prev) => Math.min(tenants.length - 1, prev + 1))
    }
  })

  if (loading) {
    return (
      <Box padding={1}>
        <Text>Loading tenants...</Text>
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
      <Box marginBottom={1} borderStyle="round" borderColor="magenta" padding={1}>
        <Box justifyContent="space-between">
          <Text color="magenta" bold>
            🏢 Tenants ({tenants.length})
          </Text>
          <Text color="gray">[Q] Back</Text>
        </Box>
      </Box>

      {/* Tenant List */}
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
                    {index === selectedIndex ? '► ' : '  '}
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

      {/* Help */}
      <Box marginTop={1} borderStyle="round" borderColor="gray" padding={1}>
        <Text color="green">↑/↓: Navigate • Q: Back</Text>
      </Box>
    </Box>
  )
}
