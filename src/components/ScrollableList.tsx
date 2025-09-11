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
  const maxVisibleItems = Math.floor(rows / itemHeight)

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
        <Box justifyContent="center" marginBottom={1}>
          <Box borderStyle="round" borderColor="gray" paddingX={2}>
            <Text color="gray">↑ {startIndex} more items above</Text>
          </Box>
        </Box>
      )}

      <Box flexDirection="column" flexGrow={1}>
        {visibleItems}
      </Box>

      {showScrollIndicators && startIndex + maxVisibleItems < children.length && (
        <Box justifyContent="center" marginTop={1}>
          <Box borderStyle="round" borderColor="gray" paddingX={2}>
            <Text color="gray">
              ↓ {children.length - startIndex - maxVisibleItems} more items below
            </Text>
          </Box>
        </Box>
      )}
    </FullScreen>
  )
}
