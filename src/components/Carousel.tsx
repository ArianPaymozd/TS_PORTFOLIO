import { useEffect, useRef, useState, type FC } from 'react';
import { animated, useSprings } from '@react-spring/web';
import Card from './Card';

const Carousel: FC <{items: CarouselItem[]}> = ({items}) => {

  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [scrolling, setScrolling] = useState(false)
  const [springs, api] = useSprings(
    items.length,
    (): {from: CarouselScroll, to: CarouselScroll} => ({
      from: { opacity: 0 },
      to: { opacity: 1}
    }),
    [scrollVelocity]
  )

  useEffect(() => {
    let lastScrollTop = 0;
    let lastScrollTime = performance.now();
    let animationFrameId: number;

    const handleScroll = () => {
      if (!scrollRef.current) return;

      const currentScrollTop = scrollRef.current.scrollTop;
      const currentScrollTime = performance.now();

      const deltaScroll = currentScrollTop - lastScrollTop;
      const deltaTime = currentScrollTime - lastScrollTime;

      let velocity = deltaTime > 0 ? deltaScroll / deltaTime : 0;
      let x = -velocity * 50
      if (x > 30) x = 30
      if (x < -30) x = -30
      if (velocity === scrollVelocity) return
      setScrolling(true)
      setScrollVelocity(velocity);
      api.start({
          transform: `perspective(900px) rotateX(${x}deg) rotateY(${0}deg) scale(${1})`
      })

      lastScrollTop = currentScrollTop;
      lastScrollTime = currentScrollTime;

      animationFrameId = requestAnimationFrame(handleScroll);
      setScrolling(false)
    };

    if (scrollRef.current) {
      lastScrollTop = scrollRef.current.scrollTop;
    }

    scrollRef?.current?.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  const handleMouseLeave = () => {
    setScrolling(false)
    api.start({
      transform: `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`
  })
  }


  return (
    <div
      className='carousel'
      ref={scrollRef}
      style={{
        height: "100%",
        overflow: "auto",
      }}
      onTouchStartCapture={() => handleMouseLeave()}
      onMouseLeave={() => handleMouseLeave()}
      onMouseMove={() => handleMouseLeave()}
    >
      {springs.map((props, idx) => (
        <animated.div 
          key={`card-${idx}`}
          style={{
            height: "20vh",
            width: "80%",
            borderRadius: 5,
            ...props,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: idx === 0 ? 10 : 60,
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            zIndex: items.length - idx
          }}
        >
          <Card scrolling={scrolling} item={{...items[idx], idx: idx}} />
        </animated.div>
      ))}
    </div>
  )
}

export default Carousel
