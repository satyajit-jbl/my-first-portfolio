// Pages/Activities/Philately/index.jsx
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Philately() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">

      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Philately</h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Explore rare stamps, first day covers, expo visits, and awards — a journey through postal history and philatelic achievements.
        </p>

        <ul className="space-y-2 text-sm md:text-base">
          <li>
            <Link to="/philately/rare-stamps" className="hover:text-yellow-300">
              ✉️ Rare Stamps
            </Link>
          </li>
          <li>
            <Link to="/philately/first-day-covers" className="hover:text-green-300">
              📬 First Day Covers
            </Link>
          </li>
          <li>
            <Link to="/philately/expo-visit" className="hover:text-purple-300">
              🎪 Expo Visit
            </Link>
          </li>
          <li>
            <Link to="/philately/awards" className="hover:text-indigo-300">
              🏆 Awards & Appreciation
            </Link>
          </li>
        </ul>

        <Link to="/hobby" className="mt-4 inline-block bg-blue-400 hover:bg-blue-500 text-black text-center py-2 rounded-lg text-sm md:text-base transition">
          ← Back to Hobby
        </Link>
      </aside>

      {/* Main Content / Outlet */}
      <main className="lg:w-3/4 w-full p-4 sm:p-6">
        {location.pathname === "/philately" ? (
          <div className="text-center text-gray-300 text-lg">
            Select a category to view details.
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
