// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export const Numismatics = () => {
//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
//       {/* Hero */}
//       <section className=" h-72 flex items-center justify-center bg-cover bg-center" //relative removed for scrolling problem
//         style={{ backgroundImage: "url('/assets/numismatics.jpg')" }}>
//         <div className="absolute inset-0 bg-black/60" />
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className=" z-10 text-5xl font-bold text-yellow-400" //relative removed for scrolling problem
//         >
//           Numismatics
//         </motion.h1>
//       </section>

//       {/* Description */}
//       <section className="max-w-4xl mx-auto py-12 px-6 text-center">
//         <p className="opacity-80 leading-relaxed">
//           Numismatics is the study and collection of coins, currencies, and medals. Each
//           piece holds stories of civilizations, trade, and artistry, making it a true
//           window into history.
//         </p>
//       </section>

//       {/* Highlights */}
//       <section className="grid md:grid-cols-3 gap-6 px-8 pb-16">
//         {["Ancient Coins", "Rare Banknotes", "Medallions"].map((item, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.05 }}
//             className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 text-center"
//           >
//             <h2 className="text-xl text-yellow-400 font-semibold mb-2">{item}</h2>
//             <p className="text-sm opacity-70">
//               Collecting unique and historical {item.toLowerCase()}.
//             </p>
//           </motion.div>
//         ))}
//       </section>

//       {/* Back */}
//       <div className="text-center pb-12">
//         <Link
//           to="/hobby"
//           className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 hover:opacity-90 transition-all"
//         >
//           ← Back to Hobbies
//         </Link>
//       </div>
//     </div>
//   );
// };

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Numismatics = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Hero */}
      <section
        className="relative h-72 flex items-center justify-center bg-cover bg-center pt-24"
        style={{ backgroundImage: "url('/assets/numismatics.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-5xl font-bold text-yellow-400"
        >
          Numismatics
        </motion.h1>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="opacity-80 leading-relaxed">
          Numismatics is the study and collection of coins, currencies, and medals. Each
          piece holds stories of civilizations, trade, and artistry, making it a true
          window into history.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-16">
        {["Ancient Coins", "Rare Banknotes", "Medallions"].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 text-center"
          >
            <h2 className="text-xl text-yellow-400 font-semibold mb-2">{item}</h2>
            <p className="text-sm opacity-70">
              Collecting unique and historical {item.toLowerCase()}.
            </p>
          </motion.div>
        ))}
      </section>

      {/* Back */}
      <div className="text-center pb-12">
        <Link
          to="/hobby"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 hover:opacity-90 transition-all"
        >
          ← Back to Hobbies
        </Link>
      </div>
    </div>
  );
};
