import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoTailwindCss } from "react-icons/bi"
import { motion } from "framer-motion";

export const Tech = () => {

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
        <motion.h1
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
            >
                <BiLogoNodejs className="cursor-pointer text-[80x] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
            >
                <BiLogoJavascript className="cursor-pointer text-[80x] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
            >
                <BiLogoNodejs className="cursor-pointer text-[80x] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
            >
                <BiLogoHtml5 className="cursor-pointer text-[80x] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
            >
                <BiLogoCss3 className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
            >
                <BiLogoTailwindCss className="cursor-pointer text-[80x] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            </motion.div>
        </div>
    </div>
}
