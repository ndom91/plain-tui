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
  const [needsVirtualization, setNeedsVirtualization] = useState(false)

  useEffect(() => {
    if (children.length === 0) return

    // Account for Layout header/footer and scroll indicators
    const availableRows = Math.max(1, rows - 6)

    // Initially render all items to measure actual height
    setVisibleRange({ start: 0, end: children.length })
    setNeedsVirtualization(false)

    // Use a timeout to allow rendering to complete before measuring
    const measureTimeout = setTimeout(() => {
      // Check if content would exceed available space
      // Since we can't directly measure DOM height in Ink, we'll use a heuristic:
      // Count actual rendered lines from all children
      let totalEstimatedLines = 0

      // This is a rough estimation - in a real implementation you'd want to
      // measure the actual rendered height, but Ink doesn't provide direct DOM access
      children.forEach(() => {
        totalEstimatedLines += 6 // Conservative estimate for varied content
      })

      if (totalEstimatedLines > availableRows) {
        setNeedsVirtualization(true)

        // Calculate how many items we can fit based on average height
        const averageItemHeight = totalEstimatedLines / children.length
        const maxVisibleItems = Math.floor(availableRows / averageItemHeight)

        if (maxVisibleItems > 0) {
          // Keep selected item visible
          let startIndex = Math.max(0, selectedIndex - Math.floor(maxVisibleItems / 2))
          startIndex = Math.min(startIndex, children.length - maxVisibleItems)

          const endIndex = Math.min(startIndex + maxVisibleItems, children.length)
          setVisibleRange({ start: startIndex, end: endIndex })
        }
      }
    }, 0)

    return () => clearTimeout(measureTimeout)
  }, [rows, children, selectedIndex])

  const visibleItems = children.slice(visibleRange.start, visibleRange.end)
  const showScrollIndicators = needsVirtualization && children.length > visibleItems.length

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

      <Box flexDirection="column" flexGrow={1} gap={1}>
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
