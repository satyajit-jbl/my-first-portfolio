// import { useState, useEffect } from "react";

// const banknotes = [
//   { src: "https://i.ibb.co.com/1trqQH1R/N1-BEEJ-British-India-1000-rs-KGVI-Bombay-1.jpg", title: "BI-1000 Rupees(1945)", description: "British India 1000 Rupees note issued in 1945." },
//   { src: "https://i.ibb.co.com/NnkZs8f/423568721-2300767100128137-8357677093964001758-n.jpg", title: "Old Banknote", description: "A rare old banknote preserved from history." },
// ];

// export default function Banknotes() {
//   const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
//   const openLightbox = (index) => setLightbox({ isOpen: true, images: banknotes, currentIndex: index });
//   const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
//   const prevImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length }); };
//   const nextImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length }); };

//   useEffect(() => { document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto"; return () => { document.body.style.overflow = "auto"; }; }, [lightbox.isOpen]);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {banknotes.map((item, idx) => (
//         <div key={idx} className="rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => openLightbox(idx)}>
//           <img src={item.src} alt={item.title} className="w-full h-64 object-fit transition-transform duration-300 hover:scale-105" />
//           <div className="p-2 text-center">
//             <h4 className="text-green-300 font-semibold">{item.title}</h4>
//             {item.description && <p className="text-gray-300 text-sm">{item.description}</p>}
//           </div>
//         </div>
//       ))}

//       {lightbox.isOpen && (
//         <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4" onClick={closeLightbox}>
//           <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-green-400" onClick={closeLightbox}>✕</button>
//           <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-green-400 text-4xl p-2" onClick={prevImage}>‹</button>
//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-green-400 text-4xl p-2" onClick={nextImage}>›</button>
//           <img src={lightbox.images[lightbox.currentIndex].src} alt={lightbox.images[lightbox.currentIndex].title} className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4" />
//           <p className="text-white text-lg text-center">{lightbox.images[lightbox.currentIndex].title}</p>
//           {lightbox.images[lightbox.currentIndex].description && <p className="text-gray-300 text-sm text-center mt-2 px-4">{lightbox.images[lightbox.currentIndex].description}</p>}
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";

const banknotes = [
  {
    front: "https://i.ibb.co.com/1trqQH1R/N1-BEEJ-British-India-1000-rs-KGVI-Bombay-1.jpg",
    back: "https://i.ibb.co.com/QmYp5mh3/N1-BEEJ-British-India-1000-rs-KGVI-Bombay-2.jpg", // example reverse image
    title: "BI-1000 Rupees (1945)",
    description: "British India 1000 Rupees note issued in 1945.",
  },
  {
    front: "https://i.ibb.co.com/NnkZs8f/423568721-2300767100128137-8357677093964001758-n.jpg",
    back: "https://i.ibb.co.com/tHyZBtf/423568721-2300767100128137-8357677093964001759-n.jpg", // example reverse image
    title: "Old Banknote",
    description: "A rare old banknote preserved from history.",
  },
];

export default function Banknotes() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const openLightbox = (index) => setLightbox({ isOpen: true, images: banknotes, currentIndex: index });
  const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length,
    });
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length,
    });
  };

  useEffect(() => {
    document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightbox.isOpen]);

  return (
     <div className="min-h-screen p-6 text-gray-300">
            <h1 className="text-3xl font-semibold text-purple-500 border-b border-gray-700 pb-2">
                Bank Notes
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
          I primarily collect British India notes, which capture the legacy of colonial-era craftsmanship, as well as Dead Country banknotes — relics from nations and regimes that no longer exist. Each note in my collection tells a unique story of culture, economy, and transition, serving as a tangible link to the past.
        </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {banknotes.map((note, idx) => (
        <div
          key={idx}
          className="perspective w-full aspect-[3/2] cursor-pointer"
          onClick={() => openLightbox(idx)}
        >
          {/* Flip Card */}
          <div className="flip-card w-full h-full relative transition-transform duration-700 rounded-lg shadow-lg hover:shadow-2xl">
            {/* Front */}
            <img
              src={note.front}
              alt={`${note.title} Front`}
              className="flip-card-front w-full h-full absolute object-cover rounded-lg"
            />
            {/* Back */}
            <img
              src={note.back}
              alt={`${note.title} Back`}
              className="flip-card-back w-full h-full absolute object-cover rounded-lg"
            />
          </div>

          {/* Text Info */}
          <div className="text-center mt-2">
            <h4 className="text-green-300 font-semibold">{note.title}</h4>
            <p className="text-gray-300 text-sm">{note.description}</p>
          </div>
        </div>
      ))}

      {/* 🔹 Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          {/* Close & Nav Buttons */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-green-400"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-green-400 text-4xl p-2"
            onClick={prevImage}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-green-400 text-4xl p-2"
            onClick={nextImage}
          >
            ›
          </button>

          {/* Show Both Sides */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1">
              <img
                src={lightbox.images[lightbox.currentIndex].front}
                alt="Front"
                className="w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
              />
              <p className="text-gray-300 text-center mt-2">Front</p>
            </div>
            <div className="flex-1">
              <img
                src={lightbox.images[lightbox.currentIndex].back}
                alt="Back"
                className="w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
              />
              <p className="text-gray-300 text-center mt-2">Back</p>
            </div>
          </div>

          {/* Title & Description */}
          <p className="text-white text-lg text-center mt-6">
            {lightbox.images[lightbox.currentIndex].title}
          </p>
          {lightbox.images[lightbox.currentIndex].description && (
            <p className="text-gray-300 text-sm text-center mt-2 px-4">
              {lightbox.images[lightbox.currentIndex].description}
            </p>
          )}
        </div>
      )}
    </div>
    </div>
  );
}
