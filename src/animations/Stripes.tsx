import { useEffect, useState, type FC } from 'react'
import Route from './Route'
const Stripes: FC <{}> = ({}) => {
  const [paths, setPaths] = useState<string[]>([])

  const findIntercept = (p: {x: number, y: number}) => {
    const b = p.y - -1 * p.x;
    const x = -b / -1;
  
    return { x: x, y: 0 };
  }

  useEffect(() => {
    setPaths([])
    setTimeout(() => {
      const newPaths: string[] = []
      const increment = window.innerHeight / 5
      const xNum = Math.ceil(window.innerWidth / increment)
      const xArr = Array(xNum + 1).fill(0).map((_, i) => {
        return Math.floor(0 + (increment * i))
      })
      const yArr = Array(5).fill(0).map((_, i) => {
        return Math.floor(0 + (increment * i - 10))
      })
      for (let i = 0; i < 5; i++) {
        const {x, y} = findIntercept({x: 0, y: yArr[i]})
        newPaths.push(i % 2 === 0 ? `M0 ${yArr[i]} ${x} ${y}` : `M${x} ${y} 0 ${yArr[i]}`)
      }
      for (const idx in xArr) {
        const i = xArr[idx]
        const {x, y} = findIntercept({x: i, y: window.innerHeight})
        newPaths.push(parseInt(idx) % 2 === 0 ? `M${i} ${window.innerHeight} ${x} ${y}` : `M${x} ${y} ${i} ${window.innerHeight}`)
      }
      setPaths(newPaths)
    }, 100)
  }, [])

  return (
    <svg
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        background: "none",
        zIndex: 5
      }}
    >
      {paths.map((path, i) => {
        return <Route key={`route-${i}`}width={window.innerHeight / 6.5} routePath={path} duration={500} delay={i * 100} last={i === paths.length - 1} />
      })}
    </svg>
  )
}

export default Stripes
