import { type FC } from 'react';
import { useSpring, animated } from '@react-spring/web';

const TextFill: FC <{text: string, invert?: boolean, delay?: number}> = ({text, invert = false, delay=0}) => {
  const spring = useSpring({
    config: {
      duration: 900,
    },
    from: {
      width: "100%",
      height: "0%",
    },
    to: {
      width: "100%",
      height: "100%"
    },
    delay: delay
  })
  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        borderRadius: 3,
        padding: invert ? "3px 5px" : "5px"
      }}
    >
      <animated.div 
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: invert ? "white": "black",
          zIndex: 1,
          ...spring
        }}
      >
      </animated.div>
      <div
        style={{
          color: invert ? "black": "white",
          fontWeight: 600,
          position: "relative",
          zIndex: 2
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default TextFill
