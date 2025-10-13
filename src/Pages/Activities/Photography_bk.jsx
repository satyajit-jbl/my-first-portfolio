// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Photography() {
//   const images = [
//     {
//       src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg",
//       title: "Golden Hour Portrait",
//       description: "A serene portrait taken during the golden hour, capturing warm tones and natural light."
//     },
//     {
//       src: "https://i.ibb.co.com/4g8J11rd/486107473-2485898735096193-1881747041053549122-n.jpg",
//       title: "Reflection",
//       description: "A creative shot exploring reflection and contrast with mood lighting."
//     },
//     {
//       src: "https://i.ibb.co.com/HTKjncwF/486149599-2485898778429522-3350468653833891524-n.jpg",
//       title: "Street Vibes",
//       description: "Candid urban photography capturing human emotion and dynamic light."
//     },
//     {
//       src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg",
//       title: "Bokeh Dreams",
//       description: "A soft-focus portrait emphasizing dreamy background light and depth."
//     },
//     {
//       src: "https://i.ibb.co.com/ynvh2S3m/486543094-2485900785095988-7747044204479381236-n.jpg",
//       title: "Classic Black & White",
//       description: "Minimalist monochrome frame highlighting simplicity and texture."
//     },
//     {
//       src: "https://i.ibb.co.com/fzrQQ5c6/499439112-2540376179648448-5170119160465493533-n.jpg",
//       title: "Vintage Mood",
//       description: "Soft lighting and tones that evoke nostalgia and warmth."
//     },
//     {
//       src: "https://i.ibb.co.com/F4YBF97H/492826730-10237136838981126-6853411759074102099-n.jpg",
//       title: "Candid Smile",
//       description: "Capturing a moment of pure joy with natural expression."
//     },
//     {
//       src: "https://i.ibb.co.com/35Z6kz2v/496727306-10237355889177244-7968699852891201149-n.jpg",
//       title: "Nature Frame",
//       description: "Portrait framed by the beauty of the natural surroundings."
//     },
//     {
//       src: "https://i.ibb.co.com/b5tkYfXm/509230803-10237935168098855-3765548201291825629-n.jpg",
//       title: "Urban Lens",
//       description: "Exploring architectural patterns through portrait composition."
//     },
//     {
//       src: "https://i.ibb.co.com/gMwcZ4mT/509419121-10237935168698870-8736289557287779263-n.jpg",
//       title: "Soft Glow",
//       description: "A creative play of light and color balance in a portrait."
//     },
//     {
//       src: "https://i.ibb.co.com/b51VCp75/548200591-10239149003643985-7465849428731942176-n.jpg",
//       title: "The Journey",
//       description: "An expressive shot symbolizing movement and transition."
//     },
//   ];

//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const openModal = (index) => setSelectedIndex(index);
//   const closeModal = () => setSelectedIndex(null);
//   const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row text-gray-300">
//       {/* Left Sidebar */}
//       <aside className="md:w-1/4 w-full p-6 border-r border-gray-200 flex flex-col gap-6 mt-28">
//         <div>
//           <h2 className="text-2xl font-semibold mb-2 text-blue-700">Photography</h2>
//           <p className="text-sm text-gray-300 leading-relaxed">
//             Each image tells a story — a fleeting emotion, a timeless frame, or a subtle play of light.
//             Explore my creative journey through portraits, candid shots, and visual storytelling.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-lg font-medium mb-2">Photo Categories</h3>
//           <ul className="space-y-2">
//             <li><Link to="/photography/documentary" className="hover:text-blue-600">📷 Documentary Photography</Link></li>
//             <li><Link to="/photography/portrait" className="hover:text-blue-600">🧑 Portrait Photography</Link></li>
//             <li><Link to="/photography/nature" className="hover:text-blue-600">🌿 Nature Photography</Link></li>
//             <li><Link to="/photography/blackwhite" className="hover:text-blue-600">⚫ Black & White</Link></li>
//             <li><Link to="/photography/events" className="hover:text-blue-600">🎉 Event Photography</Link></li>
//           </ul>
//         </div>

//         <Link
//           to="/"
//           className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition"
//         >
//           ← Back to Home
//         </Link>
//       </aside>

//       {/* Right Gallery Section */}
//       <main className="md:w-3/4 w-full p-6">
//         <h1 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-3 text-blue-700">
//           Photo Gallery
//         </h1>

//         {/* Masonry Collage Grid */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
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

//       {/* Modal Section */}
//       {selectedIndex !== null && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <div className="relative bg-white rounded-xl shadow-lg max-w-3xl w-full p-4">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-3 text-gray-700 hover:text-red-600 text-xl"
//             >
//               ✕
//             </button>

//             <img
//               src={images[selectedIndex].src}
//               alt={images[selectedIndex].title}
//               className="w-full h-[70vh] object-contain rounded-lg mb-4"
//             />
//             <h2 className="text-xl font-semibold text-blue-700 mb-1">
//               {images[selectedIndex].title}
//             </h2>
//             <p className="text-gray-600 mb-4">{images[selectedIndex].description}</p>

//             <div className="flex justify-between">
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
import { Link } from "react-router-dom";

export default function Photography() {
  const images = [
    {
      src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg",
      title: "Golden Hour Portrait",
      description: "A serene portrait taken during the golden hour, capturing warm tones and natural light."
    },
    {
      src: "https://i.ibb.co.com/4g8J11rd/486107473-2485898735096193-1881747041053549122-n.jpg",
      title: "Reflection",
      description: "A creative shot exploring reflection and contrast with mood lighting."
    },
    {
      src: "https://i.ibb.co.com/HTKjncwF/486149599-2485898778429522-3350468653833891524-n.jpg",
      title: "Street Vibes",
      description: "Candid urban photography capturing human emotion and dynamic light."
    },
    {
      src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg",
      title: "Bokeh Dreams",
      description: "A soft-focus portrait emphasizing dreamy background light and depth."
    },
    {
      src: "https://i.ibb.co.com/ynvh2S3m/486543094-2485900785095988-7747044204479381236-n.jpg",
      title: "Classic Black & White",
      description: "Minimalist monochrome frame highlighting simplicity and texture."
    },
    {
      src: "https://i.ibb.co.com/fzrQQ5c6/499439112-2540376179648448-5170119160465493533-n.jpg",
      title: "Vintage Mood",
      description: "Soft lighting and tones that evoke nostalgia and warmth."
    },
    {
      src: "https://i.ibb.co.com/F4YBF97H/492826730-10237136838981126-6853411759074102099-n.jpg",
      title: "Candid Smile",
      description: "Capturing a moment of pure joy with natural expression."
    },
    {
      src: "https://i.ibb.co.com/35Z6kz2v/496727306-10237355889177244-7968699852891201149-n.jpg",
      title: "Nature Frame",
      description: "Portrait framed by the beauty of the natural surroundings."
    },
    {
      src: "https://i.ibb.co.com/b5tkYfXm/509230803-10237935168098855-3765548201291825629-n.jpg",
      title: "Urban Lens",
      description: "Exploring architectural patterns through portrait composition."
    },
    {
      src: "https://i.ibb.co.com/gMwcZ4mT/509419121-10237935168698870-8736289557287779263-n.jpg",
      title: "Soft Glow",
      description: "A creative play of light and color balance in a portrait."
    },
    {
      src: "https://i.ibb.co.com/b51VCp75/548200591-10239149003643985-7465849428731942176-n.jpg",
      title: "The Journey",
      description: "An expressive shot symbolizing movement and transition."
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Photography</h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Each image tells a story — a fleeting emotion, a timeless frame, or a subtle play of light.
            Explore my creative journey through portraits, candid shots, and visual storytelling.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 font-bold">Photo Categories</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link to="/photography/documentary" className="hover:text-blue-600">📷 Documentary Photography</Link></li>
            <li><Link to="/photography/portrait" className="hover:text-blue-600">🧑 Portrait Photography</Link></li>
            <li><Link to="/photography/nature" className="hover:text-blue-600">🌿 Nature Photography</Link></li>
            <li><Link to="/photography/blackwhite" className="hover:text-blue-600">⚫ Black & White</Link></li>
            <li><Link to="/photography/events" className="hover:text-blue-600">🎉 Event Photography</Link></li>
          </ul>
        </div>

        <Link
          to="/"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm md:text-base transition"
        >
          ← Back to Home
        </Link>
      </aside>

      {/* Gallery Section */}
      <main className="lg:w-3/4 w-full p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 border-b border-gray-200 pb-2 sm:pb-3 text-blue-700">
          Photo Gallery
        </h1>

        {/* Masonry / Collage layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 transition"
              onClick={() => openModal(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
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
            <p className="text-gray-600 text-sm sm:text-base mb-4">{images[selectedIndex].description}</p>

            <div className="flex justify-between text-sm sm:text-base">
              <button
                onClick={prevImage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                ← Prev
              </button>
              <button
                onClick={nextImage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
