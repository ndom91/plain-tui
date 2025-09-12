import { Box, Text } from 'ink'
import { useStdoutDimensions } from '../lib/useStdoutDimensions.js'
import { FullScreen } from './FullScreen.js'

interface ScrollableListProps {
  children: React.ReactNode[]
  selectedIndex: number
  itemHeight?: number
}

export function ScrollableList({ children, selectedIndex, itemHeight = 1 }: ScrollableListProps) {
  const [_columns, rows] = useStdoutDimensions()

  // Account for header (2 rows) and footer (1 row) space used by Layout component
  const availableRows = Math.max(1, rows)
  const maxVisibleItems = Math.floor(availableRows / itemHeight) - 6

  let startIndex = 0
  if (children.length > maxVisibleItems) {
    startIndex = Math.max(0, selectedIndex - Math.floor(maxVisibleItems / 2))
    startIndex = Math.min(startIndex, children.length - maxVisibleItems)
  }

  const visibleItems = children.slice(startIndex, startIndex + maxVisibleItems)
  const showScrollIndicators = children.length > maxVisibleItems

  return (
    <FullScreen>
      {showScrollIndicators && startIndex > 0 && (
        <Box justifyContent="flex-start">
          <Box paddingX={2} height={3}>
            <Text dimColor color="gray">
              ↑ {startIndex} more
            </Text>
          </Box>
        </Box>
      )}

      <Box flexDirection="column" flexGrow={1} gap={1}>
        {visibleItems}
      </Box>

      {showScrollIndicators && startIndex + maxVisibleItems < children.length && (
        <Box justifyContent="flex-start">
          <Box paddingX={2} height={3}>
            <Text dimColor color="gray">
              ↓ {children.length - startIndex - maxVisibleItems} more
            </Text>
          </Box>
        </Box>
      )}
    </FullScreen>
  )
}
