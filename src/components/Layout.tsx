import { Box, Text } from 'ink'
import type { ReactNode } from 'react'
import { FullScreen } from './FullScreen.js'
import { Badge } from '@inkjs/ui'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'

interface LayoutProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  statusText?: string
  helpText?: string | ReactNode
  searchInput?: ReactNode
  footer?: boolean
  children: ReactNode
}

export function Layout({
  title,
  subtitle,
  statusText,
  helpText,
  searchInput,
  footer = true,
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
        flexShrink={0}
      >
        <Box flexDirection="column">
          <Box>
            {title && typeof title === 'string' ? (
              <Text color="cyan" bold>
                {title}
              </Text>
            ) : (
              title
            )}
          </Box>
          {subtitle && (
            <Box>
              {subtitle && typeof subtitle === 'string' ? (
                <Text color="gray" dimColor>
                  {subtitle}
                </Text>
              ) : (
                subtitle
              )}
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

      {footer && (
        <Box
          borderStyle={'round'}
          paddingX={2}
          paddingY={0}
          justifyContent="space-between"
          flexShrink={0}
        >
          <Box width={27} marginY={-2}>
            <Gradient name="cristal">
              <BigText text="Plain" align="left" font="tiny" lineHeight={1} />
            </Gradient>
          </Box>
          <Box alignItems="center">
            {helpText && typeof helpText === 'string' ? (
              <Text color="gray" dimColor>
                {helpText}
              </Text>
            ) : (
              helpText
            )}
          </Box>
        </Box>
      )}
    </FullScreen>
  )
}
