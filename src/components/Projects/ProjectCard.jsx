import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="flex flex-col items-center gap-8 md:flex-row md:gap-12 w-full"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img 
          src={project.image} 
          alt={project.projectsName} 
          className="w-full max-w-[90%] md:max-w-[300px] cursor-pointer rounded-2xl transition-all duration-300" 
        />
        
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
          
          <div className="flex gap-4 mt-4">
            <motion.button 
              onClick={() => setIsModalOpen(true)}
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
};

export default ProjectCard;
