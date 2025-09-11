import React from 'react'
import { Box, Text } from 'ink'
import useStdoutDimensions from 'ink-use-stdout-dimensions'

interface ScrollableListProps {
  children: React.ReactNode[]
  selectedIndex: number
  itemHeight?: number
}

export function ScrollableList({ 
  children, 
  selectedIndex, 
  itemHeight = 1 
}: ScrollableListProps) {
  const [width, height] = useStdoutDimensions()
  
  // Available height for content (accounting for header, footer, padding)
  const availableHeight = Math.max(height - 6, 10)
  const maxVisibleItems = Math.floor(availableHeight / itemHeight)
  
  // Calculate scroll position
  let startIndex = 0
  if (children.length > maxVisibleItems) {
    startIndex = Math.max(0, selectedIndex - Math.floor(maxVisibleItems / 2))
    startIndex = Math.min(startIndex, children.length - maxVisibleItems)
  }
  
  const visibleItems = children.slice(startIndex, startIndex + maxVisibleItems)
  const showScrollIndicators = children.length > maxVisibleItems
  
  return (
    <Box flexDirection="column" width={width}>
      {/* Scroll up indicator */}
      {showScrollIndicators && startIndex > 0 && (
        <Box justifyContent="center" marginBottom={1}>
          <Box borderStyle="round" borderColor="gray" paddingX={2}>
            <Text color="gray">↑ {startIndex} more items above</Text>
          </Box>
        </Box>
      )}
      
      {/* Visible items */}
      <Box flexDirection="column" flexGrow={1}>
        {visibleItems}
      </Box>
      
      {/* Scroll down indicator */}
      {showScrollIndicators && startIndex + maxVisibleItems < children.length && (
        <Box justifyContent="center" marginTop={1}>
          <Box borderStyle="round" borderColor="gray" paddingX={2}>
            <Text color="gray">↓ {children.length - startIndex - maxVisibleItems} more items below</Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}