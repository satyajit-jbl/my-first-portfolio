// import { useState, useEffect } from "react";

// const coins = [
//   { src: "https://i.ibb.co.com/HLKc1gNg/1-1.jpg", title: "Tripura-Amara Manikkya(O)", description: "Obverse of Tripura-Amara Manikkya coin." },
//   { src: "https://i.ibb.co.com/cSxfVXb2/1-3.jpg", title: "Tripura-Amara Manikkya(R)", description: "Reverse of Tripura-Amara Manikkya coin." },
//   { src: "https://i.ibb.co.com/F4ntRpvw/2-1.jpg", title: "Tripura-Token(O)", description: "Obverse of Tripura-Token." },
//   { src: "https://i.ibb.co.com/Pzmq6k7P/2-2.jpg", title: "Tripura-Token(R)", description: "Reverse of Tripura-Token." },
// ];

// export default function Coins() {
//   const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

//   const openLightbox = (index) => setLightbox({ isOpen: true, images: coins, currentIndex: index });
//   const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
//   const prevImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length }); };
//   const nextImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length }); };

//   useEffect(() => { document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto"; return () => { document.body.style.overflow = "auto"; }; }, [lightbox.isOpen]);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {coins.map((item, idx) => (
//         <div key={idx} className="rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => openLightbox(idx)}>
//           <img src={item.src} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
//           <div className="p-2 text-center">
//             <h4 className="text-yellow-300 font-semibold">{item.title}</h4>
//             {item.description && <p className="text-gray-300 text-sm">{item.description}</p>}
//           </div>
//         </div>
//       ))}

//       {lightbox.isOpen && (
//         <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4" onClick={closeLightbox}>
//           <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-400" onClick={closeLightbox}>✕</button>
//           <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-yellow-400 text-4xl p-2" onClick={prevImage}>‹</button>
//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-yellow-400 text-4xl p-2" onClick={nextImage}>›</button>
//           <img src={lightbox.images[lightbox.currentIndex].src} alt={lightbox.images[lightbox.currentIndex].title} className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4" />
//           <p className="text-white text-lg text-center">{lightbox.images[lightbox.currentIndex].title}</p>
//           {lightbox.images[lightbox.currentIndex].description && <p className="text-gray-300 text-sm text-center mt-2 px-4">{lightbox.images[lightbox.currentIndex].description}</p>}
//         </div>
//       )}
//     </div>
//   );
// }