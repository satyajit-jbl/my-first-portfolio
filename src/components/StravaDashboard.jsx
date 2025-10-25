// import { useEffect, useState, useMemo } from "react";
// import {
//   ResponsiveContainer,
//   ComposedChart,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   Bar,
//   Line,
// } from "recharts";

// const STRAVA_ACTIVITIES_URL = `${import.meta.env.VITE_API_BASE}/strava/activities`;

// export default function StravaDashboard() {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [filters, setFilters] = useState({ type: "All", minDistance: 0, maxDistance: 100 });
//   const [sortBy, setSortBy] = useState("date");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;

//   // Fetch activities from backend
//   async function fetchActivities() {
//     setLoading(true);
//     try {
//       const response = await fetch(STRAVA_ACTIVITIES_URL);
//       if (!response.ok) throw new Error(`Backend error (${response.status})`);
//       const data = await response.json();
//       setActivities(data);
//     } catch (err) {
//       console.error("Error fetching activities:", err);
//       setError("Failed to load Strava activities.");
//       setActivities([]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchActivities();
//   }, []);

//   // Filters
//   const filteredActivities = useMemo(() => {
//     return activities.filter((act) => {
//       const distanceKm = act.distance / 1000;
//       const typeMatch = filters.type === "All" || act.type === filters.type;
//       const distanceMatch = distanceKm >= filters.minDistance && distanceKm <= filters.maxDistance;
//       return typeMatch && distanceMatch;
//     });
//   }, [activities, filters]);

//   // Sorting
//   const sortedActivities = useMemo(() => {
//     let sorted = [...filteredActivities];
//     if (sortBy === "date") sorted.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
//     else if (sortBy === "distance") sorted.sort((a, b) => b.distance - a.distance);
//     else if (sortBy === "speed")
//       sorted.sort((a, b) => (b.average_speed || 0) - (a.average_speed || 0));
//     return sorted;
//   }, [filteredActivities, sortBy]);

//   // Pagination
//   // eslint-disable-next-line no-unused-vars
//   const totalPages = Math.ceil(sortedActivities.length / itemsPerPage);
//   const paginatedActivities = sortedActivities.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Summary
//   const summary = useMemo(() => {
//     const totalDistance = filteredActivities
//       .reduce((sum, act) => sum + act.distance / 1000, 0)
//       .toFixed(2);

//     const totalTimeSeconds = filteredActivities.reduce((sum, act) => sum + act.moving_time, 0);
//     const hours = Math.floor(totalTimeSeconds / 3600);
//     const minutes = Math.floor((totalTimeSeconds % 3600) / 60);

//     const totalElevation = filteredActivities
//       .reduce((sum, act) => sum + (act.total_elevation_gain || 0), 0)
//       .toFixed(2);

//     return { totalDistance, hours, minutes, totalElevation };
//   }, [filteredActivities]);

//   return (
//     <div className="min-h-screen text-gray-200 py-12 px-6 md:px-12">
//       {/* Header */}
//       <header className="text-center mb-8">
//         <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">🏃 Strava Dashboard</h1>
//         <p className="text-gray-400 max-w-xl mx-auto">
//           Welcome to my Strava Dashboard! Track all my running, cycling, and other activities
//           directly from my Strava profile.
//         </p>
//       </header>

//       {/* Summary */}
//       {!loading && filteredActivities.length > 0 && (
//         <div className="bg-gray-800/50 rounded-3xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//           <div className="bg-gray-700/50 p-4 rounded-2xl">
//             <p className="text-gray-400 text-sm">Total Distance</p>
//             <p className="text-yellow-400 text-xl font-bold">{summary.totalDistance} km</p>
//           </div>
//           <div className="bg-gray-700/50 p-4 rounded-2xl">
//             <p className="text-gray-400 text-sm">Total Moving Time</p>
//             <p className="text-yellow-400 text-xl font-bold">
//               {summary.hours}h {summary.minutes}m
//             </p>
//           </div>
//           <div className="bg-gray-700/50 p-4 rounded-2xl">
//             <p className="text-gray-400 text-sm">Total Elevation</p>
//             <p className="text-yellow-400 text-xl font-bold">{summary.totalElevation} m</p>
//           </div>
//         </div>
//       )}

//       {/* Activity Chart */}
//       {!loading && filteredActivities.length > 0 && (
//         <div className="rounded-3xl p-6 mb-8">
//           <h2 className="text-xl font-semibold text-yellow-400 mb-4 text-center">📊 Activity Overview</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <ComposedChart
//               data={[...filteredActivities]
//                 .slice()
//                 .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
//                 .map((act) => ({
//                   date: new Date(act.start_date).toLocaleDateString(),
//                   distance: (act.distance / 1000).toFixed(2),
//                   speed: act.average_speed ? (act.average_speed * 3.6).toFixed(2) : 0,
//                 }))}
//               margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//               <XAxis dataKey="date" tick={{ fill: "#ccc", fontSize: 10 }} />
//               <YAxis yAxisId="left" tick={{ fill: "#ccc" }} />
//               <YAxis yAxisId="right" orientation="right" tick={{ fill: "#ccc" }} domain={[0, "auto"]} />
//               <Tooltip contentStyle={{ background: "#222", border: "none", color: "#fff" }} />
//               <Legend />
//               <Bar yAxisId="left" dataKey="distance" fill="#facc15" name="Distance (km)" />
//               <Line yAxisId="right" type="monotone" dataKey="speed" stroke="#3b82f6" name="Avg Speed (km/h)" dot={false} />
//             </ComposedChart>
//           </ResponsiveContainer>
//         </div>
//       )}

//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 flex-wrap">
//         <div className="flex gap-2 items-center">
//           <label htmlFor="type" className="text-gray-300 font-medium">Activity Type:</label>
//           <select
//             id="type"
//             className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
//             value={filters.type}
//             onChange={(e) => { setFilters(f => ({ ...f, type: e.target.value })); setCurrentPage(1); }}
//           >
//             <option>All</option>
//             <option>Run</option>
//             <option>Ride</option>
//             <option>Hike</option>
//             <option>Walk</option>
//             <option>Swim</option>
//           </select>
//         </div>

//         <div className="flex gap-2 items-center">
//           <label className="text-gray-300 font-medium">Distance (km):</label>
//           <input
//             type="number"
//             min={0}
//             max={100}
//             value={filters.minDistance}
//             onChange={(e) => { setFilters(f => ({ ...f, minDistance: Number(e.target.value) })); setCurrentPage(1); }}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//           <span className="text-gray-400">-</span>
//           <input
//             type="number"
//             min={0}
//             max={500}
//             value={filters.maxDistance}
//             onChange={(e) => { setFilters(f => ({ ...f, maxDistance: Number(e.target.value) })); setCurrentPage(1); }}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//         </div>

//         <div className="flex gap-2 items-center">
//           <label className="text-gray-300 font-medium">Sort By:</label>
//           <select
//             className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
//             value={sortBy}
//             onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
//           >
//             <option value="date">Date</option>
//             <option value="distance">Distance</option>
//             <option value="speed">Avg Speed</option>
//           </select>
//         </div>
//       </div>

//       {/* Activity Cards */}
//       {loading && <div className="text-center text-gray-400">Loading Strava activities...</div>}
//       {error && <div className="text-center text-red-500">{error}</div>}
//       {!loading && paginatedActivities.length === 0 && <div className="text-center text-gray-400">No activities match your filters.</div>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {paginatedActivities.map((act) => {
//           const distanceKm = (act.distance / 1000).toFixed(2);
//           const movingTimeMin = Math.floor(act.moving_time / 60);
//           const avgSpeed = act.average_speed ? (act.average_speed * 3.6).toFixed(2) : "0.00";
//           const elevation = act.total_elevation_gain ? act.total_elevation_gain.toFixed(2) : "0.00";

//           return (
//             <div key={act.id} className="bg-gray-800/60 p-5 rounded-3xl shadow-lg hover:scale-105 transform transition">
//               <h2 className="text-xl font-bold text-yellow-400 mb-2">{act.name}</h2>
//               <p className="text-gray-400 text-sm mb-2">{new Date(act.start_date).toLocaleDateString()} • {act.type}</p>
//               <div className="flex flex-wrap gap-3 text-gray-300 text-sm">
//                 <span>🏁 {distanceKm} km</span>
//                 <span>⏱ {movingTimeMin} min</span>
//                 <span>⚡ {avgSpeed} km/h</span>
//                 <span>⬆️ {elevation} m</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState, useMemo } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";
import { BASE_URL } from "../utils/config"; // adjust path if needed

const STRAVA_ACTIVITIES_URL = `${BASE_URL}/strava/activities`;

export default function StravaDashboard() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ type: "All", minDistance: 0, maxDistance: 100 });
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Fetch activities from backend
  async function fetchActivities() {
    setLoading(true);
    try {
      const response = await fetch(STRAVA_ACTIVITIES_URL);
      if (!response.ok) throw new Error(`Backend error (${response.status})`);
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      console.error("Error fetching activities:", err);
      setError("Failed to load Strava activities.");
      setActivities([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchActivities();
  }, []);

  // Filters
  const filteredActivities = useMemo(() => {
    return activities.filter((act) => {
      const distanceKm = act.distance / 1000;
      const typeMatch = filters.type === "All" || act.type === filters.type;
      const distanceMatch = distanceKm >= filters.minDistance && distanceKm <= filters.maxDistance;
      return typeMatch && distanceMatch;
    });
  }, [activities, filters]);

  // Sorting
  const sortedActivities = useMemo(() => {
    let sorted = [...filteredActivities];
    if (sortBy === "date") sorted.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    else if (sortBy === "distance") sorted.sort((a, b) => b.distance - a.distance);
    else if (sortBy === "speed")
      sorted.sort((a, b) => (b.average_speed || 0) - (a.average_speed || 0));
    return sorted;
  }, [filteredActivities, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedActivities.length / itemsPerPage);
  const paginatedActivities = sortedActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Summary
  const summary = useMemo(() => {
    const totalDistance = filteredActivities
      .reduce((sum, act) => sum + act.distance / 1000, 0)
      .toFixed(2);

    const totalTimeSeconds = filteredActivities.reduce((sum, act) => sum + act.moving_time, 0);
    const hours = Math.floor(totalTimeSeconds / 3600);
    const minutes = Math.floor((totalTimeSeconds % 3600) / 60);

    const totalElevation = filteredActivities
      .reduce((sum, act) => sum + (act.total_elevation_gain || 0), 0)
      .toFixed(2);

    return { totalDistance, hours, minutes, totalElevation };
  }, [filteredActivities]);

  return (
    <div className="min-h-screen text-gray-200 py-12 px-6 md:px-12">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">🏃 Strava Dashboard</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Welcome to my Strava Dashboard! Track all my running, cycling, and other activities
          directly from my Strava profile.
        </p>
      </header>

      {/* Summary */}
      {!loading && filteredActivities.length > 0 && (
        <div className="bg-gray-800/50 rounded-3xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-700/50 p-4 rounded-2xl">
            <p className="text-gray-400 text-sm">Total Distance</p>
            <p className="text-yellow-400 text-xl font-bold">{summary.totalDistance} km</p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-2xl">
            <p className="text-gray-400 text-sm">Total Moving Time</p>
            <p className="text-yellow-400 text-xl font-bold">
              {summary.hours}h {summary.minutes}m
            </p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-2xl">
            <p className="text-gray-400 text-sm">Total Elevation</p>
            <p className="text-yellow-400 text-xl font-bold">{summary.totalElevation} m</p>
          </div>
        </div>
      )}

      {/* Activity Chart */}
      {!loading && filteredActivities.length > 0 && (
        <div className="rounded-3xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4 text-center">📊 Activity Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              data={[...filteredActivities]
                .slice()
                .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
                .map((act) => ({
                  date: new Date(act.start_date).toLocaleDateString(),
                  distance: (act.distance / 1000).toFixed(2),
                  speed: act.average_speed ? (act.average_speed * 3.6).toFixed(2) : 0,
                }))}
              margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" tick={{ fill: "#ccc", fontSize: 10 }} />
              <YAxis yAxisId="left" tick={{ fill: "#ccc" }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: "#ccc" }} domain={[0, "auto"]} />
              <Tooltip contentStyle={{ background: "#222", border: "none", color: "#fff" }} />
              <Legend />
              <Bar yAxisId="left" dataKey="distance" fill="#facc15" name="Distance (km)" />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="speed"
                stroke="#3b82f6"
                name="Avg Speed (km/h)"
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 flex-wrap">
        <div className="flex gap-2 items-center">
          <label htmlFor="type" className="text-gray-300 font-medium">Activity Type:</label>
          <select
            id="type"
            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
            value={filters.type}
            onChange={(e) => { setFilters(f => ({ ...f, type: e.target.value })); setCurrentPage(1); }}
          >
            <option>All</option>
            <option>Run</option>
            <option>Ride</option>
            <option>Hike</option>
            <option>Walk</option>
            <option>Swim</option>
          </select>
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-gray-300 font-medium">Distance (km):</label>
          <input
            type="number"
            min={0}
            max={100}
            value={filters.minDistance}
            onChange={(e) => { setFilters(f => ({ ...f, minDistance: Number(e.target.value) })); setCurrentPage(1); }}
            className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            min={0}
            max={500}
            value={filters.maxDistance}
            onChange={(e) => { setFilters(f => ({ ...f, maxDistance: Number(e.target.value) })); setCurrentPage(1); }}
            className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-gray-300 font-medium">Sort By:</label>
          <select
            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
            value={sortBy}
            onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
          >
            <option value="date">Date</option>
            <option value="distance">Distance</option>
            <option value="speed">Avg Speed</option>
          </select>
        </div>
      </div>

      {/* Activity Cards */}
      {loading && <div className="text-center text-gray-400">Loading Strava activities...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && paginatedActivities.length === 0 && <div className="text-center text-gray-400">No activities match your filters.</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedActivities.map((act) => {
          const distanceKm = (act.distance / 1000).toFixed(2);
          const movingTimeMin = Math.floor(act.moving_time / 60);
          const avgSpeed = act.average_speed ? (act.average_speed * 3.6).toFixed(2) : "0.00";
          const elevation = act.total_elevation_gain ? act.total_elevation_gain.toFixed(2) : "0.00";

          return (
            <div key={act.id} className="bg-gray-800/60 p-5 rounded-3xl shadow-lg hover:scale-105 transform transition">
              <h2 className="text-xl font-bold text-yellow-400 mb-2">{act.name}</h2>
              <p className="text-gray-400 text-sm mb-2">{new Date(act.start_date).toLocaleDateString()} • {act.type}</p>
              <div className="flex flex-wrap gap-3 text-gray-300 text-sm">
                <span>🏁 {distanceKm} km</span>
                <span>⏱ {movingTimeMin} min</span>
                <span>⚡ {avgSpeed} km/h</span>
                <span>⬆️ {elevation} m</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
