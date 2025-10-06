import { useEffect, useRef, useState, type FC } from 'react';

const TypeText: FC <{text: string}> = ({text}) => {
  const [curText, setCurText] = useState("")
  const stopped = useRef(false)
  useEffect(() => {
    let count = 0
    const int = setInterval(() => {
      if (count >= text.length || stopped.current) {
        if (stopped.current) setCurText(text)
        clearInterval(int)
        return
      }
      count++
      setCurText(prev => {
        let char = text[prev.length]
        if (char === undefined) return prev
        return prev + char
      })
    }, 10)

    return () => {
      clearInterval(int)
    }
  }, [])
  return (
    <div
      onClick={() => {
        stopped.current = true
      }}
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      {curText}
    </div>
  )
}

export default TypeText
