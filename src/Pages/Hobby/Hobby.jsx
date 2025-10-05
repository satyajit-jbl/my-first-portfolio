// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";


// const hobbies = [
//   {
//     title: "Philately",
//     description: "Exploring the world through stamps, collecting unique stories from across the globe.",
//     image: "/assets/philately.jpg",
//     link: "/philately",
//   },
//   {
//     title: "Numismatics",
//     description: "Passionate about coins and currencies, each holding a piece of history.",
//     image: "/assets/numismatics.jpg",
//     link: "/numismatics",
//   },
//   {
//     title: "Planted Tank",
//     description: "Creating lush underwater ecosystems combining nature and creativity.",
//     image: "/assets/plantedtank.jpg",
//     link: "/planted-tank",
//   },
//   {
//     title: "Running",
//     description: "Chasing goals, endurance, and freedom through the art of long-distance running.",
//     image: "/assets/run.jpg",
//     link: "/Marathon",
//   },
// ];

// const achievements = [
//   { img: "/assets/achieve1.jpg", caption: "Completed Half Marathon 2024" },
//   { img: "/assets/achieve2.jpg", caption: "National Stamp Expo 2023" },
//   { img: "/assets/achieve3.jpg", caption: "Planted Tank Award 2022" },
// ];

// export const Hobby = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
//     // <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
//     <div className=" text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="text-center py-16">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mt-10"
//         >
//           My Hobbies
//         </motion.h1>
//         <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
//           Beyond coding, I explore passions that inspire creativity, discipline, and joy.
//           Here are some of the hobbies that shape me.
//         </p>
//       </section>

//       {/* Achievements Carousel */}
//       {/* <section className="max-w-3xl mx-auto mb-16">
//         <Slider {...settings}>
//           {achievements.map((ach, idx) => (
//             <div key={idx} className="px-6">
//               <div className="rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src={ach.img}
//                   alt={ach.caption}
//                   className="w-full h-64 object-cover"
//                 />
//                 <p className="text-center py-4 bg-black/70">{ach.caption}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section> */}

//       {/* Hobby Cards */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-20">
//         {hobbies.map((hobby, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-lg overflow-hidden"
//           >
//             <img
//               src={hobby.image}
//               alt={hobby.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-5 flex flex-col justify-between h-52">
//               <h2 className="text-xl font-semibold text-blue-400">{hobby.title}</h2>
//               <p className="text-sm opacity-70 mt-2">{hobby.description}</p>
//               <Link
//                 to={hobby.link}
//                 className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition-all text-white text-center"
//               >
//                 Explore
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </section>
//     </div>
//   );
// };

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import images from src/assets
import philately from "../../assets/philately.jpg";
import numismatics from "../../assets/numismatics.jpg";
import plantedtank from "../../assets/plantedtank.jpg";
import run from "../../assets/run.jpg";
import photography from "../../assets/photography.jpg";

const hobbies = [
  {
    title: "Philately",
    description:
      "Exploring the world through stamps, collecting unique stories from across the globe.",
    image: philately,
    link: "/philately",
  },
  {
    title: "Numismatics",
    description:
      "Passionate about coins and currencies, each holding a piece of history.",
    image: numismatics,
    link: "/numismatics",
  },
  {
    title: "Planted Tank",
    description:
      "Creating lush underwater ecosystems combining nature and creativity.",
    image: plantedtank,
    link: "/planted-tank",
  },
  {
    title: "Running",
    description:
      "Chasing goals, endurance, and freedom through the art of long-distance running.",
    image: run,
    link: "/Marathon",
  },
  {
    title: "Photography",
    description:
      "Chasing goals, endurance, and freedom through the art of long-distance running.",
    image: photography,
    link: "/photography",
  },
];

export const Hobby = () => {
  return (
    <div className="text-white min-h-screen px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mt-10"
        >
          My Hobbies
        </motion.h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
          Beyond coding, I explore passions that inspire creativity, discipline, and joy.
          Here are some of the hobbies that shape me.
        </p>
      </section>

      {/* Hobby Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={hobby.image}
              alt={hobby.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-52">
              <h2 className="text-xl font-semibold text-blue-400">{hobby.title}</h2>
              <p className="text-sm opacity-70 mt-2">{hobby.description}</p>
              <Link
                to={hobby.link}
                className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition-all text-white text-center"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
