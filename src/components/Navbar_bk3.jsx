import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [hobbyOpen, setHobbyOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <a
                href="/"
                className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
            >
                SG
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 items-center">
                {/* <a href="/#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </a>
                <a href="/#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>
                <a href="/#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Projects</li>
                </a>
                <a href="/#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>About Me</li>
                </a> */}
                <HashLink smooth to="/#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </HashLink>
                <HashLink smooth to="/#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </HashLink>
                <HashLink smooth to="/#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Projects</li>
                </HashLink>
                <HashLink smooth to="/#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>About Me</li>
                </HashLink>
                <HashLink smooth to="/hobby" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Hobby</li>
                </HashLink>

                {/* Hobby Dropdown */}
                {/* <li
                    className="relative group cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                >
                    Hobby
                    <ul className="absolute left-0 mt-2 hidden flex-col rounded-lg bg-black/90 p-3 shadow-lg group-hover:flex gap-2">
                        <a href="/numismatics" className="hover:text-blue-400"><li>Numismatics</li></a>
                        <a href="/philately" className="hover:text-blue-400"><li>Philately</li></a>
                        <a href="/marathon" className="hover:text-blue-400"><li>Marathon</li></a>
                        <a href="/planted-tank" className="hover:text-blue-400"><li>Planted Tank</li></a>
                    </ul>
                </li> */}

                <a href="/contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </a>
            </ul>

            {/* Social Icons */}
            <ul className="hidden md:flex gap-5">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                        <BsYoutube />
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                        <BsLinkedin />
                    </li>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                        <BsTwitter />
                    </li>
                </a>
                <a href="https://github.com/satyajit-jbl" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                        <BsGithub />
                    </li>
                </a>
            </ul>

            {/* Mobile Menu Toggle */}
            {isOpen ? (
                <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
            ) : (
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            )}

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12`}
                >
                    <ul className="flex flex-col gap-8">
                        <a href="/" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Home</li>
                        </a>
                        <a href="/tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Tech</li>
                        </a>
                        <a href="/projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Projects</li>
                        </a>
                        <a href="/about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>About Me</li>
                        </a>

                        {/* Mobile Hobby Dropdown */}
                        {/* <li
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={() => setHobbyOpen(!hobbyOpen)}
            >
              Hobby {hobbyOpen ? "▲" : "▼"}
              {hobbyOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <a href="/hobby/numismatics" className="hover:text-blue-400"><li>Numismatics</li></a>
                  <a href="/hobby/philately" className="hover:text-blue-400"><li>Philately</li></a>
                  <a href="/hobby/marathon" className="hover:text-blue-400"><li>Marathon</li></a>
                  <a href="/hobby/planted-tank" className="hover:text-blue-400"><li>Planted Tank</li></a>
                </ul>
              )}
            </li> */}
                        {/* Hobby Dropdown slowly */}
                        <li className="relative group cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100">
                            Hobby
                            <ul className="absolute left-0 mt-2 w-44 flex-col rounded-lg bg-black/90 p-3 shadow-lg
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                 transition-all duration-500 ease-in-out">
                                <a href="/hobby/numismatics" className="hover:text-blue-400"><li>Numismatics</li></a>
                                <a href="/hobby/philately" className="hover:text-blue-400"><li>Philately</li></a>
                                <a href="/hobby/marathon" className="hover:text-blue-400"><li>Marathon</li></a>
                                <a href="/hobby/planted-tank" className="hover:text-blue-400"><li>Planted Tank</li></a>
                            </ul>
                        </li>

                        {/* Hobby Dropdown */}
                        {/* <li className="relative group cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100">
                            Hobby
                            <ul className="absolute left-0 mt-2 w-40 flex-col rounded-lg bg-black/90 p-3 shadow-lg
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                 transition-opacity duration-300 delay-150">
                                <a href="/hobby/numismatics" className="hover:text-blue-400"><li>Numismatics</li></a>
                                <a href="/hobby/philately" className="hover:text-blue-400"><li>Philately</li></a>
                                <a href="/hobby/marathon" className="hover:text-blue-400"><li>Marathon</li></a>
                                <a href="/hobby/planted-tank" className="hover:text-blue-400"><li>Planted Tank</li></a>
                            </ul>
                        </li> */}



                        <a href="/contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
};
