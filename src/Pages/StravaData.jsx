import { Link, Outlet, useLocation } from "react-router-dom";

export default function StravaData() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">
      <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-yellow-400">Marathon & Strava</h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Track your running history, activities, and achievements through Strava API.
        </p>
        <ul className="space-y-2 text-sm md:text-base">
          <li><Link to="/marathon/events" className="hover:text-yellow-300">🏃‍♂️ Running Events</Link></li>
          <li><Link to="/marathon/awards" className="hover:text-green-300">🏆 Awards</Link></li>
          <li><Link to="/marathon/strava" className="hover:text-indigo-300">📊 Strava Dashboard</Link></li>
        </ul>
        <Link to="/marathon" className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-center py-2 rounded-lg text-sm md:text-base transition">
          ← Back to Marathon
        </Link>
      </aside>
      <main className="lg:w-3/4 w-full p-4 sm:p-6">
        {location.pathname === "/marathon/strava" ? <Outlet /> : <div className="text-center text-gray-300 text-lg">Select a section to view details.</div>}
      </main>
    </div>
  );
}
