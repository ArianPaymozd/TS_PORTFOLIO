import { type FC } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Carousel from '../components/Carousel';
import TypeText from '../components/TypeText';

const About: FC <{}> = ({}) => {
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
        paddingTop: "10vh",
        ...spring
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            flex: .4,
            borderRadius: 5,
            border: "2px solid black",
            height: "75vh",
            overflow: "auto"
          }}
        >
          <div
            style={{
              margin: "8vh"
            }}
          >
            <TypeText 
              text={`
                Five years ago I started my journey as a software engineer.
                In this time I've taught myself multiple languages, held lead positions,
                and have even done some mentoring. Every day I wake up thankful
                for the fact that I enjoy what I do for a living! Take a look at the
                list to the right for a glimpse into my other interests

              `} 
            />
          </div>
        </div>
        <div 
          style={{
            height: "50vh",
            width: "3px",
            backgroundColor: "black",
            marginLeft: "3vw",
            marginTop: "13vh"
          }}
        />
        <div
          style={{
            flex: .4,
            height: "75vh",
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
