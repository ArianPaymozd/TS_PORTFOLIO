import { type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { transition } from '../globalSlice';
import { useSpring, animated } from '@react-spring/web';
import TextFill from './TextFill';

const Nav: FC <{}> = ({}) => {
  const dispatch = useAppDispatch()
  const nextPage = useAppSelector(state => state.global.nextPage)
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
        width: "100vw",
        justifyContent: 'space-between',
        ...spring,
        zIndex: 6
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: 'space-between',
        }}
      >
        <div 
          style={{
            margin: 10, 
            border: nextPage === 1 
              ? "2px solid black" 
              : "0px solid black", 
            height: "fit-content",
            borderRadius: 5
          }} 
          onClick={() => dispatch(transition(1))}
        >
          <TextFill invert={nextPage === 1} text={"ABOUT"} />
        </div>
        <div 
          style={{
            margin: 10, 
            border: nextPage === 2 
              ? "2px solid black" 
              : "0px solid black", 
            height: "fit-content",
            borderRadius: 5
          }} 
          onClick={() => dispatch(transition(2))}
        >
          <TextFill invert={nextPage === 2} text={"PROJECTS"} />
        </div>
        <div 
          style={{
            margin: 10, 
            border: nextPage === 3 
              ? "2px solid black" 
              : "0px solid black", 
            height: "fit-content",
            borderRadius: 5
          }} 
          onClick={() => dispatch(transition(3))}
        >
          <TextFill invert={nextPage === 3} text={"SKILLS"} />
        </div>
        <div 
          style={{
            margin: 10, 
            border: nextPage === 4
              ? "2px solid black" 
              : "0px solid black", 
            height: "fit-content",
            borderRadius: 5
          }} 
          onClick={() => dispatch(transition(4))}
        >
          <TextFill invert={nextPage === 4} text={"CONTACT"} />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          marginTop: "2vh",
          marginRight: "3vw"
        }}
        onClick={() => dispatch(transition(4))}
      >
        <TextFill text={"ARIAN YAZDI"} />
      </div>
      
    </animated.div>
  )
}

export default Nav
