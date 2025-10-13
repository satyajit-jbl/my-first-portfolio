// Pages/Activities/Philately/RareStamps.jsx
import { useState } from "react";

export default function RareStamps() {
  const images = [
    { src: "https://i.ibb.co/XXX/rare-stamp1.jpg", title: "Stamp 1", description: "Rare stamp issued in 1945." },
    { src: "https://i.ibb.co/XXX/rare-stamp2.jpg", title: "Stamp 2", description: "First issue from Tripura." },
    // Add more images here
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen p-6 text-gray-300">
      <h1 className="text-3xl font-semibold mb-6 text-yellow-400 border-b border-gray-700 pb-2">
        Rare Stamps
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
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

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-900 rounded-xl shadow-lg w-full max-w-4xl p-4 sm:p-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-300 hover:text-yellow-400 text-2xl"
            >
              ✕
            </button>

            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-1">
              {images[selectedIndex].title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              {images[selectedIndex].description}
            </p>

            <div className="flex justify-between text-sm sm:text-base">
              <button
                onClick={prevImage}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg"
              >
                ← Prev
              </button>
              <button
                onClick={nextImage}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg"
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
