import Education from "./components/Education/Education";
import Navbar from "./components/Navbar/Navbar";
import ProjectList from "./components/Projects/ProjectList";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Skill from "./components/skills/Skill";

function App() {
  return (
    <div className="App">
              <Navbar/>
            <Intro/>
            <About/>
            <Skill/>
            <Education/>
          <ProjectList/>     
          <Contact/>  
       
    </div>
  );
}

export default App;
