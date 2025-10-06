import { useEffect, useLayoutEffect, useRef, useState, type FC } from 'react'
import { useSpring, animated } from '@react-spring/web'
const Paint: FC <{count: number, color: string}> = ({count, color}) => {
  const midWidth = window.innerWidth / 2
  const midHeight = window.innerHeight / 2
  const [currentRoute, setCurrentRoute] = useState("")
  const [length, setLength] = useState(0)
  const p: {current: any} = useRef(null)
  const [spring, api] = useSpring(() => {});
  useEffect(() => {
    const points = [[window.innerWidth, 0], [window.innerWidth, window.innerHeight], [0, window.innerHeight], [0, 0], [midWidth, midHeight], [window.innerWidth, 0], [midWidth, midHeight], [0, window.innerHeight], [midWidth, midHeight], [window.innerWidth, window.innerHeight]]
    let path = `M${0} ${0}`
    while (points.length) {
      const point = points.shift()
      if (!point) return
      path += ` ${point[0]} ${point[1]}`
    }
    setCurrentRoute(path)
  }, [])

  useLayoutEffect(() => {
    if (!p) return
    if (!p.current) return
    const len = p.current.getTotalLength()
    setLength(len)
  }, [currentRoute])

  useEffect(() => {
    api.start({
      config: {duration: count * 100},
      from: {strokeDashoffset: length, strokeDashArray: length, opacity: 1},
      to: {strokeDashoffset: 0, strokeDashArray: length, opacity: 1},
    })
  }, [length])

  return (
    <>
      <path ref={p} d = {currentRoute} stroke="none" fill="none" />
      {length && <animated.path
        fill="none"
        stroke={color}
        strokeWidth={window.innerHeight / 4}
        strokeLinecap="round"
        strokeDashoffset={spring.strokeDashoffset}
        strokeDasharray={spring.strokeDashArray}
        d={currentRoute}
        style={{ willChange: 'stroke-dashoffset', transform: 'translate3d(0, 0, 0)', opacity: spring.opacity }}
      />}
    </>
  )
}

export default Paint
