import { motion } from "framer-motion";

export const EducationalQualification = () => {
  const educationData = [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Finance",
      institution: "USTC",
      year: "2012",
    },
    {
      degree: "Bachelor of Science (B.Sc)",
      field: "Mathematics",
      institution: "National University",
      year: "2007",
    },
  ];

  return (
    <div id="education" className="px-6 md:px-16 flex flex-col items-center w-full justify-center py-5">
      <h2 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl mb-10">
        My Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg shadow-indigo-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-600"
          >
            <h3 className="text-2xl font-bold text-indigo-400">{edu.degree}</h3>
            <p className="text-lg text-gray-300">{edu.field}</p>
            <p className="text-md text-gray-400">{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
