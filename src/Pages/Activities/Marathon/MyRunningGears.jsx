import { useState, useEffect } from "react";

const gears = [
  {
    src: "https://i.ibb.co.com/QvBjV7mm/61-HY1u4-Gm-GL-AC-UY1000.jpg",
    title: "Running Belt with Hydration Bottle",
    description: "A must-have for runners who go the distance. This belt keeps water within easy reach and essentials safe with bounce-free comfort. Whether it’s a short jog or a marathon, hydration is always at hand.",
  },
  {
    src: "https://i.ibb.co.com/QjvVmDn5/545463451-2065088194231945-1364621693800788562-n.jpg",
    title: "ASICS - SUPERBLAST 2",
    description: "The SUPERBLAST shoe is the newest hero of the BLAST series. It creates a lightweight and responsive ride that makes it functional for long runs, tempo runs, and everything in between.",
  },
  {
    src: "https://i.ibb.co.com/PZ5bLW0D/1012b904-001-3-1.jpg",
    title: "ASICS - GEL-KAYANO™ 32 LUXE",
    description: "FF BLAST™ PLUS foam midsole is combined with a higher midsole stack height while reducing it's weight to provide a more balanced experience making training feel smoother and more comfortable.",
  },
  {
    src: "https://i.ibb.co.com/kgMkWyCh/clip-image00140.jpg",
    title: "Amazfit Cheetah Pro GPS Watch",
    description: "Track my runs with precision using the Amazfit Cheetah Pro GPS Watch. Features include real-time GPS tracking, heart rate monitoring, activity insights, and long battery life — My ultimate running companion.",
  },
  {
    src: "https://i.ibb.co.com/dsmcd6bB/GX0709-HM2.jpg",
    title: "Adidas DURAMO SL",
    description: "Comfort meets performance in these versatile running shoes. With a sleek design, responsive midsole, and durable outsole, the DURAMO SL keeps me moving mile after mile.",
  },
];

export default function MyRunningGears() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openLightbox = (index) =>
    setLightbox({ isOpen: true, images: gears, currentIndex: index });
  const closeLightbox = () =>
    setLightbox({ ...lightbox, isOpen: false });
  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox({
      ...lightbox,
      currentIndex:
        (lightbox.currentIndex - 1 + lightbox.images.length) %
        lightbox.images.length,
    });
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox({
      ...lightbox,
      currentIndex:
        (lightbox.currentIndex + 1) % lightbox.images.length,
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
      <h1 className="text-3xl font-semibold text-yellow-400 border-b border-gray-700 pb-2">
        My Running Gears
      </h1>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
        A curated collection of my favorite running essentials: from shoes and watches to hydration packs and apparel. Every item here has been tested on the road, trail, and race day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gears.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div
              className="w-full h-64 overflow-hidden"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-56 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Title & Description */}
            <div className="p-2 text-center">
              <h4 className="text-indigo-300 font-semibold">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-gray-300 text-sm">{item.description}</p>
              )}
            </div>
          </div>
        ))}

        {/* Lightbox */}
        {lightbox.isOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-indigo-400"
              onClick={closeLightbox}
            >
              ✕
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl p-2"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl p-2"
              onClick={nextImage}
            >
              ›
            </button>

            <img
              src={lightbox.images[lightbox.currentIndex].src}
              alt={lightbox.images[lightbox.currentIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4"
            />
            <p className="text-white text-lg text-center">
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
