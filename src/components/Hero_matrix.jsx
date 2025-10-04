// import { useEffect, useRef } from "react";
// import image from "../../public/profilePic.jpg";
// import { motion } from "framer-motion";

// export const Hero = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set canvas size
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const letters = "01<>[]{}$#&*/=+-%".split(""); // coding vibe characters
//     const fontSize = 16;
//     const columns = canvas.width / fontSize;
//     const drops = Array(Math.floor(columns)).fill(1);

//     const draw = () => {
//       ctx.fillStyle = "rgba(0,0,0,0.08)"; // slight trail effect
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "#00FF41"; // neon green matrix
//       ctx.font = `${fontSize}px monospace`;

//       drops.forEach((y, i) => {
//         const text = letters[Math.floor(Math.random() * letters.length)];
//         ctx.fillText(text, i * fontSize, y * fontSize);

//         if (y * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }
//         drops[i]++;
//       });
//     };

//     const interval = setInterval(draw, 50);

//     // Handle resize
//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div
//       id="home"
//       className="relative flex min-h-screen w-full items-center justify-center px-16 py-20 md:px-32 overflow-hidden"
//     >
//       {/* === Matrix Background === */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 z-0"
//       ></canvas>

//       {/* === Foreground Content === */}
//       <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-white">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <img
//             src={image}
//             alt="Profile"
//             className="w-[200px] md:w-[250px] cursor-pointer rounded-xl shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
//         >
//           <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-bold whitespace-nowrap text-[clamp(2rem,5vw,5rem)]">
//             Satyajit Ghosh
//           </h1>
//           <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
//             Fullstack Developer
//           </h3>
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             download
//             className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600"
//           >
//             Resume
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

import { useEffect, useRef } from "react";
import image from "../../public/profilePic.jpg";
import { motion } from "framer-motion";

export const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Make canvas always full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const letters = "01<>[]{}$#&*/=+-%".split("");
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)"; // transparent bg for trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00FF41"; // neon green
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);

    window.addEventListener("resize", setCanvasSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* === Matrix Background === */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full"></canvas>

      {/* === Foreground Content === */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-white px-6 text-center">
        {/* === Profile Image with Glow + Animation === */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-xl blur-3xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 opacity-70 animate-pulse"></div>
          <img
            src={image}
            alt="Profile"
            className="relative w-[200px] md:w-[250px] rounded-xl shadow-2xl shadow-indigo-800 ring-4 ring-indigo-500/40 transition-transform duration-500 hover:scale-110 hover:rotate-3"
          />
        </motion.div>

        {/* === Text === */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-bold whitespace-nowrap text-[clamp(2rem,5vw,5rem)] drop-shadow-lg">
            Satyajit Ghosh
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl drop-shadow">
            Fullstack Developer
          </h3>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="rounded-lg border border-indigo-600 bg-black px-6 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};
