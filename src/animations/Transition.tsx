import { type FC } from 'react'
import { useSpring, animated } from '@react-spring/web';
import Paint from './Paint';

const Transition: FC <{setNextColor: Function, setCurColor: Function, setTransitioning: Function, nextColor: string}> = ({setCurColor, setNextColor, setTransitioning, nextColor}) => {

  const spring = useSpring({
    config: { duration: 500 },
    from: {
      scale: 1,
      opacity: 1
    },
    to: {
      scale: 3.35
    },
    delay: 1100,
    onRest: () => {
      setCurColor(nextColor)
      setNextColor(null)
      setTransitioning(false)
    }
  });
  return (
    <animated.svg
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        background: "none",
        zIndex: 3,
        ...spring
      }}
    >
      <Paint count={10} color={nextColor} />
    </animated.svg>
  )
}

export default Transition
