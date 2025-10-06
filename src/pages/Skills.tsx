import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState, type FC } from "react";
import { useAppSelector } from "../hooks";


const Skill: FC <{skill: {skill: string, idx: number}}> = ({skill}) => {
  const isSlim = useAppSelector(state => state.global.isSlim)
  const [spring, api] = useSpring(() => ({
    config: {
      friction: 10,
      tension: 200,
      mass: 5,
      clamp: true
    },
    from: {
      marginTop:  0, scale: 0, zIndex: 1
    },
    to: [
      { marginTop: 0, scale: 1.2, zIndex: 1 },
      { marginTop: 0, scale: 1, zIndex: 1 },
    ],
    delay: 100 * skill.idx
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
        height: isSlim ? "9vw": "10dvh",
        width: isSlim ? "9vw": "10dvh",
        border: "1px solid black",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white",
        padding: "1vh",
        fontSize: isSlim ? "1.7vw" : "1.8dvh",
        ...spring,
      }}
    >
      {skill.skill}
    </animated.div>
  )
}

const Skills: FC <{}> = ({}) => {
  const items = [
    {idx: 0, skill: "JavaScript"},
    {idx: 1, skill: "React"},
    {idx: 2, skill: "React Native"},
    {idx: 3, skill: "Node.js"},
    {idx: 4, skill: "Express"},
    {idx: 5, skill: "PostgreSQL"},
    {idx: 6, skill: "MongoDB"},
    {idx: 7, skill: "Git"},
    {idx: 8, skill: "GitHub"},
    {idx: 9, skill: "Docker"},
    {idx: 10, skill: "AWS"},
    {idx: 11, skill: "REST"},
    {idx: 12, skill: "Unit Testing"},
    {idx: 13, skill: "Algorithms"},
    {idx: 14, skill: "Data Structures"},
    {idx: 15, skill: "Agile"},
    {idx: 16, skill: "Scrum"},
    {idx: 17, skill: "Java"},
    {idx: 18, skill: "C++"},
    {idx: 19, skill: "Python"},
  ]
  const [display, setDisplay] = useState<{skill: string, idx: number}[][]>([])

  useEffect(() => {
    let added = 1
    let cur = 1
    const res = [[{idx: 0, skill: "JavaScript"}]]
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
            {row.map((skill, j) => {
              return (
                <Skill skill={skill} />
              )
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Skills;