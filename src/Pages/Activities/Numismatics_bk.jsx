import { useState } from "react";
import { Link } from "react-router-dom";

export default function Numismatics() {
  const coins = [
    { src: "https://i.ibb.co.com/HLKc1gNg/1-1.jpg", title: "Tripura-Amara Manikkya(O)" },
    { src: "https://i.ibb.co.com/cSxfVXb2/1-3.jpg", title: "ripura-Amara Manikkya(R)" },
    { src: "https://i.ibb.co.com/F4ntRpvw/2-1.jpg", title: "Tripura-Token(O)" },
    { src: "https://i.ibb.co.com/Pzmq6k7P/2-2.jpg", title: "Tripura-Token(R)" },
    { src: "https://i.ibb.co.com/Swm1dRvX/5-1.jpg", title: "Tripura-Dhannya Manikkya(O)" },
    { src: "https://i.ibb.co.com/9kT0kmLD/5-3.jpg", title: "Tripura-Dhannya Manikkya(O)" },
    { src: "https://i.ibb.co.com/6crtm6wV/9-1.jpg", title: "Tripura-Bijoy Manikkya(O)" },
    { src: "https://i.ibb.co.com/qF0RfNs6/9-2.jpg", title: "Tripura-Bijoy Manikkya(R)" },
  ];

  const banknotes = [
    { src: "https://i.ibb.co.com/1trqQH1R/N1-BEEJ-British-India-1000-rs-KGVI-Bombay-1.jpg", title: "BI-1000 Rupees(1945)" },
    { src: "https://i.ibb.co.com/1trqQH1R/N1-BEEJ-British-India-1000-rs-KGVI-Bombay-1.jpg", title: "BI-1000 Rupees(1945)" },
    { src: "https://i.ibb.co.com/NnkZs8f/423568721-2300767100128137-8357677093964001758-n.jpg", title: "Old Banknote" },
    { src: "https://i.ibb.co.com/sKc7b6W/421234524-3174131992731247-1562273221590937077-n.jpg", title: "Old Banknote" },
    { src: "https://i.ibb.co.com/0ymVqzLy/C7-BJJ-Dhannya-Manikya-Chatigram-1.jpg", title: "Rare Currency" },
    { src: "https://i.ibb.co.com/0ymVqzLy/C7-BJJ-Dhannya-Manikya-Chatigram-1.jpg", title: "Historic Note" },
  ];

  const awards = [
    { src: "https://i.ibb.co/your-award1.jpg", title: "Best Collection Award" },
    { src: "https://i.ibb.co/your-award2.jpg", title: "Excellence in Numismatics" },
  ];

  const exhibitions = [
    { src: "https://i.ibb.co/your-exhibition1.jpg", title: "National Expo 2023" },
    { src: "https://i.ibb.co/your-exhibition2.jpg", title: "Coin Fair 2022" },
  ];

  // Lightbox state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openLightbox = (images, index) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox({
      ...lightbox,
      currentIndex:
        (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length,
    });
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length,
    });
  };

  const Marquee = ({ images, width = "w-96", height = "h-96" }) => (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <div className="flex animate-marquee gap-8">
        {images.concat(images).map((item, idx) => (
          <div key={idx} className="inline-block text-center">
            <div className={`${width} ${height} overflow-hidden rounded-lg shadow-lg mx-auto`}>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => openLightbox(images, idx % images.length)}
              />
            </div>
            <p className="mt-2 text-sm text-gray-300">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent text-white px-6 py-24 space-y-20 relative">

      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://i.ibb.co/your-hero-image.jpg"
            alt="Numismatic Collection Hero"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex flex-col justify-center items-center px-6 space-y-6">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
              My Numismatic Collection
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Welcome to my curated collection of coins, banknotes, and awards. Explore treasures from different eras and countries, showcasing the rich history of numismatics.
            </p>
            <Link
              to="/hobbies"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Back to Hobbies
            </Link>
          </div>
        </div>
      </section>

      {/* Collection Sections */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Coins
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-3xl mx-auto px-4 mb-10">
          My coin collection spans centuries of history, featuring
          <span className="font-semibold text-yellow-400"> Bengal Sultani</span>,
          <span className="font-semibold text-yellow-400"> Tripura</span>,
          <span className="font-semibold text-yellow-400"> Assam</span>,
          <span className="font-semibold text-yellow-400"> Gupta-era</span> coins,
          and unique pieces inscribed with
          <span className="italic text-teal-300"> Bengali script</span>.
          Each coin tells a story of cultural heritage and craftsmanship.
        </p>

        <Marquee images={coins} width="w-96" height="h-96" />
      </section>

      <section>
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Bank Notes
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-3xl mx-auto px-4 mb-10">
          My collection includes
          <span className="font-semibold text-green-400"> British India bank notes</span>,
          <span className="font-semibold text-green-400"> Bangladesh Old Issue</span>,
          as well as rare notes from
          <span className="italic text-rose-300"> countries that no longer exist on the map</span>.
          Each note reflects the changing history, culture, and legacy of its time.
        </p>

        <Marquee images={banknotes} width="w-[32rem]" height="h-96" />
      </section>

      <section>
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Awards & Appreciations
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-3xl mx-auto px-4 mb-10">
          Over the years, I have received
          <span className="font-semibold text-indigo-400"> awards</span> and
          <span className="font-semibold text-indigo-400"> appreciations</span> that honor my passion for
          <span className="italic text-emerald-300"> collecting coins, bank notes, and cultural artifacts</span>.
          These recognitions inspire me to continue preserving history and heritage.
        </p>

        <Marquee images={awards} width="w-96" height="h-96" />
      </section>

      <section>
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Exhibitions
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-3xl mx-auto px-4 mb-10">
          I have proudly participated in several
          <span className="font-semibold text-purple-400"> exhibitions</span> showcasing my
          <span className="italic text-teal-300"> coin and bank note collections</span>.
          These events provided opportunities to connect with fellow collectors, share knowledge,
          and celebrate the rich history and heritage preserved through numismatics and philately.
        </p>

        <Marquee images={exhibitions} width="w-[32rem]" height="h-96" />
      </section>

      {/* Bottom Back Button */}
      <div className="text-center mt-12">
        <Link
          to="/hobbies"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Back to Hobbies
        </Link>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 animate-fade"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold px-4 py-2 hover:text-blue-400"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Previous / Next */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold px-4 py-2 hover:text-blue-400"
            onClick={prevImage}
          >
            ‹
          </button>
          <img
            src={lightbox.images[lightbox.currentIndex].src}
            alt={lightbox.images[lightbox.currentIndex].title}
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg mb-4"
          />
          {/* Title */}
          <p className="text-white text-lg">{lightbox.images[lightbox.currentIndex].title}</p>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold px-4 py-2 hover:text-blue-400"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}

      {/* Tailwind fade animation */}
      <style>
        {`
          @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade {
            animation: fade 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}