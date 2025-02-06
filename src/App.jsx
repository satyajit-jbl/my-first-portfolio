import { AboutMe } from "./components/AboutMe"
import { Contact } from "./components/Contact"
import { EducationalQualification } from "./components/EducationalQualification"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Tech } from "./components/Tech"


function App() {


  return (

    <>
    <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">

        <Navbar></Navbar>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <EducationalQualification></EducationalQualification>
        <Tech></Tech>
        <Projects></Projects>
        <Contact></Contact>
        {/* <Footer></Footer> */}
      </main>
    </>
  )
}

export default App
