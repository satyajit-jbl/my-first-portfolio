import { useState } from "react";
import { Link } from "react-router-dom";

export default function Numismatics() {
  const coins = [
    { src: "https://i.ibb.co.com/HLKc1gNg/1-1.jpg", title: "Tripura-Amara Manikkya(O)", description: "Obverse of Tripura-Amara Manikkya coin.TRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; theTRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; theTRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; theTRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; theTRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; theTRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; theTRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; theTRIPURA: Vira Vikrama Kishore, 1923-1947, AR rupee (11.56g), TE1338, KM-409, R&B-304, six-line text, also citing Queen Kanchan Prabha // lion rampant left, milled edge; the" },
    { src: "https://i.ibb.co.com/cSxfVXb2/1-3.jpg", title: "Tripura-Amara Manikkya(R)", description: "Reverse of Tripura-Amara Manikkya coin." },
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
    { src: "https://i.ibb.co/your-award1.jpg", title: "Best Collection Award", description: "Awarded for excellence in coin collection." },
    { src: "https://i.ibb.co/your-award2.jpg", title: "Excellence in Numismatics", description: "Recognition for passion in numismatics." },
  ];

  const exhibitions = [
    { src: "https://i.ibb.co.com/LD7ZM9WG/486047617-2485898645096202-5650044667561579432-n.jpg", title: "National Expo 2023", description: "Displayed my collection in National Expo 2023." },
    { src: "https://i.ibb.co.com/HTKjncwF/486149599-2485898778429522-3350468653833891524-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
    { src: "https://i.ibb.co.com/KzXRbz96/486358170-2485900928429307-2040540739743879862-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
    { src: "https://i.ibb.co.com/ynvh2S3m/486543094-2485900785095988-7747044204479381236-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
    { src: "https://i.ibb.co.com/4g8J11rd/486107473-2485898735096193-1881747041053549122-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
    { src: "https://i.ibb.co.com/fzrQQ5c6/499439112-2540376179648448-5170119160465493533-n.jpg", title: "Coin Fair 2022", description: "Participated in Coin Fair 2022." },
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
    <div className="min-h-screen bg-transparent text-white px-6 py-24 space-y-20 relative">
      {/* Coins */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-yellow-400">
          Coins
        </h1>
        <Marquee images={coins} width="w-64 md:w-80" height="h-64 md:h-80" />
      </section>

      {/* Banknotes */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-green-400">
          Bank Notes
        </h1>
        <Marquee images={banknotes} width="w-[20rem] md:w-[28rem]" height="h-64 md:h-80" />
      </section>

      {/* Awards */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-indigo-400">
          Awards
        </h1>
        <Marquee images={awards} width="w-64 md:w-80" height="h-64 md:h-80" />
      </section>

      {/* Exhibitions */}
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-purple-400">
          Exhibitions
        </h1>
        {/* <Marquee images={exhibitions} width="w-64 md:w-80" height="h-64 md:h-80" /> */}
        <Marquee images={exhibitions} width="w-[20rem] md:w-[28rem]" height="h-64 md:h-80" />
        {/* <Marquee images={exhibitions} wwidth="w-[20rem] md:w-[28rem]" height="h-64 md:h-80" /> */}
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Previous / Next */}
          {/* <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white sm:text-6xl md:text-7xl lg:text-9xl font-bold hover:text-blue-400"
            onClick={prevImage}
          >
            ‹
          </button> */}
          <button
            className="
    absolute left-4 top-1/2 transform -translate-y-1/2
    text-white font-bold hover:text-blue-400
    text-4xl sm:text-6xl md:text-7xl lg:text-9xl
    p-1 sm:p-2 md:p-3 lg:p-4
  "
            onClick={prevImage}
          >
            ‹
          </button>

          {/* <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:text-blue-400"
            onClick={nextImage}
          >
            ›
          </button> */}
          <button
            className="
    absolute right-4 top-1/2 transform -translate-y-1/2
    text-white font-bold hover:text-blue-400
    text-4xl sm:text-6xl md:text-7xl lg:text-9xl
    p-1 sm:p-2 md:p-3 lg:p-4
  "
            onClick={nextImage}
          >
            ›
          </button>


          {/* Image + Title/Description */}
          <div className="flex flex-col items-center w-full max-w-5xl overflow-y-auto modal-scrollbar">
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
        </div>
      )}

    </div>
  );
}
