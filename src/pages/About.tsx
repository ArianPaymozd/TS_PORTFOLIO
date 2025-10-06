import { type FC } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Carousel from '../components/Carousel';
import TypeText from '../components/TypeText';
import { useAppSelector } from '../hooks';

const About: FC <{}> = ({}) => {
  const isSlim = useAppSelector(state => state.global.isSlim)
  const spring = useSpring({
    from: {opacity: 0},
    to: {opacity: 1}
  })
  return (
    <animated.div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        paddingTop: "10dvh",
        ...spring
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isSlim ? "column" : "row",
          alignItems: "center",
          marginTop: "5dvh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            borderRadius: 5,
            border: "2px solid black",
            height: isSlim ? "35vh": "75vh",
            width: isSlim ? "80vw": "40vw",
            overflow: "auto"
          }}
        >
          <div
            style={{
              margin: isSlim ? "3vh" : "8vh"
            }}
          >
            <TypeText 
              text={`
                Five years ago I started my journey as a software engineer.
                In this time I've taught myself multiple languages, held lead positions,
                and have even done some mentoring. Every day I wake up thankful
                for the fact that I enjoy what I do for a living! Take a look at the
                list ${isSlim ? "below" : "to the right"} for a glimpse into my other interests

              `} 
            />
          </div>
        </div>
        {!isSlim && <div 
          style={{
            height: "50vh",
            width: "3px",
            backgroundColor: "black",
            marginLeft: "5vw",
            marginTop: "13vh"
          }}
        />}
        {isSlim && <div 
          style={{
            height: "3px",
            width: "50vw",
            backgroundColor: "black",
            marginTop: "5vh"
          }}
        />}
        <div
          style={{
            height: isSlim ? "35vh": "75vh",
            marginTop: isSlim ? "5vh" : 0,
            width: isSlim ? "80vw": "40vw",
          }}
        >
          <Carousel items={[
            {img: "computer.jpg", title: "Technology", caption: "Always need a new graphics card"},
            {img: "clothes.png", title: "Fashion", caption: "Drip drip drip..."},
            {img: "car.jpg", title: "Cars", caption: "VROOOOO OOOOOOM"},
            {img: "pan.jpg", title: "Cooking", caption: "Grilling counts as cooking right?"},
            {img: "controller.jpg", title: "Gaming", caption: "Fighting Radahn is pain"},
            {img: "plane.jpg", title: "Travel", caption: "There goes my money"},
          ]} />
        </div>
      </div>
    </animated.div>
  )
}

export default About
