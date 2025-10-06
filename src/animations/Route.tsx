import { useLayoutEffect, useRef, useState, type FC } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useAppDispatch } from '../hooks'
import { stopTransition } from '../globalSlice'
const Route: FC <{routePath: string, duration: number, delay: number, width: number, last: undefined | boolean}> = ({routePath = "M0 0", duration = 1000, delay = 0, width = 0, last = false}) => {
  const dispatch = useAppDispatch()
  const [length, setLength] = useState(0)
  const p: {current: any} = useRef(null)
  const spring = useSpring({
    config: {duration: duration},
    from: {strokeDashoffset: length, strokeDashArray: length, opacity: 0, stroke: "black"},
    to: [{strokeDashoffset: 0, strokeDashArray: length, opacity: 1, stroke: "white"}],
    delay: delay,
    onRest: () => {
      if (last) dispatch(stopTransition())
    }
  });

  useLayoutEffect(() => {
    if (!p) return
    if (!p.current) return
    const len = p.current.getTotalLength !== undefined ? p.current.getTotalLength() : 0
    setLength(len)
  }, [p.current])



  return (
    <>
      <path ref={p} d={routePath} stroke="none" fill="none" />
      {length && <animated.path
        fill="none"
        strokeLinecap={"square"}
        stroke={spring.stroke}
        strokeWidth={width}
        strokeDashoffset={spring.strokeDashoffset}
        strokeDasharray={spring.strokeDashArray}
        d={routePath}
        style={{ willChange: 'stroke-dashoffset', transform: 'translate3d(0, 0, 0)', opacity: spring.opacity }}
      />}
    </>
  )
}

export default Route
