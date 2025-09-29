import image from "../../public/profilePic.jpg"
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-20 md:px-32">

      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Need to edit the image and make it square shape */}
          <img src={image} alt="" className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px]" />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl md:text-7xl ">Satyajit Ghosh</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl ">Fullstack Developer</h3>
          {/* <p className="md:text-base text-pretty text-sm text-gray-400">
            A passionate front-end developer with a background in Mathematics & MBA(Finance), I transitioned into web development out of a deep love for designing engaging
          </p> */}
          {/* <a href="mailto:satyajit_jbl@yahoo.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600">Resume</a> */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600"
          >
            Resume
          </a>
        </motion.div>
      </div>


    </div>
  )
}
