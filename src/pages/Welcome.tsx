import { type FC } from 'react';
import { useAppDispatch } from '../hooks';
import { transition } from '../globalSlice';
import { useSpring, animated } from '@react-spring/web';
import TextFill from '../components/TextFill';

const Welcome: FC <{}> = ({}) => {
  const dispatch = useAppDispatch()
  const spring = useSpring({
    from: {opacity: 0},
    to: {opacity: 1}
  })
  return (
    <animated.div
      style={{
        position: "absolute",
        display: "flex",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        justifyContent: 'center',
        alignItems: "center",
        ...spring
      }}
    >
      <div style={{margin: 10, color: "white"}} onClick={() => dispatch(transition(1))}>
        <TextFill text={"START"} />
      </div>
    </animated.div>
  )
}

export default Welcome
