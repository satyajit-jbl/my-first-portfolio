import { EducationalQualification } from "../../components/EducationalQualification";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects/Projects";
// import { Projects } from "../../components/Projects";
import { Tech } from "../../components/Tech";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <EducationalQualification></EducationalQualification>
            <Tech></Tech>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;