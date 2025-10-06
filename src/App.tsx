import Stripes from './animations/Stripes';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Projects from './pages/Projects';
import { useAppSelector } from './hooks';
import Nav from './components/Nav';
import Skills from './pages/Skills';
import "./App.css"
import Contact from './pages/Contact';

function App() {

  const page = useAppSelector((state) => state.global.page);
  const transitioning = useAppSelector((state) => state.global.transitioning);


  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        background: "white",
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}
    >
      {page === 0 && <Welcome/>}
      {page === 1 && <About/>}
      {page === 2 && <Projects/>}
      {page === 3 && <Skills/>}
      {page === 4 && <Contact/>}
      {transitioning && <Stripes />}
      {page > 0 && <Nav />}
    </div>
  )
}

export default App
