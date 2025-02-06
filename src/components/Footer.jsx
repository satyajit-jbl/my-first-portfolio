import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400">Satyajit Ghosh</h2>
          <p className="text-gray-400 text-sm mt-2">
            MERN Stack Developer | Passionate about building innovative web applications.
          </p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:satyajit_jbl@yahoo.com" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Satyajit Ghosh. All rights reserved.
      </div>
    </footer>
  );
};
