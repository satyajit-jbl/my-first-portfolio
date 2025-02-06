import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
// import { Tech } from "./components/Tech";
// import { ProjectDetails } from "./components/ProjectDetails";  // নতুন পেজ

function App() {
  return (
    <Router>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/project/:id" element={<ProjectDetails />} />  */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
