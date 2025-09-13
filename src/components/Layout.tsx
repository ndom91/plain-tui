import { Box, Text } from 'ink'
import type { ReactNode } from 'react'
import { FullScreen } from './FullScreen.js'

interface LayoutProps {
  title: string
  subtitle?: string
  statusText?: string
  helpText?: string | ReactNode
  children: ReactNode
}

export function Layout({ title, subtitle, statusText, helpText, children }: LayoutProps) {
  return (
    <FullScreen>
      <Box paddingX={2} paddingY={0} justifyContent="space-between">
        <Box flexDirection="column" marginTop={1}>
          <Text color="cyan" bold>
            {title}
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

      <Box flexDirection="column" flexGrow={1} overflow="hidden">
        {children}
      </Box>

      <Box paddingX={2} paddingY={0} justifyContent="space-between">
        <Box>
          <Text color="green" bold>
            Plain TUI
          </Text>
        </Box>
        <Box>
          {helpText && typeof helpText === 'string' ? (
            <Text color="gray" dimColor>
              {helpText}
            </Text>
          ) : (
            helpText
          )}
        </Box>
      </Box>
    </FullScreen>
  )
}
