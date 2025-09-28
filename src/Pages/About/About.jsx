// import image from "../../public/profilePic2.jpg";
import image from "../../assets/profilePic2.jpg"
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div id="about" className="px-6 md:px-16 flex flex-col md:flex-row items-center w-full justify-center py-5">
      {/* Profile Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/3 flex justify-center"
      >
        <img
          src={image}
          alt="Profile"
          className="w-[180px] md:w-[250px] rounded-3xl shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
        />
      </motion.div>

      {/* About Me Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 text-white mt-10 md:mt-0"
      >
        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl">
         About Me
        </h1>
        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-xl md:text-2xl">
          Crafting Interactive & Scalable Web Experiences
        </h3>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
        Hi there! I am a MERN stack developer with a background in Mathematics & an MBA in Finance. My journey into web development was driven by a deep curiosity for crafting interactive and user-friendly digital experiences. Over time, I’ve honed my expertise in React, Node.js, Express, and MongoDB, enabling me to build scalable applications with seamless performance.
        </p>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
        I specialize in building high-performance applications, leveraging React and Tailwind CSS for sleek frontends and Node.js with Express for robust backend solutions.
        </p>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
        Outside of coding, I’m passionate about photography, chess, and exploring emerging technologies. I believe creativity goes beyond code, and I bring that perspective into every project I create.
        </p>
      </motion.div>
    </div>
  );
};
