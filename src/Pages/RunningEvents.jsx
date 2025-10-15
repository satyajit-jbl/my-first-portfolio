// const runningEvents = [
//   {
//     name: "BYLC Running with Purpose 2024",
//     date: "March 08, 2024",
//     location: "CRB, Chattogram",
//     image: "https://i.ibb.co.com/zVmJ759v/431745379-10232713341156445-6036736447321709367-n.jpg",
//     description: "Completed my first official event — a 7K run through the vibrant streets of Chattogram City.",
//   },
//   {
//     name: "Cox's Bazar Run 2025",
//     date: "April 19, 2025",
//     location: "Cox's Bazar, Bangladesh",
//     image: "https://i.ibb.co.com/Q7BsHm15/DSC4818.jpg",
//     description: "Stepping up the challenge with my second half marathon at Cox’s Bazar Run 2025, surrounded by the beauty of the world’s longest sea beach.",
//   },
//   {
//     name: "Cox's Bazar Run 2025",
//     date: "April 19, 2025",
//     location: "Cox's Bazar, Bangladesh",
//     image: "https://i.ibb.co.com/b506410Z/DSC4892.jpg",
//     description: "Stepping up the challenge with my second half marathon at Cox’s Bazar Run 2025, surrounded by the beauty of the world’s longest sea beach.",
//   },
//   {
//     name: "CU Runners 10K 2025",
//     date: "March 25, 2025",
//     location: "Chittagong University, Bangladesh",
//     image: "https://i.ibb.co.com/XrPHt97n/Whats-App-Image-2025-05-11-at-23-44-55-bafe633b.jpg",
//     description: "Completed the Chittagong University 10K — a memorable run through a beautiful campus.",
//   },
//   {
//     name: "CU Runners 10K 2025",
//     date: "March 25, 2025",
//     location: "Chittagong University, Bangladesh",
//     image: "https://i.ibb.co.com/5x8R28R4/Whats-App-Image-2025-05-11-at-23-45-54-7ba966e2.jpg",
//     description: "Completed the Chittagong University 10K — an amazing run shared with great running mates.",
//   },
//   {
//     name: "Joy Bangla Marathon",
//     date: "June 07, 2024",
//     location: "Hatirjheel, Dhaka",
//     image: "https://i.ibb.co.com/6cXRNx5Y/509419121-10237935168698870-8736289557287779263-n.jpg",
//     description: "My first half marathon at the Joy Bangla Marathon. Running along the stunning Hatirjheel in Dhaka made it unforgettable!",
//   },
//   {
//     name: "Meheshkhali island Half Marathon 2025",
//     date: "September 12, 2025",
//     location: "Hatirjheel, Dhaka",
//     image: "https://i.ibb.co.com/PVWX04Y/Whats-App-Image-2025-09-13-at-10-47-22-28a2dc31.jpg",
//     description: "Completed half marathon at Maheshkhali Island. A scenic 21K run in 2025",
//   },
//   {
//     name: "Meheshkhali island Half Marathon 2025",
//     date: "September 12, 2025",
//     location: "Hatirjheel, Dhaka",
//     image: "https://i.ibb.co.com/whvjBRV0/547171674-10239149005364028-2645820189188768997-n.jpg",
//     description: "Completed half marathon at Maheshkhali Island. A scenic 21K run in 2025",
//   },
// ];

// export default function RunningEvents() {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {runningEvents.map((event, index) => (
//         <div
//           key={index}
//           className="bg-black/40 border border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//         >
//           <img
//             src={event.image}
//             alt={event.name}
//             className="w-full h-72 object-cover rounded-t-2xl"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold text-yellow-400 mb-1">{event.name}</h3>
//             <p className="text-sm text-gray-400">{event.date} • {event.location}</p>
//             <p className="text-gray-300 mt-2 text-sm">{event.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";

// Your running events array
const runningEvents = [
  {
    name: "BYLC Running with Purpose 2024",
    date: "March 08, 2024",
    location: "CRB, Chattogram",
    image: "https://i.ibb.co/zVmJ759v/431745379-10232713341156445-6036736447321709367-n.jpg",
    description: "Completed my first official event — a 7K run through the vibrant streets of Chattogram City.",
  },
  {
    name: "Cox's Bazar Run 2025",
    date: "April 19, 2025",
    location: "Cox's Bazar, Bangladesh",
    image: "https://i.ibb.co/Q7BsHm15/DSC4818.jpg",
    description: "Stepping up the challenge with my second half marathon at Cox’s Bazar Run 2025, surrounded by the beauty of the world’s longest sea beach.",
  },
  {
    name: "Cox's Bazar Run 2025",
    date: "April 19, 2025",
    location: "Cox's Bazar, Bangladesh",
    image: "https://i.ibb.co/b506410Z/DSC4892.jpg",
    description: "Stepping up the challenge with my second half marathon at Cox’s Bazar Run 2025, surrounded by the beauty of the world’s longest sea beach.",
  },
  {
    name: "CU Runners 10K 2025",
    date: "March 25, 2025",
    location: "Chittagong University, Bangladesh",
    image: "https://i.ibb.co/XrPHt97n/Whats-App-Image-2025-05-11-at-23-44-55-bafe633b.jpg",
    description: "Completed the Chittagong University 10K — a memorable run through a beautiful campus.",
  },
  {
    name: "CU Runners 10K 2025",
    date: "March 25, 2025",
    location: "Chittagong University, Bangladesh",
    image: "https://i.ibb.co/5x8R28R4/Whats-App-Image-2025-05-11-at-23-45-54-7ba966e2.jpg",
    description: "Completed the Chittagong University 10K — an amazing run shared with great running mates.",
  },
  {
    name: "Joy Bangla Marathon",
    date: "June 07, 2024",
    location: "Hatirjheel, Dhaka",
    image: "https://i.ibb.co/6cXRNx5Y/509419121-10237935168698870-8736289557287779263-n.jpg",
    description: "My first half marathon at the Joy Bangla Marathon. Running along the stunning Hatirjheel in Dhaka made it unforgettable!",
  },
  {
    name: "Meheshkhali island Half Marathon 2025",
    date: "September 12, 2025",
    location: "Hatirjheel, Dhaka",
    image: "https://i.ibb.co/PVWX04Y/Whats-App-Image-2025-09-13-at-10-47-22-28a2dc31.jpg",
    description: "Completed half marathon at Maheshkhali Island. A scenic 21K run in 2025",
  },
  {
    name: "Meheshkhali island Half Marathon 2025",
    date: "September 12, 2025",
    location: "Hatirjheel, Dhaka",
    image: "https://i.ibb.co/whvjBRV0/547171674-10239149005364028-2645820189188768997-n.jpg",
    description: "Completed half marathon at Maheshkhali Island. A scenic 21K run in 2025",
  },
];

// Sort once by date (newest first)
const sortedEvents = [...runningEvents].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const ITEMS_PER_PAGE = 6;

export default function RunningEvents() {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

  const totalPages = Math.ceil(sortedEvents.length / ITEMS_PER_PAGE);

  const currentEvents = sortedEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Swipe support for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let scrollLeft = 0;

    const startDrag = (e) => {
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const drag = (e) => {
      if (!startX) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 1; // scroll-fast
      container.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
      startX = 0;
    };

    container.addEventListener("touchstart", startDrag);
    container.addEventListener("touchmove", drag);
    container.addEventListener("touchend", endDrag);

    return () => {
      container.removeEventListener("touchstart", startDrag);
      container.removeEventListener("touchmove", drag);
      container.removeEventListener("touchend", endDrag);
    };
  }, []);

  return (
    <div className="min-h-screen p-6 text-gray-300">
            <h1 className="text-3xl font-semibold text-yellow-400 border-b border-gray-700 pb-2">
                Running Events
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
               “Every stride tells a story, every run holds a memory. From the bustling streets of Chattogram to the serene beauty of Maheshkhali Island, each event brought new challenges, breathtaking views, and the joy of running with amazing companions. These images capture not just the races, but the laughter, the energy, and the unforgettable moments that made every kilometer special. A journey of passion, perseverance, and sweet memories that I’ll cherish forever.”
            </p>
    <div>
      {/* Events Grid */}
      <div
        ref={containerRef}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto scroll-smooth touch-pan-x"
      >
        {currentEvents.map((event, index) => (
          <div
            key={index}
            className="bg-black/40 border border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 min-w-[250px]"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-72 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-yellow-400 mb-1">{event.name}</h3>
              <p className="text-sm text-gray-400">{event.date} • {event.location}</p>
              <p className="text-gray-300 mt-2 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2 flex-wrap">
        <button
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
}
