import type { BoxProps, DOMElement } from 'ink'
import { Box, measureElement } from 'ink'
import { useLayoutEffect, useRef, useState } from 'react'

export type Props = {
  children: React.ReactNode[]
  /** initial height */
  initialHeight?: number
  /** children offset */
  offset: number
} & BoxProps

/**
 * a box that can be scrolled
 * add border is not recommended
 *
 * @param props - props
 */
export function ScrollBox(props: Props) {
  const { children, initialHeight = 0, offset, ...boxProps } = props

  const ref = useRef<DOMElement>(null)

  const [height, setHeight] = useState(initialHeight)

  useLayoutEffect(() => {
    if (ref?.current) {
      setHeight(measureElement(ref.current).height)
    }
  }, [ref, props.height])

  return (
    <Box {...boxProps} flexDirection="column" ref={ref}>
      {children.slice(offset, height + offset)}
    </Box>
  )
}
