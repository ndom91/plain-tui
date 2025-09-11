import { useStdout } from 'ink'
import { useLayoutEffect, useState } from 'react'

export function useStdoutDimensions(): [number, number] {
  const { stdout } = useStdout()
  const { columns, rows } = stdout
  const [size, setSize] = useState({ columns, rows })
  useLayoutEffect(() => {
    function onResize() {
      const { columns, rows } = stdout
      setSize({ columns, rows })
    }

    stdout.on('resize', onResize)
    return () => {
      stdout.off('resize', onResize)
    }
  }, [stdout])
  return [size.columns, size.rows]
}
