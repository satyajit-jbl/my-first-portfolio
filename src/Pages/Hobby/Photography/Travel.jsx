// export default function Travel() {
//   const images = [
//     {
//       src: "https://i.ibb.co.com/sdqFR3yW/517937461-10238353438795361-7635985277836006309-n.jpg",
//       title: "Journey to the Base",
//       description: "Prayer stones guiding the way to Everest Base Camp.",
//     },
//     {
//       src: "https://i.ibb.co.com/1Gf56bLJ/529672306-10238698352817996-4795023224238807778-n.jpg",
//       title: "Life Along the Ridge",
//       description: "Everyday tales of mountain travel and resting mules.",
//     },
//     {
//       src: "https://i.ibb.co.com/TDHz1T3g/466788269-10235065255752840-4828868870887474726-n.jpg",
//       title: "Rural Harmony",
//       description: "The rhythm of simple living in the hills of Nepal.",
//     },
//   ];
//   return <Gallery title="🏔️ Travel & Adventure" images={images} />;
// }

// function Gallery({ title, images }) {
//   return (
//     <div>
//       <h1 className="text-2xl sm:text-3xl font-semibold mb-4 border-b border-gray-200 pb-2 text-blue-700">
//         {title}
//       </h1>
//       <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
//         {images.map((img, i) => (
//           <div key={i} className="overflow-hidden rounded-xl shadow-md hover:opacity-90 transition">
//             <img src={img.src} alt={img.title} className="w-full object-cover rounded-xl" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Gallery from "./Gallery";
import { travelImages } from "../../../data/photoData";

export default function Travel() {
  return <Gallery title="🏔️ Travel & Adventure" images={travelImages} />;
}
