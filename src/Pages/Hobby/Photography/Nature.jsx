// export default function Nature() {
//   const images = [
//     {
//       src: "https://i.ibb.co.com/Df6Cms3F/464568524-10234626539105198-4149117513183363690-n.jpg",
//       title: "Himalayan Majesty",
//       description: "Snow-capped peaks embracing the sky — pure serenity in the Himalayas.",
//     },
//     {
//       src: "https://i.ibb.co.com/F4rkMv0G/526829048-10238610537182660-6853785944276265702-n.jpg",
//       title: "Tranquil Reflections",
//       description: "Still waters mirroring distant peaks — balance and beauty united.",
//     },
//     {
//       src: "https://i.ibb.co.com/v6BbbPZp/465180766-10234722457423096-6095276173133655906-n.jpg",
//       title: "Mountain Silence",
//       description: "A quiet valley where the mountains breathe peace.",
//     },
//   ];
//   return (
//     <Gallery title="🌿 Nature & Landscape" images={images} />
//   );
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
import { natureImages } from "../../../data/photoData";

export default function Nature() {
  return <Gallery title="🌿 Nature & Landscape" images={natureImages} />;
}
