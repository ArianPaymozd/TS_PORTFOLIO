import { type FC, type ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Bubble: FC <{children: ReactNode}> = ({children}) => {
  const spring = useSpring({
    config: {
      duration: 1000,
      friction: 3
    },
    from: {
      borderRadius: "46% 50% 39% 54% / 56% 57% 50% 50%"
    },
    to: [
      {borderRadius: "40% 52% 49% 50% / 42% 45% 40% 50%"},
      {borderRadius: "44% 56% 46% 54% / 36% 50% 50% 64%"},
      {borderRadius: "52% 63% 42% 60% / 40% 39% 59% 42%"},
      {borderRadius: "46% 50% 39% 54% / 56% 57% 50% 50%"}
    ],
    loop: true
  })
  return (
    <animated.div
      style={{
        display: "flex",
        height: "100px",
        width: "100px",
        justifyContent: 'center',
        alignItems: "center",
        border: '1px solid black',
        ...spring
      }}
    >
      <animated.img style={{
        objectFit: "fill",
        height: "100px",
        width: "100px",
        ...spring
      }} src="Wisdom-Kaye.jpg" />
    </animated.div>
  )
}

export default Bubble
