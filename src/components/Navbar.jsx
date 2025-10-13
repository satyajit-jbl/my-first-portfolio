// import { useState } from "react";
// import { BiMenu, BiX } from "react-icons/bi";
// import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
// import { HashLink } from "react-router-hash-link";

// export const Navbar = () => {
// const [isOpen, setIsOpen] = useState(false);

// const menuOpen = () => setIsOpen(!isOpen);

// const links = [
//     { name: "Home", to: "/#home" },
//     { name: "Tech", to: "/#tech" },
//     { name: "Projects", to: "/#projects" },
//     { name: "About Me", to: "/#about" },
//     { name: "Hobby", to: "/hobby" },
//     { name: "Contact", to: "/#contact" },
// ];

// return (
//     <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 py-6 text-white backdrop-blur-md md:justify-evenly">
//     {/* Logo */}
//     <a
//         href="/"
//         className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
//     >
//         SG
//     </a>

//     {/* Desktop Menu */}
//     <ul className="hidden md:flex gap-10 items-center">
//         {links.map((link) => (
//         <HashLink
//             key={link.name}
//             smooth
//             to={link.to}
//             className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//         >
//             <li>{link.name}</li>
//         </HashLink>
//         ))}
//     </ul>

//     {/* Social Icons */}
//     <ul className="hidden md:flex gap-5">
//         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//         <li className="cursor-pointer text-xl opacity-70 hover:text-red-500 hover:opacity-100"><BsYoutube /></li>
//         </a>
//         <a href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/" target="_blank" rel="noopener noreferrer">
//         <li className="cursor-pointer text-xl opacity-70 hover:text-blue-500 hover:opacity-100"><BsLinkedin /></li>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//         <li className="cursor-pointer text-xl opacity-70 hover:text-blue-500 hover:opacity-100"><BsTwitter /></li>
//         </a>
//         <a href="https://github.com/satyajit-jbl" target="_blank" rel="noopener noreferrer">
//         <li className="cursor-pointer text-xl opacity-70 hover:text-orange-500 hover:opacity-100"><BsGithub /></li>
//         </a>
//     </ul>

//     {/* Mobile Menu Toggle */}
//     {isOpen ? (
//         <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
//     ) : (
//         <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
//     )}

//     {/* Mobile Menu */}
//     {isOpen && (
//         <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-8 bg-black/90 p-8">
//         {links.map((link) => (
//             <HashLink
//             key={link.name}
//             smooth
//             to={link.to}
//             className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//             onClick={() => setIsOpen(false)} // close menu on click
//             >
//             <li>{link.name}</li>
//             </HashLink>
//         ))}
//         </div>
//     )}
//     </nav>
// );
// };

//now good for small devices with no logo in md, and no social in sm

// import { useState } from "react";
// import { BiMenu, BiX } from "react-icons/bi";
// import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
// import { HashLink } from "react-router-hash-link";

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuOpen = () => setIsOpen(!isOpen);

//   const links = [
//     { name: "Home", to: "/#home" },
//     { name: "Tech", to: "/#tech" },
//     { name: "Projects", to: "/#projects" },
//     { name: "About Me", to: "/#about" },
//     { name: "Hobby", to: "/hobby" },
//     { name: "Contact", to: "/#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 py-6 text-white backdrop-blur-md md:justify-evenly">

//       {/* Logo - hidden on md and smaller */}
//       <a
//         href="/"
//         className="hidden lg:block bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
//       >
//         SG
//       </a>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-6 md:gap-8 lg:gap-10 items-center text-sm md:text-base lg:text-lg">
//         {links.map((link) => (
//           <HashLink
//             key={link.name}
//             smooth
//             to={link.to}
//             className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//           >
//             <li>{link.name}</li>
//           </HashLink>
//         ))}
//       </ul>

//       {/* Social Icons */}
//       <ul className="hidden md:flex gap-5">
//         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//           <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
//             <BsYoutube />
//           </li>
//         </a>
//         <a href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/" target="_blank" rel="noopener noreferrer">
//           <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
//             <BsLinkedin />
//           </li>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
//             <BsTwitter />
//           </li>
//         </a>
//         <a href="https://github.com/satyajit-jbl" target="_blank" rel="noopener noreferrer">
//           <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
//             <BsGithub />
//           </li>
//         </a>
//       </ul>

//       {/* Mobile Menu Toggle */}
//       {isOpen ? (
//         <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
//       ) : (
//         <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
//       )}

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-8 bg-black/90 p-8">
//           {links.map((link) => (
//             <HashLink
//               key={link.name}
//               smooth
//               to={link.to}
//               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//               onClick={() => setIsOpen(false)}
//             >
//               <li>{link.name}</li>
//             </HashLink>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

//now in sm menubar with social link


import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuOpen = () => setIsOpen(!isOpen);

    const links = [
        { name: "Home", to: "/#home" },
        { name: "Tech", to: "/#tech" },
        { name: "Projects", to: "/#projects" },
        { name: "About Me", to: "/#about" },
        { name: "My Hobby", to: "/hobby" },
        { name: "Contact", to: "/#contact" },
    ];

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 py-6 text-white backdrop-blur-md md:justify-evenly">

            {/* Logo - hidden on medium and smaller */}
            <a
                href="/"
                className="hidden lg:block bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
            >
                SG
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 md:gap-8 lg:gap-10 items-center text-sm md:text-base lg:text-lg">
                {links.map((link) => (
                    <HashLink
                        key={link.name}
                        smooth
                        to={link.to}
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                    >
                        <li>{link.name}</li>
                    </HashLink>
                ))}
            </ul>

            {/* Desktop Social Icons */}
            <ul className="hidden md:flex gap-5">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 hover:text-red-500 hover:opacity-100"><BsYoutube /></li>
                </a>
                <a href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 hover:text-blue-500 hover:opacity-100"><BsLinkedin /></li>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 hover:text-blue-500 hover:opacity-100"><BsTwitter /></li>
                </a>
                <a href="https://github.com/satyajit-jbl" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 hover:text-orange-500 hover:opacity-100"><BsGithub /></li>
                </a>
            </ul>

            {/* Mobile Toggle + Social Icons */}
            <div className="flex md:hidden w-full justify-between items-center">
                {/* Menu Toggle */}
                {isOpen ? (
                    <BiX className="text-4xl cursor-pointer" onClick={menuOpen} />
                ) : (
                    <BiMenu className="text-4xl cursor-pointer" onClick={menuOpen} />
                )}

                {/* Social Icons */}
                <ul className="flex gap-3">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <li className="text-xl opacity-70 hover:text-red-500 hover:opacity-100"><BsYoutube /></li>
                    </a>
                    <a href="https://www.linkedin.com/in/satyajit-ghosh-09a165329/" target="_blank" rel="noopener noreferrer">
                        <li className="text-xl opacity-70 hover:text-blue-500 hover:opacity-100"><BsLinkedin /></li>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <li className="text-xl opacity-70 hover:text-blue-500 hover:opacity-100"><BsTwitter /></li>
                    </a>
                    <a href="https://github.com/satyajit-jbl" target="_blank" rel="noopener noreferrer">
                        <li className="text-xl opacity-70 hover:text-orange-500 hover:opacity-100"><BsGithub /></li>
                    </a>
                </ul>
            </div>

            {/* Mobile Menu */}
            {/* {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-8 bg-black/90 p-8">
          {links.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={() => setIsOpen(false)}
            >
              <li>{link.name}</li>
            </HashLink>
          ))}
        </div>
      )} */}
            {/* Mobile Menu */}
{isOpen && (
  <div className="absolute top-full left-0 flex flex-col items-start gap-2 bg-black/70 backdrop-blur-md p-3 rounded-md md:hidden border border-gray-700 min-w-[160px]">
    {links.map((link) => (
      <HashLink
        key={link.name}
        smooth
        to={link.to}
        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </HashLink>
    ))}
  </div>
)}

        </nav>
    );
};
