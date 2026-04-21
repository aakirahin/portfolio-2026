import HeroBackground from "./components/Hero/HeroBackground"
import HeroText from "./components/Hero/HeroText"
import NavBar from "./components/NavBar"
import ProjectsList from "./components/Projects/ProjectsList"
import WorkTimeline from "./components/About/WorkTimeline.tsx"
import About from "./components/About/About.tsx"
import Section from "./components/Section.tsx"

const sectionClass = "relative min-h-screen flex items-center justify-center"

function App() {
  return (
    <div className="overflow-clip text-[14px]">
      {/* HERO */}
      <section 
        id="Home"
        className={`hero-section-border ${sectionClass}`}
        aria-label="Hero"
      >
        <HeroBackground/>
        <div className="absolute top-4 left-0 z-20 flex justify-center w-full">
          <NavBar/>
        </div>
        <HeroText/>
      </section>

      {/* PROJECTS */}
      <Section label="Projects" className={`projects-section ${sectionClass}`}>
        <ProjectsList/>
      </Section>

      {/* ABOUT */}
      <Section label="About" className={sectionClass}>
        <div className="w-1/2 flex justify-between items-center">
          <About/>
          <WorkTimeline/>
        </div>
      </Section>

      {/* CONTACT */}
      <Section label="Contact" className={sectionClass}>

      </Section>
    </div>
  )
}

export default App
