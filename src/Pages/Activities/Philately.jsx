
// import philatelyImg from "../../assets/philately.jpg"; 

// const Philately = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
//       <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-4">
//         🚧 Under Construction
//       </h1>
//       <p className="text-lg opacity-70 mb-6 text-center">
//         The Philately page is coming soon! Stay tuned for updates on my stamp collection and achievements.
//       </p>

//       <img
//         src={philatelyImg}
//         alt="Philately"
//         className="rounded-lg shadow-lg max-w-md w-full mb-6 animate-pulse"
//       />

//       <div className="animate-pulse text-blue-500 text-4xl">
//         ⏳
//       </div>
//     </div>
//   );
// };

// export default Philately;


// src/Pages/Hobby/Philately.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Philately = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/philately.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-5xl font-bold text-blue-400"
        >
          Philately
        </motion.h1>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="opacity-80 leading-relaxed">
          Philately, the collection and study of postage stamps, is more than a hobby—
          it’s a journey through history, culture, and art. Every stamp tells a story of
          its country, time, and people.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-16">
        {["Rare Stamps", "World Expo Visits", "First Day Covers"].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 text-center"
          >
            <h2 className="text-xl text-pink-400 font-semibold mb-2">{item}</h2>
            <p className="text-sm opacity-70">
              A special collection related to {item.toLowerCase()}.
            </p>
          </motion.div>
        ))}
      </section>

      {/* Back */}
      <div className="text-center pb-12">
        <Link
          to="/hobby"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition-all"
        >
          ← Back to Hobbies
        </Link>
      </div>
    </div>
  );
};
