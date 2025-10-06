import { type FC } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Carousel from '../components/Carousel';
import TypeText from '../components/TypeText';

const Projects: FC <{}> = ({}) => {
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
          justifyContent: "space-evenly"
        }}
      >
        <div
          style={{
            flex: .4,
            borderRadius: 5,
            border: "2px solid black",
          }}
        >
          <div
            style={{
              margin: "8vh"
            }}
          >
            <TypeText 
              text={`
                My last position took up all my coading bandwidth
                but I'm loving creating for myself again! Be sure
                to check back soon to see new projects I'm working on
                and let me know if you have any ideas!
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
