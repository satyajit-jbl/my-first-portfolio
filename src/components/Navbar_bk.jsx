// import { div } from "framer-motion/client";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
// import { Link } from "react-router-dom";


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">SG</a>
            {/* <a href="mailto:satyajit_jbl@yahoo.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600">Resume</a> */}

            <ul className="hidden md:flex gap-10">
                <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Home</li></a>
                <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Tech</li></a>
                <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Projects</li></a>
                <a href="#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>About Me</li></a>
                {/* <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><Link to="projects"><li>Projects</li></Link></a> */}
                <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Contact</li></a>
            </ul>

            <ul className="hidden md:flex gap-5">
                {/* <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"><BsYoutube></BsYoutube></li> */}
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                        <BsYoutube />
                    </li>
                </a>

                <a href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/" target="_blank" rel="noopener noreferrer" >
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsLinkedin></BsLinkedin></li>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsTwitter></BsTwitter></li>
                </a>
                <a href="https://github.com/satyajit-jbl" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"><BsGithub /></li>
                </a>
            </ul>

            {
                isOpen ? (
                    <BiX className="block md:hidden text-4xl" onClick={menuOpen}></BiX>
                ) : (
                    <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}></BiMenu>
                )
            }
            {
                isOpen && (
                    <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "black" : "hidden"}`}>
                        <ul className="flex flex-col gap-8">
                            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Home</li></a>
                            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Tech</li></a>
                            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Projects</li></a>
                            <a href="#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>About Me</li></a>
                            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Contact</li></a>
                        </ul>
                        <ul className="flex flex-wrap gap-5">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                                    <BsYoutube />
                                </li>
                            </a>

                            <a href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/" target="_blank" rel="noopener noreferrer" >
                                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsLinkedin></BsLinkedin></li>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
                                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsTwitter></BsTwitter></li>
                            </a>
                            <a href="https://github.com/satyajit-jbl" target="_blank" rel="noopener noreferrer">
                                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"><BsGithub /></li>
                            </a>
                        </ul>

                    </div>
                )
            }

        </nav>
    )
}
