import { useRef, type FC } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Card: FC <{item: CarouselItem, scrolling: boolean}> = ({item, scrolling}) => {
  const cardRef = useRef<null | HTMLDivElement>(null)

  const [spring, api] = useSpring(() => {})


  const findTilt = (x: number, y: number, rect: DOMRect | undefined): [number, number] => {
    if (!rect) return [0, 0]
    return [
      -(y - rect.height / 2) / 3,
      (x - rect.width / 2) / 7,
    ]
  };

  const handleMouseMove = (e: {nativeEvent: {offsetX: number, offsetY: number}}) => {
    if (scrolling) {
      return
    }
    const rect = cardRef?.current?.getBoundingClientRect()
    const [x, y] = findTilt(e.nativeEvent.offsetX, e.nativeEvent.offsetY, rect)
    api.start({
      to: {
        transform: `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(1.1)`
      }
    })
  }

  const handleMouseLeave = () =>{
    api.start({
      to: {
        transform: `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`
      }
    })
  }


  return (
    <animated.div 
      ref={cardRef}
      style={{
        height: "20vh",
        width: "100%",
        borderRadius: 5,
        border: "2px solid black",
        ...spring,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative"
      }}
    >
      <div 
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => handleMouseLeave()}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2
        }}
      />
      <div
        style={{
          flex: .4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img 
          src={item.img} 
          style={{
            height: "18vh",
            maxWidth: "100%",
            marginTop: "1vh",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: 'space-between',
          flex: .4,
          height: "90%",
          padding: "1vh 0px"
        }}
      >
        <div
          style={{
            fontSize: "2.5vh",
            fontWeight: "bold"
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            fontSize: "1.5vh",
          }}
        >
          {item.caption}
        </div>
      </div>
    </animated.div>
  )
}

export default Card
