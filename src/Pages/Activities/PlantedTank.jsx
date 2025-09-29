
// import plantedTankImg from "../../assets/planted-tank.jpg";

// const PlantedTank = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
//       <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-4">
//         🚧 Under Construction
//       </h1>
//       <p className="text-lg opacity-70 mb-6 text-center">
//         The Planted Tank page is coming soon! Stay tuned for my aquarium setups and awards.
//       </p>

//       <img
//         src={plantedTankImg}
//         alt="Planted Tank"
//         className="rounded-lg shadow-lg max-w-md w-full mb-6 animate-pulse"
//       />

//       <div className="animate-pulse text-blue-500 text-4xl">
//         ⏳
//       </div>
//     </div>
//   );
// };

// export default PlantedTank;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const PlantedTank = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/plantedtank.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-5xl font-bold text-green-400"
        >
          Planted Tank
        </motion.h1>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="opacity-80 leading-relaxed">
          Planted aquariums are living art pieces that combine design, biology, and
          creativity. It’s about cultivating underwater ecosystems that thrive with life
          and balance.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-16">
        {["Aquascaping", "Rare Plants", "Aquatic Fauna"].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 text-center"
          >
            <h2 className="text-xl text-green-400 font-semibold mb-2">{item}</h2>
            <p className="text-sm opacity-70">
              Focusing on {item.toLowerCase()} in planted tanks.
            </p>
          </motion.div>
        ))}
      </section>

      {/* Back */}
      <div className="text-center pb-12">
        <Link
          to="/hobby"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-400 to-pink-500 hover:opacity-90 transition-all"
        >
          ← Back to Hobbies
        </Link>
      </div>
    </div>
  );
};
