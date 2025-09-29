// import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoTailwindCss } from "react-icons/bi"
// import { motion } from "framer-motion";

// export const Tech = () => {

//     const variants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 }
//     }

//     return <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
//         <motion.h1
//             variants={variants}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.5 }}
//             className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>
//         <div className="flex flex-wrap items-center justify-center gap-10 p-5">
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoNodejs className="cursor-pointer text-[80x] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoJavascript className="cursor-pointer text-[80x] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoNodejs className="cursor-pointer text-[80x] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoHtml5 className="cursor-pointer text-[80x] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoCss3 className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//             >
//                 <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
//             </motion.div>
//         </div>
//     </div>
// }

import { 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript, 
  BiLogoNodejs, 
  BiLogoTailwindCss 
} from "react-icons/bi";

import { 
  SiReact, 
  SiNextdotjs, 
  SiRedux, 
  SiPostman, 
  SiMysql, 
  SiPython, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiFirebase 
} from "react-icons/si";

import { motion } from "framer-motion";

export const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const techs = [
    { icon: <BiLogoNodejs className="text-green-500" />, name: "Node.js" },
    { icon: <BiLogoJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <BiLogoHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <BiLogoCss3 className="text-blue-500" />, name: "CSS3" },
    { icon: <BiLogoTailwindCss className="text-sky-500" />, name: "Tailwind CSS" },
    { icon: <SiReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
    { icon: <SiPostman className="text-orange-600" />, name: "Postman" },
    { icon: <SiMysql className="text-blue-700" />, name: "MySQL" },
    { icon: <SiPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  ];

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center py-20">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl mb-10"
        // className="text-4xl font-light text-white md:text-6xl"
      >
        What can i do?
      </motion.h1>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-10 p-5">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="cursor-pointer transition-all duration-300 hover:-translate-y-5 text-[50px] sm:text-[70px] md:text-[90px]">
              {tech.icon}
            </div>
            <p className="text-white text-lg font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

