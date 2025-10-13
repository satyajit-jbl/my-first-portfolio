
// import marathonImg from "../../assets/marathon.jpg";

// const Marathon = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
//       <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-4">
//         🚧 Under Construction
//       </h1>
//       <p className="text-lg opacity-70 mb-6 text-center">
//         The Marathon page is coming soon! Stay tuned for my running events and achievements.
//       </p>

//       <img
//         src={marathonImg}
//         alt="Marathon"
//         className="rounded-lg shadow-lg max-w-md w-full mb-6 animate-pulse"
//       />

//       <div className="animate-pulse text-blue-500 text-4xl">
//         ⏳
//       </div>
//     </div>
//   );
// };

// export default Marathon;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Marathon = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/run.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-5xl font-bold text-red-400"
        >
          Running
        </motion.h1>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="opacity-80 leading-relaxed">
          Running is not just a sport—it’s a lifestyle. From early morning jogs to
          marathon races, running teaches endurance, discipline, and self-discovery.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-16">
        {["Marathons", "Trail Runs", "Training"].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 text-center"
          >
            <h2 className="text-xl text-red-400 font-semibold mb-2">{item}</h2>
            <p className="text-sm opacity-70">
              Focused achievements in {item.toLowerCase()}.
            </p>
          </motion.div>
        ))}
      </section>

      {/* Back */}
      <div className="text-center pb-12">
        <Link
          to="/hobby"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-400 to-pink-500 hover:opacity-90 transition-all"
        >
          ← Back to Hobbies
        </Link>
      </div>
    </div>
  );
};
