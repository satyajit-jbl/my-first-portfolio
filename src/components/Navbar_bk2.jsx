import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => setIsOpen(!isOpen);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/tech", label: "Tech" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About Me" },
    { path: "/contact", label: "Contact" },
    { path: "/philately", label: "Philately" },
    { path: "/numismatics", label: "Numismatics" },
    { path: "/marathon", label: "Marathon" },
    { path: "/planted-tank", label: "Planted Tank" },
  ];

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 md:px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      {/* Logo */}
      <Link
        to="/"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        SG
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <ul className="hidden md:flex gap-5">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <BsYoutube />
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsTwitter />
          </li>
        </a>
        <a
          href="https://github.com/satyajit-jbl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
            <BsGithub />
          </li>
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-5">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <BsYoutube />
              </li>
            </a>

            <a
              href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <BsLinkedin />
              </li>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <BsTwitter />
              </li>
            </a>
            <a
              href="https://github.com/satyajit-jbl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                <BsGithub />
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};
