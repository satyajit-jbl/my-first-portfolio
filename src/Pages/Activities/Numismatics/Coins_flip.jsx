import { useState, useEffect } from "react";

const coins = [
  {
    head: "https://i.ibb.co.com/HLKc1gNg/1-1.jpg",
    tail: "https://i.ibb.co.com/cSxfVXb2/1-3.jpg",
    title: "Tripura-Amara Manikkya",
    description: "Obverse & Reverse",
  },
  {
    head: "https://i.ibb.co.com/F4ntRpvw/2-1.jpg",
    tail: "https://i.ibb.co.com/Pzmq6k7P/2-2.jpg",
    title: "Tripura-Token",
    description: "Obverse & Reverse",
  },
];

export default function Coins() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const openLightbox = (index) => setLightbox({ isOpen: true, images: coins, currentIndex: index });
  const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length });
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length });
  };

  useEffect(() => {
    document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightbox.isOpen]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {coins.map((coin, idx) => (
        <div
          key={idx}
          className="perspective w-full aspect-square cursor-pointer"
          onClick={() => openLightbox(idx)}
        >
          {/* Flip card container */}
          <div className="flip-card w-full h-full relative transition-transform duration-700 rounded-lg shadow-lg hover:shadow-2xl">
            {/* Front - Head */}
            <img
              src={coin.head}
              alt={`${coin.title} Head`}
              className="flip-card-front w-full h-full absolute rounded-lg"
            />
            {/* Back - Tail */}
            <img
              src={coin.tail}
              alt={`${coin.title} Tail`}
              className="flip-card-back w-full h-full absolute rounded-lg"
            />
          </div>

          {/* Title & Description */}
          <div className="text-center mt-2">
            <h4 className="text-yellow-300 font-semibold">{coin.title}</h4>
            <p className="text-gray-300 text-sm">{coin.description}</p>
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
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-400"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-yellow-400 text-4xl p-2"
            onClick={prevImage}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-yellow-400 text-4xl p-2"
            onClick={nextImage}
          >
            ›
          </button>
          <img
            src={lightbox.images[lightbox.currentIndex].head}
            alt={lightbox.images[lightbox.currentIndex].title}
            className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4"
          />
          <p className="text-white text-lg text-center">{lightbox.images[lightbox.currentIndex].title}</p>
          {lightbox.images[lightbox.currentIndex].description && (
            <p className="text-gray-300 text-sm text-center mt-2 px-4">
              {lightbox.images[lightbox.currentIndex].description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// for index.css
/* for coin rotaion */
.perspective {
  perspective: 1000px;
}

.flip-card {
  transform-style: preserve-3d;
  transition: transform 0.7s;
}

.perspective:hover .flip-card {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.5rem; 
}

.flip-card-back {
  transform: rotateY(180deg);
}
