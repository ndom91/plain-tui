import { Box } from 'ink'
import { useStdoutDimensions } from '../lib/useStdoutDimensions.js'

export const FullScreen = ({ children }) => {
  const [columns, rows] = useStdoutDimensions()

  return (
    <Box width={columns} height={rows} flexDirection="column">
      {children}
    </Box>
  )
}
