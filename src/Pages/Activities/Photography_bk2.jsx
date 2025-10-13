// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Photography() {
//   const images = [
//     {
//       src: "https://i.ibb.co.com/cS20KqBK/464479215-10234627644092822-53697770713611689-n.jpg",
//       title: "Serenity of the Sea",
//       description: "Waves whispering timeless stories of calm and continuity along the endless horizon."
//     },
//     {
//       src: "https://i.ibb.co.com/Df6Cms3F/464568524-10234626539105198-4149117513183363690-n.jpg",
//       title: "Himalayan Majesty",
//       description: "The breathtaking snow-clad mountains of Nepal — a silent hymn to nature’s grandeur."
//     },
//     {
//       src: "https://i.ibb.co.com/zhGWPLfZ/464581264-10234627645252851-5120650510181641487-n.jpg",
//       title: "Whispers of the Hills",
//       description: "Rolling green hills kissed by morning mist — a portrait of peace and perspective."
//     },
//     {
//       src: "https://i.ibb.co.com/GQJhtRhM/464615507-10234619632492537-6220747310940903361-n.jpg",
//       title: "Dancing Fountain",
//       description: "A joyful burst of water and light — a perfect fusion of rhythm and reflection."
//     },
//     {
//       src: "https://i.ibb.co.com/ksjfCwq4/464642678-10234619632812545-987690551022993810-n.jpg",
//       title: "Monuments of the Trail",
//       description: "Sacred stones and prayer walls marking the journey to Everest Base Camp — where every step tells a story."
//     },
//     {
//       src: "https://i.ibb.co.com/xt7R3nTY/464790910-10234676364670806-5035018003337734613-n.jpg",
//       title: "Ashura Reflections",
//       description: "Capturing emotion and devotion during the Ashura festival — a frame filled with faith and humanity."
//     },
//     {
//       src: "https://i.ibb.co.com/DsgLywJ/465011346-10234722453623001-5878274913327744040-n.jpg",
//       title: "Mystic Sundarban",
//       description: "The tangled mangroves of Sundarban, where land and water weave stories of resilience and life."
//     },
//     {
//       src: "https://i.ibb.co.com/PGPzFP7v/465119552-10234733987151332-5550435829811249678-n.jpg",
//       title: "Fanush of Faith",
//       description: "Buddha Purnima evening — floating lanterns painting the sky with hope and serenity."
//     },
//     {
//       src: "https://i.ibb.co.com/v6BbbPZp/465180766-10234722457423096-6095276173133655906-n.jpg",
//       title: "Mountain Silence",
//       description: "A quiet valley view — where the mountains breathe peace and solitude."
//     },
//     {
//       src: "https://i.ibb.co.com/TDHz1T3g/466788269-10235065255752840-4828868870887474726-n.jpg",
//       title: "Rural Harmony",
//       description: "Life in motion — a candid glimpse of the simplicity and rhythm of rural Nepal."
//     },
//     {
//       src: "https://i.ibb.co.com/DfCbXD1X/508620964-10237969915407516-391364425361288190-n.jpg",
//       title: "Sacred Crafts",
//       description: "The hands of Nepali artisans shaping heritage into intricate handicrafts."
//     },
//     {
//       src: "https://i.ibb.co.com/Tx8BRvGx/513070316-10238155811574804-6080950539527150788-n.jpg",
//       title: "Echoes of Stone",
//       description: "A temple wall etched with time — culture and devotion preserved in detail."
//     },
//     {
//       src: "https://i.ibb.co.com/qLBwkz9Z/513101345-10238118880171542-6232547085210179338-n.jpg",
//       title: "Frosted Peaks",
//       description: "Where the world rises above clouds — the untouched stillness of Nepal’s highlands."
//     },
//     {
//       src: "https://i.ibb.co.com/9mpFv4RY/514254987-10238131297441966-6815766073644839405-n.jpg",
//       title: "Faith and Faces",
//       description: "Expressions of belief — the human side of spirituality captured in fleeting moments."
//     },
//     {
//       src: "https://i.ibb.co.com/sdqFR3yW/517937461-10238353438795361-7635985277836006309-n.jpg",
//       title: "Journey to the Base",
//       description: "Monuments and milestones — the soul of trekking toward Everest Base Camp."
//     },
//     {
//       src: "https://i.ibb.co.com/F4rkMv0G/526829048-10238610537182660-6853785944276265702-n.jpg",
//       title: "Tranquil Reflections",
//       description: "Still waters mirroring distant peaks — an ode to balance and beauty."
//     },
//     {
//       src: "https://i.ibb.co.com/1Gf56bLJ/529672306-10238698352817996-4795023224238807778-n.jpg",
//       title: "Life Along the Ridge",
//       description: "The winding paths and resting mules — everyday tales of mountain travel."
//     },
//     {
//       src: "https://i.ibb.co.com/pvkQ40Fk/532944455-10238782322037174-4221453608431283339-n.jpg",
//       title: "Colors of Culture",
//       description: "A vibrant frame celebrating the spirit, art, and diversity of Nepali life."
//     },
//   ];

//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const openModal = (index) => setSelectedIndex(index);
//   const closeModal = () => setSelectedIndex(null);
//   const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">
//       {/* Sidebar */}
//       <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
//         <div>
//           <h2 className="text-2xl font-semibold mb-2 text-blue-700">Photography</h2>
//           <p className="text-sm md:text-base text-gray-300 leading-relaxed">
//             From mountains to mangroves, faith to festivals — every frame captures a story,
//             a feeling, and a moment worth remembering.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-lg font-medium mb-2 font-bold">Photo Categories</h3>
//           <ul className="space-y-2 text-sm md:text-base">
//             <li><Link to="/photography/nature" className="hover:text-blue-600">🌿 Nature & Landscape</Link></li>
//             <li><Link to="/photography/culture" className="hover:text-blue-600">🎭 Culture & Festivals</Link></li>
//             <li><Link to="/photography/travel" className="hover:text-blue-600">🏔️ Travel & Adventure</Link></li>
//             <li><Link to="/photography/people" className="hover:text-blue-600">🧍 People & Portraits</Link></li>
//             <li><Link to="/photography/artisan" className="hover:text-blue-600">🪔 Handicrafts & Heritage</Link></li>
//           </ul>
//         </div>

//         <Link
//           to="/hobby"
//           className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm md:text-base transition"
//         >
//           ← Back to Hobby
//         </Link>
//       </aside>

//       {/* Gallery Section */}
//       <main className="lg:w-3/4 w-full p-4 sm:p-6">
//         <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 border-b border-gray-200 pb-2 sm:pb-3 text-blue-700">
//           Photo Gallery
//         </h1>

//         <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 transition"
//               onClick={() => openModal(index)}
//             >
//               <img
//                 src={img.src}
//                 alt={img.title}
//                 className="w-full object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Modal */}
//       {selectedIndex !== null && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//           <div className="relative bg-white rounded-xl shadow-lg w-full max-w-3xl p-4 sm:p-6">
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-4 text-gray-700 hover:text-red-600 text-2xl"
//             >
//               ✕
//             </button>

//             <img
//               src={images[selectedIndex].src}
//               alt={images[selectedIndex].title}
//               className="w-full h-[50vh] sm:h-[65vh] object-contain rounded-lg mb-4"
//             />
//             <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-1">
//               {images[selectedIndex].title}
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base mb-4">{images[selectedIndex].description}</p>

//             <div className="flex justify-between text-sm sm:text-base">
//               <button
//                 onClick={prevImage}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//               >
//                 ← Prev
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//               >
//                 Next →
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Photography() {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((p) => (p + 1) % images.length);
  const prevImage = () => setSelectedIndex((p) => (p - 1 + images.length) % images.length);

  const images = [
    {
      src: "https://i.ibb.co.com/cS20KqBK/464479215-10234627644092822-53697770713611689-n.jpg",
      title: "Serenity of the Sea",
      description: "Waves whispering timeless stories of calm and continuity along the endless horizon.",
    },
    {
      src: "https://i.ibb.co.com/Df6Cms3F/464568524-10234626539105198-4149117513183363690-n.jpg",
      title: "Himalayan Majesty",
      description: "The breathtaking snow-clad mountains of Nepal — a silent hymn to nature’s grandeur.",
    },
    {
      src: "https://i.ibb.co.com/zhGWPLfZ/464581264-10234627645252851-5120650510181641487-n.jpg",
      title: "Whispers of the Hills",
      description: "Rolling green hills kissed by morning mist — a portrait of peace and perspective.",
    },
    {
      src: "https://i.ibb.co.com/GQJhtRhM/464615507-10234619632492537-6220747310940903361-n.jpg",
      title: "Dancing Fountain",
      description: "A joyful burst of water and light — a perfect fusion of rhythm and reflection.",
    },
    {
      src: "https://i.ibb.co.com/ksjfCwq4/464642678-10234619632812545-987690551022993810-n.jpg",
      title: "Monuments of the Trail",
      description: "Sacred stones and prayer walls marking the journey to Everest Base Camp — where every step tells a story.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Photography</h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            From mountains to mangroves, faith to festivals — every frame captures a story,
            a feeling, and a moment worth remembering.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 font-bold">Photo Categories</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link to="/photography" className="hover:text-blue-600">📷 All</Link></li>
            <li><Link to="/photography/nature" className="hover:text-blue-600">🌿 Nature & Landscape</Link></li>
            <li><Link to="/photography/culture" className="hover:text-blue-600">🎭 Culture & Festivals</Link></li>
            <li><Link to="/photography/travel" className="hover:text-blue-600">🏔️ Travel & Adventure</Link></li>
            <li><Link to="/photography/people" className="hover:text-blue-600">🧍 People & Portraits</Link></li>
            <li><Link to="/photography/artisan" className="hover:text-blue-600">🪔 Handicrafts & Heritage</Link></li>
            <li><Link to="/photography/random" className="hover:text-blue-600">🌸 Random Realms</Link></li>
          </ul>
        </div>

        <Link
          to="/hobby"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm md:text-base transition"
        >
          ← Back to Hobby
        </Link>
      </aside>

      {/* Gallery / Child Page */}
      <main className="lg:w-3/4 w-full p-4 sm:p-6">
        {location.pathname === "/photography" ? (
          <>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 border-b border-gray-200 pb-2 sm:pb-3 text-blue-700">
              Photo Gallery
            </h1>

            <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 transition"
                  onClick={() => openModal(index)}
                >
                  <img src={img.src} alt={img.title} className="w-full object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </main>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-3xl p-4 sm:p-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-700 hover:text-red-600 text-2xl"
            >
              ✕
            </button>

            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="w-full h-[50vh] sm:h-[65vh] object-contain rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-1">
              {images[selectedIndex].title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {images[selectedIndex].description}
            </p>

            <div className="flex justify-between text-sm sm:text-base">
              <button onClick={prevImage} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                ← Prev
              </button>
              <button onClick={nextImage} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
