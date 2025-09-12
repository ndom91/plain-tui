import { Box, Text } from 'ink'
import { useEffect, useState } from 'react'

interface LoadingSpinnerProps {
  text?: string
}

const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

export function LoadingSpinner({ text = 'Loading...' }: LoadingSpinnerProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % spinnerFrames.length)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box flexGrow={1} justifyContent="center" alignItems="flex-start">
      <Text color="cyan">{spinnerFrames[frame]} </Text>
      <Text color="gray">{text}</Text>
    </Box>
  )
}

