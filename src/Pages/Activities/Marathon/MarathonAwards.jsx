// import { useState, useEffect } from "react";

// const awards = [
//   { src: "https://i.ibb.co.com/F4YBF97H/492826730-10237136838981126-6853411759074102099-n.jpg", title: "Best Collection Award", description: "Awarded for excellence in coin collection." },
//   { src: "https://i.ibb.co.com/35Z6kz2v/496727306-10237355889177244-7968699852891201149-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
//   { src: "https://i.ibb.co.com/b51VCp75/548200591-10239149003643985-7465849428731942176-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
// ];

// export default function Awards() {
//   const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

//   const openLightbox = (index) => setLightbox({ isOpen: true, images: awards, currentIndex: index });
//   const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
//   const prevImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length }); };
//   const nextImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length }); };

//   useEffect(() => { document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto"; return () => { document.body.style.overflow = "auto"; }; }, [lightbox.isOpen]);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {awards.map((item, idx) => (
//         <div key={idx} className="rounded-lg shadow-lg overflow-hidden cursor-pointer">
//           {/* Image */}
//           <div className="w-full aspect-square overflow-hidden" onClick={() => openLightbox(idx)}>
//             <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
//           </div>
//           {/* Title & Description */}
//           <div className="p-2 text-center">
//             <h4 className="text-indigo-300 font-semibold">{item.title}</h4>
//             {item.description && <p className="text-gray-300 text-sm">{item.description}</p>}
//           </div>
//         </div>
//       ))}

//       {lightbox.isOpen && (
//         <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4" onClick={closeLightbox}>
//           <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-indigo-400" onClick={closeLightbox}>✕</button>
//           <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl p-2" onClick={prevImage}>‹</button>
//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl p-2" onClick={nextImage}>›</button>
//           <img src={lightbox.images[lightbox.currentIndex].src} alt={lightbox.images[lightbox.currentIndex].title} className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4" />
//           <p className="text-white text-lg text-center">{lightbox.images[lightbox.currentIndex].title}</p>
//           {lightbox.images[lightbox.currentIndex].description && <p className="text-gray-300 text-sm text-center mt-2 px-4">{lightbox.images[lightbox.currentIndex].description}</p>}
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";

const awards = [
    { src: "https://i.ibb.co.com/tPQ4Q3JF/Certificate-Moheshkhali-Island-Half-Marathon-2025-page-0001.jpg", title: "Meheshkhali island Half Marathon 2025", description: "September 12, 2025" },
    { src: "https://i.ibb.co.com/XxPnDD2b/Medal.jpg", title: "Meheshkhali island Half Marathon 2025", description: "September 12, 2025" },
    { src: "https://i.ibb.co.com/pvYbLLhh/431755392-10232713341836462-2613566074494506479-n.jpg", title: "BYLC Running with Purpose 2024", description: "March 08, 2024" },
    { src: "https://i.ibb.co.com/TB3Kc36t/BYLC-7-5-Marathon-Run-Certificate-page-0001.jpg", title: "BYLC Running with Purpose 2024", description: "March 08, 2024" },
    { src: "https://i.ibb.co.com/ZzHS675x/c3-fb.jpg", title: "Cox's Bazar Run 2025", description: "April 19, 2025" },
    { src: "https://i.ibb.co.com/LwbsZr1/C4-fb.jpg", title: "Cox's Bazar Run 2025", description: "April 19, 2025" },
    { src: "https://i.ibb.co.com/hJccYFLs/G-10562-page-0001.jpg", title: "CU Runners 10K 2025", description: "March 25, 2025" },
    { src: "https://i.ibb.co.com/WW16G8WS/Whats-App-Image-2025-05-11-at-23-40-29-cc99b522.jpg", title: "CU Runners 10K 2025", description: "March 25, 2025" },
    { src: "https://i.ibb.co.com/KpCfGcTx/509230803-10237935168098855-3765548201291825629-n.jpg", title: "Joy Bangla Marathon", description: "June 07, 2024" },
    { src: "https://i.ibb.co.com/ns26YQq1/Joy-Bangla-Half-Marathon-Certificate.jpg", title: "Joy Bangla Marathon", description: "June 07, 2024" },
    { src: "https://i.ibb.co.com/KjYd2Wn6/UCR.jpg", title: "UCR SUMMER 10KM RUN-2024", description: "July 19, 2024" },
    { src: "https://i.ibb.co.com/xtz79bWS/UCR.jpg", title: "UCR SUMMER 10KM RUN-2024", description: "July 19, 2024" },
];

export default function MarathonAwards() {
    const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

    const openLightbox = (index) => setLightbox({ isOpen: true, images: awards, currentIndex: index });
    const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
    const prevImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length }); };
    const nextImage = (e) => { e.stopPropagation(); setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length }); };

    useEffect(() => { document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto"; return () => { document.body.style.overflow = "auto"; }; }, [lightbox.isOpen]);

    return (
        <div className="min-h-screen p-6 text-gray-300">
            <h1 className="text-3xl font-semibold text-yellow-400 border-b border-gray-700 pb-2">
                Awards & Appreciations
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                Though not remarkable, these awards and appreciations tell a story of perseverance and achievement. I have received them over time for my dedication and passion in numismatics. Through these honors, I celebrate the journey, growth, and shared enthusiasm that continue to drive my pursuits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {awards.map((item, idx) => (
                    <div key={idx} className="rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        {/* Image */}
                        <div className="w-full h-64 overflow-hidden" onClick={() => openLightbox(idx)}>
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-56 object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        {/* Title & Description */}
                        <div className="p-2 text-center">
                            <h4 className="text-indigo-300 font-semibold">{item.title}</h4>
                            {item.description && <p className="text-gray-300 text-sm">{item.description}</p>}
                        </div>
                    </div>
                ))}

                {lightbox.isOpen && (
                    <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4" onClick={closeLightbox}>
                        <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-indigo-400" onClick={closeLightbox}>✕</button>
                        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl p-2" onClick={prevImage}>‹</button>
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl p-2" onClick={nextImage}>›</button>
                        <img
                            src={lightbox.images[lightbox.currentIndex].src}
                            alt={lightbox.images[lightbox.currentIndex].title}
                            className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4"
                        />
                        <p className="text-white text-lg text-center">{lightbox.images[lightbox.currentIndex].title}</p>
                        {lightbox.images[lightbox.currentIndex].description && <p className="text-gray-300 text-sm text-center mt-2 px-4">{lightbox.images[lightbox.currentIndex].description}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
