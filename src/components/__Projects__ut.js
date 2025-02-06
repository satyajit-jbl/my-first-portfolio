
// import { div } from "framer-motion/client"
import image1 from "../../public/Project (1).PNG"
import image2 from "../../public/Project (2).PNG"
import image3 from "../../public/Project (3).PNG"
import image4 from "../../public/Project (4).PNG"
import { motion } from "framer-motion"

const projectsData = [
    {
        image: image1,
        projectsName: "tailTales",
        Description: "TailTales is your go-to place for finding loving homes for furry friends in need. Whether you're looking to adopt a playful pup, a curious cat, or a smaller companion, TailTales connects you with animals waiting for their forever families. With detailed profiles, heartwarming stories, and an easy-to-navigate platform, we help make the adoption process simple, transparent, and full of joy. Join us on a mission to create new beginnings, one tail at a time.",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        image: image2,
        projectsName: "BistroBoss",
        Description: "TailTales is your go-to place for finding loving homes for furry friends in need. Whether you're looking to adopt a playful pup, a curious cat, or a smaller companion, TailTales connects you with animals waiting for their forever families. With detailed profiles, heartwarming stories, and an easy-to-navigate platform, we help make the adoption process simple, transparent, and full of joy. Join us on a mission to create new beginnings, one tail at a time.",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        image: image3,
        projectsName: "CriticMaster",
        Description: "TailTales is your go-to place for finding loving homes for furry friends in need. Whether you're looking to adopt a playful pup, a curious cat, or a smaller companion, TailTales connects you with animals waiting for their forever families. With detailed profiles, heartwarming stories, and an easy-to-navigate platform, we help make the adoption process simple, transparent, and full of joy. Join us on a mission to create new beginnings, one tail at a time.",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        image: image4,
        projectsName: "tailTales",
        Description: "TailTales is your go-to place for finding loving homes for furry friends in need. Whether you're looking to adopt a playful pup, a curious cat, or a smaller companion, TailTales connects you with animals waiting for their forever families. With detailed profiles, heartwarming stories, and an easy-to-navigate platform, we help make the adoption process simple, transparent, and full of joy. Join us on a mission to create new beginnings, one tail at a time.",
        Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
]

const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
            <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <div className="text-xl font-semibold">{project.projectsName} </div>
                    <p className="text-gray-400">{project.Description}</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    {
                        project.Technologies.map((tech, index)=>(
                            <span key={index} className="rounded-lg bg-black p-3">{tech}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export const Projects = () => {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-24">
            <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
            <div className="flex w-full max-w-[100px] flex-col gap-16 text-white">

            {
                projectsData.map((project, index)=>(<ProjectCard key={index}></ProjectCard>))
            }
            </div>
        </div>
    )
}
