import { Box, Text } from 'ink'
import { useEffect, useState } from 'react'
import { useStdoutDimensions } from '../lib/useStdoutDimensions.js'
import { FullScreen } from './FullScreen.js'

interface ScrollableListProps {
  children: React.ReactNode[]
  selectedIndex: number
}

export function ScrollableList({ children, selectedIndex }: ScrollableListProps) {
  const [_columns, rows] = useStdoutDimensions()
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: children.length })

  useEffect(() => {
    if (children.length > 0) {
      // Estimate how many items we can show based on available screen space
      // Account for Layout header/footer and scroll indicators
      const availableRows = Math.max(1, rows - 6)

      // Use a reasonable estimate for average item height
      // Most thread items are around 6-8 lines, timeline entries 3-5 lines
      const estimatedItemHeight = 4
      const maxVisibleItems = Math.floor(availableRows / estimatedItemHeight)

      // Only scroll if we actually have more items than we can fit
      if (children.length > maxVisibleItems && maxVisibleItems > 0) {
        // Keep selected item visible, but align to top when possible
        let startIndex = 0

        // If selected item is beyond visible range, scroll to show it at the top
        if (selectedIndex >= maxVisibleItems) {
          startIndex = selectedIndex - maxVisibleItems + 1
        }

        // Ensure we don't scroll past the end
        startIndex = Math.min(startIndex, children.length - maxVisibleItems)

        const endIndex = Math.min(startIndex + maxVisibleItems, children.length)
        setVisibleRange({ start: startIndex, end: endIndex })
      } else {
        // Show all items if they fit
        setVisibleRange({ start: 0, end: children.length })
      }
    }
  }, [rows, children.length, selectedIndex])

  const visibleItems = children.slice(visibleRange.start, visibleRange.end)
  const showScrollIndicators = children.length > visibleItems.length

  return (
    <FullScreen>
      {showScrollIndicators && visibleRange.start > 0 && (
        <Box justifyContent="flex-start">
          <Box paddingX={2} height={1}>
            <Text dimColor color="gray">
              ↑ {visibleRange.start} more
            </Text>
          </Box>
        </Box>
      )}

      <Box flexDirection="column" flexGrow={1}>
        {visibleItems}
      </Box>

      {showScrollIndicators && visibleRange.end < children.length && (
        <Box justifyContent="flex-start">
          <Box paddingX={2} height={1}>
            <Text dimColor color="gray">
              ↓ {children.length - visibleRange.end} more
            </Text>
          </Box>
        </Box>
      )}
    </FullScreen>
  )
}
