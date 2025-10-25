// import { Link, Outlet, useLocation } from "react-router-dom";

// export default function Marathon() {
//   const location = useLocation();

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">

//       {/* Sidebar */}
//       <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-yellow-400">Marathon & Strava</h2>
//         <p className="text-sm md:text-base text-gray-300 leading-relaxed">
//           Explore your running events, awards, and Strava dashboard — track your achievements and training history.
//         </p>

//         <ul className="space-y-2 text-sm md:text-base">
//           <li><Link to="/marathon/events" className="hover:text-yellow-300">🏃‍♂️ Running Events</Link></li>
//           <li><Link to="/marathon/awards" className="hover:text-green-300">🏆 Awards</Link></li>
//           <li><Link to="/marathon/strava" className="hover:text-indigo-300">📊 Strava Dashboard</Link></li>
//         </ul>

//         <Link to="/" className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-center py-2 rounded-lg text-sm md:text-base transition">
//           ← Back to Home
//         </Link>
//       </aside>

//       {/* Main Content / Outlet */}
//       <main className="lg:w-3/4 w-full p-4 sm:p-6">
//         {location.pathname === "/marathon" ? (
//           <div className="text-center text-gray-300 text-lg">Select a section to view details.</div>
//         ) : (
//           <Outlet />
//         )}
//       </main>

//     </div>
//   );
// }

// import { Link, Outlet, useLocation } from "react-router-dom";

// export default function Marathon() {
//   const location = useLocation();

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">
//       <aside className="lg:w-1/4 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6">
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-yellow-400">Miles & Memories</h2>
//         <p className="text-sm md:text-base text-gray-300 leading-relaxed">
//           Running isn’t just a hobby, it’s my lifestyle. I lace up my shoes, hit the roads or trails, and conquer the day! From tracking my miles and pace on Strava to celebrating every personal record, each run is a journey of discipline, joy, and growth.
//         </p>

//         <ul className="space-y-2 text-sm md:text-base">
//           <li><Link to="/marathon/events" className="hover:text-yellow-300">🏃‍♂️ Running Events</Link></li>
//           <li><Link to="/marathon/RunAwards" className="hover:text-green-300">🏆 Awards & Appreciations</Link></li>
//           <li><Link to="/marathon/strava" className="hover:text-indigo-300">📊 Strava Dashboard</Link></li>
//           <li><Link to="/marathon/runningGear" className="hover:text-indigo-300">📊 My Running Gears</Link></li>
//           <li><Link to="/marathon/update" className="hover:text-orange-300">🗓️ Running Events Update</Link></li>
//           <li><Link to="/marathon/admin" className="hover:text-orange-300">🗓️ Admin</Link></li>

//         </ul>

//         <Link to="/hobby" className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-center py-2 rounded-lg text-sm md:text-base transition">
//           ← Back to Hobby
//         </Link>
//       </aside>

//       <main className="lg:w-3/4 w-full p-4 sm:p-6">
//         {location.pathname === "/marathon" ? (
//           <div className="text-center text-gray-300 text-lg">Select a section to view details.</div>
//         ) : (
//           <Outlet />
//         )}
//       </main>
//     </div>
//   );
// }

import { Link, Outlet, useLocation } from "react-router-dom";

export default function Marathon() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-gray-300 py-20">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-6 overflow-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-yellow-400">
          Miles & Memories
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Running isn’t just a hobby, it’s my lifestyle. I lace up my shoes, hit the roads or trails, and conquer the day! From tracking my miles and pace on Strava to celebrating every personal record, each run is a journey of discipline, joy, and growth.
        </p>

        <ul className="space-y-2 text-sm md:text-base">
          <li>
            <Link to="/marathon/events" className="hover:text-yellow-300">
              🏃‍♂️ Running Events
            </Link>
          </li>
          <li>
            <Link to="/marathon/RunAwards" className="hover:text-green-300">
              🏆 Awards & Appreciations
            </Link>
          </li>
          <li>
            <Link to="/marathon/strava" className="hover:text-indigo-300">
              📊 Strava Dashboard
            </Link>
          </li>
          <li>
            <Link to="/marathon/runningGear" className="hover:text-indigo-300">
              📊 My Running Gears
            </Link>
          </li>
          <li>
            <Link to="/marathon/update" className="hover:text-orange-300">
              🗓️ Running Events Update
            </Link>
          </li>
          <li>
            <Link to="/marathon/admin" className="hover:text-orange-300">
              🗓️ Admin
            </Link>
          </li>
        </ul>

        <Link
          to="/hobby"
          className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-center py-2 rounded-lg text-sm md:text-base transition"
        >
          ← Back to Hobby
        </Link>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 w-full flex-1 p-4 sm:p-6 overflow-auto">
        {location.pathname === "/marathon" ? (
          <div className="text-center text-gray-300 text-lg py-20">
            Select a section to view details.
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
