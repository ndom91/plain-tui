import { Box, Text } from 'ink'
import type { ReactNode } from 'react'
import { FullScreen } from './FullScreen.js'
import { Badge } from '@inkjs/ui'

interface LayoutProps {
  title: string
  subtitle?: string
  statusText?: string
  helpText?: string | ReactNode
  searchInput?: ReactNode
  children: ReactNode
}

export function Layout({
  title,
  subtitle,
  statusText,
  helpText,
  searchInput,
  children,
}: LayoutProps) {
  return (
    <FullScreen>
      <Box
        borderStyle="round"
        borderColor="cyan"
        marginX={0}
        paddingX={2}
        paddingY={0}
        justifyContent="space-between"
      >
        <Box flexDirection="column">
          <Box>
            <Text color="cyan" bold>
              {title}
            </Text>
          </Box>
          {subtitle && (
            <Box>
              <Text color="gray" dimColor>
                {subtitle}
              </Text>
            </Box>
          )}
          {searchInput && <Box marginTop={1}>{searchInput}</Box>}
        </Box>
        {statusText && (
          <Box alignSelf="center">
            <Badge>{statusText}</Badge>
          </Box>
        )}
      </Box>

      <Box flexDirection="column" borderStyle="round" flexGrow={1} overflow="hidden">
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
