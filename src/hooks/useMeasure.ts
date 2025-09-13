import { measureElement } from 'ink'
import { useCallback, useEffect, useRef, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

interface UseMeasureResult {
  ref: React.RefObject<any>
  dimensions: Dimensions
  measure: () => void
}

export function useMeasure(): UseMeasureResult {
  const ref = useRef<any>(null)
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })

  const measure = useCallback(() => {
    if (ref.current) {
      const measured = measureElement(ref.current)
      setDimensions(measured)
    }
  }, [])

  useEffect(() => {
    // Measure after initial render
    measure()
  }, [measure])

  return { ref, dimensions, measure }
}
