// import { useState, useEffect } from "react";

// const exhibitions = [
//   { src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg", title: "National Expo 2023", description: "Displayed my collection in National Expo 2023." },
//   { src: "https://i.ibb.co.com/HTKjncwF/486149599-2485898778429522-3350468653833891524-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
//   { src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
// ];

// export default function Exhibitions() {
//   const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

//   const openLightbox = (index) => setLightbox({ isOpen: true, images: exhibitions, currentIndex: index });
//   const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
//   const prevImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length }); };
//   const nextImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length }); };

//   useEffect(() => { document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto"; return () => { document.body.style.overflow = "auto"; }; }, [lightbox.isOpen]);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {exhibitions.map((item, idx) => (
//         <div key={idx} className="rounded-lg shadow-lg overflow-hidden cursor-pointer">
//           {/* Image */}
//           <div className="w-full aspect-square overflow-hidden" onClick={() => openLightbox(idx)}>
//             <img src={item.src} alt={item.title} className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" />
//           </div>
//           {/* Title & Description */}
//           <div className="p-2 text-center">
//             <h4 className="text-purple-300 font-semibold">{item.title}</h4>
//             {item.description && <p className="text-gray-300 text-sm">{item.description}</p>}
//           </div>
//         </div>
//       ))}

//       {lightbox.isOpen && (
//         <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4" onClick={closeLightbox}>
//           <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-400" onClick={closeLightbox}>✕</button>
//           <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-purple-400 text-4xl p-2" onClick={prevImage}>‹</button>
//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-purple-400 text-4xl p-2" onClick={nextImage}>›</button>
//           <img src={lightbox.images[lightbox.currentIndex].src} alt={lightbox.images[lightbox.currentIndex].title} className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4" />
//           <p className="text-white text-lg text-center">{lightbox.images[lightbox.currentIndex].title}</p>
//           {lightbox.images[lightbox.currentIndex].description && <p className="text-gray-300 text-sm text-center mt-2 px-4">{lightbox.images[lightbox.currentIndex].description}</p>}
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";

export default function Exhibitions() {
  const exhibitions = [
    {
      src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg",
      title: "National Expo 2023",
      description: "Displayed my collection in National Expo 2023."
    },
    {
      src: "https://i.ibb.co.com/HTKjncwF/486149599-2485898778429522-3350468653833891524-n.jpg",
      title: "Coin Fair 2022",
      description: "Participated in Coin Fair 2022."
    },
    {
      src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg",
      title: "Coin Fair 2022",
      description: "Participated in Coin Fair 2022."
    },
    {
      src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg",
      title: "National Expo 2023",
      description: "Displayed my collection in National Expo 2023."
    },
    {
      src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg",
      title: "Coin Fair 2022",
      description: "Participated in Coin Fair 2022."
    },
    {
      src: "https://i.ibb.co.com/F4YBF97H/492826730-10237136838981126-6853411759074102099-n.jpg",
      title: "Coin Fair 2022",
      description: "Participated in Coin Fair 2022."
    },
    {
      src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg",
      title: "National Expo 2023",
      description: "Displayed my collection in National Expo 2023."
    },
    {
      src: "https://i.ibb.co.com/HTKjncwF/486149599-2485898778429522-3350468653833891524-n.jpg",
      title: "Coin Fair 2022",
      description: "Participated in Coin Fair 2022."
    },
    {
      src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg",
      title: "Coin Fair 2022",
      description: "Participated in Coin Fair 2022."
    },
    // Add more exhibition images here
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % exhibitions.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + exhibitions.length) % exhibitions.length);

  return (
    <div className="min-h-screen p-6 text-gray-300">
      <h1 className="text-3xl font-semibold text-purple-500 border-b border-gray-700 pb-2">
                Exhibition Gallary
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                Here includes photographs of exhibitions I have participated in and visited, where I had the privilege of meeting renowned collectors, great photographers, and history enthusiasts. Through the exhibition we celebrate the rich heritage and enduring legacy of currency from past civilizations.
            </p>

      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
        {exhibitions.map((img, i) => (
          <div
            key={i}
            onClick={() => openModal(i)}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:opacity-90 transition"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-900 rounded-xl shadow-lg w-full max-w-4xl p-4 sm:p-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-300 hover:text-purple-500 text-2xl"
            >
              ✕
            </button>

            <img
              src={exhibitions[selectedIndex].src}
              alt={exhibitions[selectedIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-purple-500 mb-1">
              {exhibitions[selectedIndex].title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              {exhibitions[selectedIndex].description}
            </p>

            <div className="flex justify-between text-sm sm:text-base">
              <button
                onClick={prevImage}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
              >
                ← Prev
              </button>
              <button
                onClick={nextImage}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
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
