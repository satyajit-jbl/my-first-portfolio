import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Modal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 text-white rounded-2xl max-w-3xl w-full overflow-y-auto max-h-[90vh] p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4">{project.projectsName}</h2>
            <p className="text-gray-300 mb-4">{project.longDescription}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.Technologies.map((tech, idx) => (
                <span key={idx} className="bg-black px-3 py-1 rounded-lg text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">Challenges:</h3>
              <p className="text-gray-300">{project.challenges}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">Users / Beneficiaries:</h3>
              <p className="text-gray-300">{project.users}</p>
            </div>

            {/* Carousel */}
            <div className="relative mb-4">
              <img
                src={project.images[currentIndex]}
                alt={`${project.projectsName} ${currentIndex + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
                  >
                    &#8594;
                  </button>
                </>
              )}
              {/* Dots */}
              <div className="flex justify-center mt-2 gap-2">
                {project.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 w-2 rounded-full ${idx === currentIndex ? "bg-orange-500" : "bg-gray-500"}`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">Future Plans:</h3>
              <p className="text-gray-300">{project.futurePlan}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-black transition-colors"
              >
                Visit Live
              </a>
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-white transition-colors"
              >
                GitHub Client
              </a>
              <a
                href={project.githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-white transition-colors"
              >
                GitHub Server
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
