import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/numismaticsHero.jpg"; // your hero image

export default function Numismatics() {
  const coins = [
    { src: "https://i.ibb.co.com/HLKc1gNg/1-1.jpg", title: "Tripura-Amara Manikkya(O)", description: "Tripura. Vira Vikrama Kishore Manikya Rupee TE 1337 (1930) AU Details (Cleaned) NGC, KM-X7. Medallic issue. Obverse bust of Maharaja with reverse standing lion left and royal standard. From the Far North Collection www.HA.com/TexasAuctioneerLicenseNoticeTripura. Vira Vikrama Kishore Manikya Rupee TE 1337 (1930) AU Details (Cleaned) NGC, KM-X7. Medallic issue. Obverse bust of Maharaja with reverse standing lion left and royal standard. From the Far North Collection www.HA.com/TexasAuctioneerLicenseNoticeTripura. Vira Vikrama Kishore Manikya Rupee TE 1337 (1930) AU Details (Cleaned) NGC, KM-X7. Medallic issue. Obverse bust of Maharaja with reverse standing lion left and royal standard. From the Far North Collection www.HA.com/TexasAuctioneerLicenseNoticeTripura. Vira Vikrama Kishore Manikya Rupee TE 1337 (1930) AU Details (Cleaned) NGC, KM-X7. Medallic issue. Obverse bust of Maharaja with reverse standing lion left and royal standard. From the Far North Collection www.HA.com/TexasAuctioneerLicenseNotice" },
    { src: "https://i.ibb.co.com/cSxfVXb2/1-3.jpg", title: "Tripura-Amara Manikkya(R)", description: "Tripura. Vira Vikrama Kishore Manikya Rupee TE 1337 (1930) AU Details (Cleaned) NGC, KM-X7. Medallic issue. Obverse bust of Maharaja with reverse standing lion left and royal standard. From the Far North Collection www.HA.com/TexasAuctioneerLicenseNoticTripura. Vira Vikrama Kishore Manikya Rupee TE 1337 (1930) AU Details (Cleaned) NGC, KM-X7. Medallic issue. Obverse bust of Maharaja with reverse standing lion left and royal standard. From the Far North Collection www.HA.com/TexasAuctioneerLicenseNoticee" },
    { src: "https://i.ibb.co.com/F4ntRpvw/2-1.jpg", title: "Tripura-Token(O)", description: "Obverse of Tripura-Token." },
    { src: "https://i.ibb.co.com/Pzmq6k7P/2-2.jpg", title: "Tripura-Token(R)", description: "Reverse of Tripura-Token." },
    { src: "https://i.ibb.co.com/Swm1dRvX/5-1.jpg", title: "Tripura-Dhannya Manikkya(O)", description: "Obverse of Dhannya Manikkya coin." },
    { src: "https://i.ibb.co.com/9kT0kmLD/5-3.jpg", title: "Tripura-Dhannya Manikkya(R)", description: "Reverse of Dhannya Manikkya coin." },
    { src: "https://i.ibb.co.com/6crtm6wV/9-1.jpg", title: "Tripura-Bijoy Manikkya(O)", description: "Obverse of Bijoy Manikkya coin." },
    { src: "https://i.ibb.co.com/qF0RfNs6/9-2.jpg", title: "Tripura-Bijoy Manikkya(R)", description: "Reverse of Bijoy Manikkya coin." },
  ];

  const banknotes = [
    { src: "https://i.ibb.co.com/1trqQH1R/N1-BEEJ-British-India-1000-rs-KGVI-Bombay-1.jpg", title: "BI-1000 Rupees(1945)", description: "British India 1000 Rupees note issued in 1945 (King George VI)." },
    { src: "https://i.ibb.co.com/NnkZs8f/423568721-2300767100128137-8357677093964001758-n.jpg", title: "Old Banknote", description: "A rare old banknote preserved from history." },
    { src: "https://i.ibb.co.com/sKc7b6W/421234524-3174131992731247-1562273221590937077-n.jpg", title: "Old Banknote", description: "Another variation of an old historical banknote." },
    { src: "https://i.ibb.co.com/0ymVqzLy/C7-BJJ-Dhannya-Manikya-Chatigram-1.jpg", title: "Rare Currency", description: "Currency issued under Dhannya Manikya rule." },
  ];

  const awards = [
    { src: "https://i.ibb.co.com/F4YBF97H/492826730-10237136838981126-6853411759074102099-n.jpg", title: "Best Collection Award", description: "Awarded for excellence in coin collection." },
    { src: "https://i.ibb.co.com/35Z6kz2v/496727306-10237355889177244-7968699852891201149-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
    { src: "https://i.ibb.co.com/35Z6kz2v/496727306-10237355889177244-7968699852891201149-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
    { src: "https://i.ibb.co.com/b5tkYfXm/509230803-10237935168098855-3765548201291825629-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
    { src: "https://i.ibb.co.com/gMwcZ4mT/509419121-10237935168698870-8736289557287779263-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
    { src: "https://i.ibb.co.com/gMwcZ4mT/509419121-10237935168698870-8736289557287779263-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
    { src: "https://i.ibb.co.com/b51VCp75/548200591-10239149003643985-7465849428731942176-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
    { src: "https://i.ibb.co.com/b51VCp75/548200591-10239149003643985-7465849428731942176-n.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
  ];

  const exhibitions = [
    { src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg", title: "National Expo 2023", description: "Displayed my collection in National Expo 2023." },
    { src: "https://i.ibb.co.com/HTKjncwF/486149599-2485898778429522-3350468653833891524-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
    { src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
  ];

  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

  // 🔹 Prevent background scroll when modal is open
  useEffect(() => {
    if (lightbox.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightbox.isOpen]);

  const openLightbox = (images, index) => setLightbox({ isOpen: true, images, currentIndex: index });
  const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length });
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox({ ...lightbox, currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length });
  };

  const Marquee = ({ images, width = "w-64", height = "h-64" }) => (
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
    <div className="min-h-screen text-gray-100 sm:px-1 md:px-4 lg:px-6 py-24 space-y-20 relative">

      {/* Hero Section */}
      <section className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          <img
            src={heroImage}
            alt="Numismatic Collection Hero"
            className="w-full h-64 sm:h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-2 sm:px-6 lg:px-12 py-4 sm:py-6 space-y-3 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-snug sm:leading-normal">
              My Numismatic Collection
            </h1>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 font-semibold max-w-xs sm:max-w-2xl">
              Welcome to my world of numismatics – a journey through history captured in coins and banknotes. From the ancient Bengal Sultanate to the classic British India notes, each piece in my collection tells a unique story of culture, art, and heritage.
            </p>
            <Link
              to="/hobby"
              className="inline-block bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white font-semibold py-1 sm:py-2 px-3 sm:px-6 rounded-lg text-sm sm:text-base transition transform hover:scale-105"
            >
              Back to Hobby
            </Link>
          </div>
        </div>
      </section>


      {/* Coins Section */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2 text-yellow-300">Coins</h1>
        <p className="text-center text-gray-300 mb-6">
          My collection features coins from the Bengal Sultanate, Tripura, Assam, Cooch Behar, and the Gupta dynasty, as well as unique coins inscribed with Bengali scripts. Each piece represents a rich historical and cultural heritage, reflecting the artistry and economy of its era.
        </p>
        <Marquee images={coins} width="w-64 md:w-80" height="h-64 md:h-80" />
      </section>

      {/* Banknotes Section */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2 text-green-300">Bank Notes</h1>
        <p className="text-center text-gray-300 mb-6">
          I collect British India banknotes, Bangladesh old issues, and rare notes from countries that no longer exist. These banknotes not only hold monetary value but also provide a glimpse into the history, politics, and design styles of different regions across time.
        </p>
        <Marquee images={banknotes} width="w-[20rem] md:w-[28rem]" height="h-64 md:h-80" />
      </section>

      {/* Awards Section */}
      <section>
        <div className="flex flex-col items-center text-center px-4 md:px-0 py-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-300 mb-4">
            Awards & Appreciations
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg md:text-xl">
            Over the years, my passion for numismatics has been recognized through several awards and appreciations. These honors celebrate my dedication, meticulous collecting, and contributions to preserving historical currency.
          </p>
        </div>
        {/* <Marquee images={awards} width="w-64 md:w-80" height="h-64 md:h-80" /> */}
        <Marquee images={awards} width="w-[20rem] md:w-[28rem]" height="h-64 md:h-80" />
      </section>

      {/* Exhibitions Section */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2 text-purple-300">Exhibitions</h1>
        <p className="text-center text-gray-300 mb-6">
          I have participated in numerous numismatic exhibitions, showcasing my collection to fellow enthusiasts and the general public. These events provide a platform to share knowledge, inspire curiosity, and connect with collectors who share the same passion for history and currency.
        </p>
        <Marquee images={exhibitions} width="w-[20rem] md:w-[28rem]" height="h-64 md:h-80" />
      </section>

      {/* Back to Hobby Button */}
      <div className="text-center mt-10">
        <Link
          to="/hobby"
          className="inline-block bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
        >
          Back to Hobby
        </Link>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-indigo-400" onClick={closeLightbox}>✕</button>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl sm:text-6xl md:text-7xl lg:text-9xl p-2" onClick={prevImage}>‹</button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-indigo-400 text-4xl sm:text-6xl md:text-7xl lg:text-9xl p-2" onClick={nextImage}>›</button>
          <div className="flex flex-col items-center w-full max-w-5xl overflow-y-auto modal-scrollbar">
            <img src={lightbox.images[lightbox.currentIndex].src} alt={lightbox.images[lightbox.currentIndex].title} className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4" />
            <p className="text-white text-lg text-center">{lightbox.images[lightbox.currentIndex].title}</p>
            {lightbox.images[lightbox.currentIndex].description && <p className="text-gray-300 text-sm text-center mt-2 px-4">{lightbox.images[lightbox.currentIndex].description}</p>}
          </div>
        </div>
      )}

    </div>
  );
}
