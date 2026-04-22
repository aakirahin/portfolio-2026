import HeroBackground from "./components/Hero/HeroBackground"
import HeroText from "./components/Hero/HeroText"
import NavBar from "./components/NavBar"
import ProjectsList from "./components/Projects/ProjectsList"
import WorkTimeline from "./components/About/WorkTimeline.tsx"
import About from "./components/About/About.tsx"
import Section from "./components/Section.tsx"
import DotFieldBackground from "./components/DotField/DotFieldBackground.tsx"
import ContactForm from "./components/ContactForm.tsx"
import TextType from "./components/TextType/TextType.tsx"
import Links from "./components/Links/Links.tsx"

const sectionClass = "relative min-h-screen flex items-center justify-center"
const aboutText = `My love for design and coding began when I opened a Tumblr account at 14. I would spend my days learning HTML and customising my blog. That passion has persisted into my adulthood where I now develop websites and applications.`

function App() {
  return (
    <div className="overflow-clip text-[14px]">
      {/* NAV BAR */}
      <div className="absolute top-4 left-0 z-20 flex justify-center w-full">
        <NavBar/>
      </div>

      {/* HERO */}
      <section id="Home" className={`hero-section-border ${sectionClass}`} aria-label="Hero">
        <HeroBackground/>
        <HeroText/>
      </section>

      {/* PROJECTS */}
      <Section label="Projects" className={`projects-section ${sectionClass}`}>
        <DotFieldBackground/>
        <ProjectsList/>
      </Section>

      {/* ABOUT */}
      <Section label="About" className={sectionClass}>
        <TextType 
          text={aboutText}
          startOnVisible={true}
          typingSpeed={35}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
          loop={false}
          className="w-[40%] text-center text-[16px] font-mono bg-white/10 p-4 rounded-xl backdrop-blur-xs border border-white/15"
        />
        <div className="w-1/2 flex justify-between items-center">
          <DotFieldBackground/>
          <About/>
          <WorkTimeline/>
        </div>
      </Section>

      {/* CONTACT */}
      <Section label="Contact" className={sectionClass}>
        <DotFieldBackground/>
        <ContactForm/>
        <Links/>
      </Section>
    </div>
  )
}

export default App
