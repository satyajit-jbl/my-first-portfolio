// export default function Artisan() {
//   const images = [
//     {
//       src: "https://i.ibb.co.com/DfCbXD1X/508620964-10237969915407516-391364425361288190-n.jpg",
//       title: "Sacred Crafts",
//       description: "Nepali artisans shaping heritage into beauty.",
//     },
//     {
//       src: "https://i.ibb.co.com/Tx8BRvGx/513070316-10238155811574804-6080950539527150788-n.jpg",
//       title: "Echoes of Stone",
//       description: "Temple walls preserving devotion in detail.",
//     },
//     {
//       src: "https://i.ibb.co.com/pvkQ40Fk/532944455-10238782322037174-4221453608431283339-n.jpg",
//       title: "Colors of Culture",
//       description: "A vibrant celebration of Nepali craftsmanship.",
//     },
//   ];
//   return <Gallery title="🪔 Handicrafts & Heritage" images={images} />;
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
import { artisanImages } from "../../../data/photoData";

export default function Artisan() {
  return <Gallery title="🪔 Handicrafts & Heritage" images={artisanImages} />;
}
