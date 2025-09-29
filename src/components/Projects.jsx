import PropTypes from "prop-types"; //using proptypes to satisfy ESLint and ensure you pass the correct props
import { motion } from "framer-motion";

const image1 = "/Project (1).PNG";
const image2 = "/Project (2).PNG";
const image3 = "/Project (3).PNG";

const projectsData = [
    {
        image: image1,
        projectsName: "TailTales",
        Description: "TailTales is your go-to place for finding loving homes for furry friends in need...",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
        liveLink: "https://tailtales-b9d67.web.app/"
    },
    {
        image: image2,
        projectsName: "BistroBoss",
        Description: "BistroBoss is a restaurant management system...",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
        liveLink: "https://bistro-boss-d70c3.web.app/"
    },
    {
        image: image3,
        projectsName: "CritiqueMaster",
        Description: "A platform for movie reviews...",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
        liveLink: "https://email-password-auth-696c1.firebaseapp.com/"
    },
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div 
            className="flex flex-col items-center gap-8 md:flex-row md:gap-12 w-full"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            {/* Image Section */}
            <img 
                src={project.image} 
                alt={project.projectsName} 
                className="w-full max-w-[90%] md:max-w-[300px] cursor-pointer rounded-2xl transition-all duration-300" 
            />
            
            {/* Text Section */}
            <div className="flex flex-col gap-5 text-center md:text-left max-w-lg">
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">{project.projectsName}</h3>
                    <p className="text-gray-400">{project.Description}</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {project.Technologies.map((tech, index) => (
                        <span key={index} className="rounded-lg bg-black p-2 text-white text-sm md:text-base">
                            {tech}
                        </span>
                    ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "#6366F1", boxShadow: "0px 4px 10px rgba(99, 102, 241, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 border border-indigo-600 bg-black text-white text-sm font-bold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                        View Details
                    </motion.button>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <motion.button 
                            whileHover={{ scale: 1.05, backgroundColor: "#FF9800", boxShadow: "0px 4px 10px rgba(255, 152, 0, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 border border-orange-500 bg-black text-white text-sm font-bold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                        >
                            Live Link
                        </motion.button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">Some Projects I have done</h1>
            <div className="flex flex-col gap-16 w-full max-w-5xl text-white">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

//using proptypes to satisfy ESLint and ensure you pass the correct props
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    projectsName: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
  }).isRequired,
};