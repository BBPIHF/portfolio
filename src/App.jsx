import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import TechStack from "./Components/TechStack"
import Experience from "./Components/Experience"

export default function App() {
  return (
    <>
    <Navbar/>
    <div className="allContainer">
    <Home/>
    <About/> 
    <TechStack/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}