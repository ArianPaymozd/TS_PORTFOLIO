import { type FC } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Carousel from '../components/Carousel';
import TypeText from '../components/TypeText';
import { useAppSelector } from '../hooks';

const Projects: FC <{}> = ({}) => {
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
          justifyContent: "space-evenly"
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
                My last position took up all my coding bandwidth
                but I'm loving creating for myself again! Be sure
                to check back soon to see new projects I'm working on
                and let me know if you have any ideas!
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
            {img: "loading.png", title: "UNNAMED PROJECT", caption: "This project is coming soon"},
            {img: "loading.png", title: "UNNAMED PROJECT", caption: "This project is coming soon"},
            {img: "loading.png", title: "UNNAMED PROJECT", caption: "This project is coming soon"},
            {img: "loading.png", title: "UNNAMED PROJECT", caption: "This project is coming soon"},
            {img: "loading.png", title: "UNNAMED PROJECT", caption: "This project is coming soon"},
            {img: "loading.png", title: "UNNAMED PROJECT", caption: "This project is coming soon"},
          ]} />
        </div>
      </div>
    </animated.div>
  )
}

export default Projects
