import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState, type FC } from "react";


const Skill: FC <{skill: string, idx: number}> = ({skill, idx}) => {
  const [spring, api] = useSpring(() => ({
    config: {
      friction: 12,
      tension: 200,
    },
    from: {
      marginTop:  1000, scale: 1, zIndex: 1
    },
    to: [
      { marginTop: 0, scale: 1, zIndex: 1 },
    ],
    delay: 100 * idx
  }))

  const handleEnter = () => {
    api.start({config: {clamp: true}, to: [{scale: 1.2}, {zIndex: 5}, ]})
  }
  const handleLeave = () => {
    api.start({to: [{scale: 1}, {zIndex: 1}, ]})
  }

  return (
    <animated.div
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
      style={{
        height: "10vh",
        width: "10vh",
        border: "1px solid black",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white",
        padding: "1vh",
        fontSize: "1.8vh",
        ...spring,
      }}
    >
      {skill}
    </animated.div>
  )
}

const Skills: FC <{}> = ({}) => {
  const items = [
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "REST",
    "Unit Testing",
    "Algorithms",
    "Data Structures",
    "Agile",
    "Scrum",
    "Java",
    "C++",
    "Python",
  ]
  const [display, setDisplay] = useState<string[][]>([])

  useEffect(() => {
    let added = 1
    let cur = 1
    const res = [["JavaScript"]]
    while (added < items.length / 2) {
      let arr = items.slice(added, added + cur + 2)
      res.push(arr)
      cur += 2
      added += cur
    }
    while (added < items.length && cur > 1) {
      let arr = items.slice(added, added + cur - 2)
      res.push(arr)
      cur -= 2
      if (cur < 0) cur = 0
      added += cur
    }
    setDisplay(res)
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20vh"
      }}
    >
      {display.map((row, i) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            {row.map((skill, i) => {
              return (
                <Skill skill={skill} idx={i} />
              )
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Skills;