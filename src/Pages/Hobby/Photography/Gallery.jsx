import { useState } from "react";

export default function Gallery({ title, images }) {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentIndex: 0,
  });

  const openLightbox = (index) => setLightbox({ isOpen: true, currentIndex: index });
  const closeLightbox = (e) => {
    e.stopPropagation();
    setLightbox({ isOpen: false, currentIndex: 0 });
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % images.length,
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + images.length) % images.length,
    }));
  };

  return (
    <div className="relative">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 border-b border-gray-200 pb-2 text-blue-700">
        {title}
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openLightbox(i)}
            className="overflow-hidden rounded-xl shadow-md hover:opacity-90 cursor-pointer transition"
          >
            <img src={img.src} alt={img.title} className="w-full object-cover rounded-xl" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-6xl p-2"
            onClick={prevImage}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-6xl p-2"
            onClick={nextImage}
          >
            ›
          </button>

          <div className="flex flex-col items-center w-full max-w-5xl overflow-y-auto">
            <img
              src={images[lightbox.currentIndex].src}
              alt={images[lightbox.currentIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4"
            />
            <p className="text-white text-lg text-center">{images[lightbox.currentIndex].title}</p>
            {images[lightbox.currentIndex].description && (
              <p className="text-gray-300 text-sm text-center mt-2 px-4">
                {images[lightbox.currentIndex].description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
