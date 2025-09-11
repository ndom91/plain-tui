import React from 'react'
import { Box, Text } from 'ink'
import useStdoutDimensions from 'ink-use-stdout-dimensions'

interface LayoutProps {
  title: string
  subtitle?: string
  statusText?: string
  helpText?: string
  children: React.ReactNode
}

export function Layout({ title, subtitle, statusText, helpText, children }: LayoutProps) {
  const [width, height] = useStdoutDimensions()

  return (
    <Box flexDirection="column" width={width} height={height}>
      {/* Header */}
      <Box
        borderStyle="round"
        borderColor="cyan"
        paddingX={2}
        paddingY={0}
        width={width}
        justifyContent="space-between"
      >
        <Box flexDirection="column">
          <Text color="cyan" bold>
            ✨ {title}
          </Text>
          {subtitle && (
            <Text color="gray" dimColor>
              {subtitle}
            </Text>
          )}
        </Box>
        {statusText && (
          <Box alignSelf="center">
            <Text color="yellow">{statusText}</Text>
          </Box>
        )}
      </Box>

      {/* Main content area */}
      <Box
        flexDirection="column" 
        flexGrow={1}
        width={width}
        height={height - 4} // Account for header and footer
        overflow="hidden"
      >
        {children}
      </Box>

      {/* Footer/Status bar */}
      <Box
        borderStyle="round"
        borderColor="gray"
        paddingX={2}
        paddingY={0}
        width={width}
        justifyContent="space-between"
      >
        <Box>
          <Text color="green" bold>
            Plain TUI
          </Text>
        </Box>
        <Box>
          {helpText && (
            <Text color="gray" dimColor>
              {helpText}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  )
}