// export default function Culture() {
//   const images = [
//     {
//       src: "https://i.ibb.co.com/xt7R3nTY/464790910-10234676364670806-5035018003337734613-n.jpg",
//       title: "Ashura Reflections",
//       description: "Devotion and emotion during the Ashura festival.",
//     },
//     {
//       src: "https://i.ibb.co.com/PGPzFP7v/465119552-10234733987151332-5550435829811249678-n.jpg",
//       title: "Fanush of Faith",
//       description: "Buddha Purnima — lanterns rising with prayers and hope.",
//     },
//     {
//       src: "https://i.ibb.co.com/9mpFv4RY/514254987-10238131297441966-6815766073644839405-n.jpg",
//       title: "Faith and Faces",
//       description: "Expressions of spirituality captured in fleeting moments.",
//     },
//   ];
//   return <Gallery title="🎭 Culture & Festivals" images={images} />;
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
import { cultureImages } from "../../../data/photoData";

export default function Culture() {
  return <Gallery title="🎭 Culture & Festivals" images={cultureImages} />;
}
