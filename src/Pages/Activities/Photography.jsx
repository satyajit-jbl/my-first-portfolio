import { Link, Outlet, useLocation } from "react-router-dom";
// import { allImages } from "../../../data/photoData";
// import Gallery from "./Gallery";
import { allImages } from "../../data/photoData";
import Gallery from "../Hobby/Photography/Gallery";

export default function Photography() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Photography</h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            From mountains to mangroves, faith to festivals — every frame captures a story,
            a feeling, and a moment worth remembering.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 font-bold">Photo Categories</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link to="/photography" className="hover:text-blue-600">📷 All</Link></li>
            <li><Link to="/photography/nature" className="hover:text-blue-600">🌿 Nature & Landscape</Link></li>
            <li><Link to="/photography/culture" className="hover:text-blue-600">🎭 Culture & Festivals</Link></li>
            <li><Link to="/photography/travel" className="hover:text-blue-600">🏔️ Travel & Adventure</Link></li>
            <li><Link to="/photography/people" className="hover:text-blue-600">🧍 People & Portraits</Link></li>
            <li><Link to="/photography/artisan" className="hover:text-blue-600">🪔 Handicrafts & Heritage</Link></li>
            <li><Link to="/photography/random" className="hover:text-blue-600">🌸 Random Realms</Link></li>
          </ul>
        </div>

        <Link
          to="/hobby"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm md:text-base transition"
        >
          ← Back to Hobby
        </Link>
      </aside>

      {/* Main Gallery / Child Routes */}
      <main className="lg:w-3/4 w-full p-4 sm:p-6">
        {location.pathname === "/photography" ? (
          <Gallery title="📷 All Photography" images={allImages} />
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
