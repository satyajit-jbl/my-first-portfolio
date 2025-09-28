import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (!isOpen || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 3000); // 3s delay per slide

    return () => clearInterval(interval); // cleanup
  }, [isOpen, project]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  if (!project) return null;

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
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4">{project.projectsName}</h2>
            <p className="text-gray-300 mb-4">{project.longDescription}</p>

            {/* Carousel */}
            <div className="relative mb-4 group">
              <img
                src={project.images[currentIndex]}
                alt={`${project.projectsName} ${currentIndex + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-all duration-700"
              />
              
              {/* Prev / Next Buttons */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
              >
                &#8594;
              </button>

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

            {/* ... rest (Tech, Challenges, Users, Future Plans, Links) */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
