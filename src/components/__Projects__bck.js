import { motion } from "framer-motion";

const image1 = "/Project (1).PNG";
const image2 = "/Project (2).PNG";
const image3 = "/Project (3).PNG";
// const image4 = "/Project (4).PNG";

const projectsData = [
    {
        image: image1,
        projectsName: "TailTales",
        Description: "TailTales is your go-to place for finding loving homes for furry friends in need...",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        image: image2,
        projectsName: "BistroBoss",
        Description: "BistroBoss is a restaurant management system...",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        image: image3,
        projectsName: "CritiqueMaster",
        Description: "A platform for movie reviews...",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    // {
    //     image: image4,
    //     projectsName: "TailTales",
    //     Description: "Helping animals find new homes...",
    //     Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    // },
];

const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 w-full">
            {/* Image Section */}
            <img 
                src={project.image} 
                alt={project.projectsName} 
                className="w-full max-w-[90%] md:max-w-[300px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105" 
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
            </div>
        </div>
    );
};

export const Projects = () => {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">My Projects</h1>

            {/* Projects Container */}
            <div className="flex flex-col gap-16 w-full max-w-5xl text-white">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};
