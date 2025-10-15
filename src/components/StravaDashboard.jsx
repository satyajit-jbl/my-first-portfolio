
// /* eslint-disable no-unused-vars */
// // src/pages/StravaDashboard.jsx
// import React, { useEffect, useState, useMemo } from "react";

// const STRAVA_ACTIVITIES_URL = "https://www.strava.com/api/v3/athlete/activities";
// const CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID;
// const CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET;

// export default function StravaDashboard() {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [filters, setFilters] = useState({
//     type: "All",
//     minDistance: 0,
//     maxDistance: 100,
//   });

//   // Load tokens from localStorage or env
//   let ACCESS_TOKEN = localStorage.getItem("STRAVA_ACCESS_TOKEN") || import.meta.env.VITE_STRAVA_ACCESS_TOKEN;
//   let REFRESH_TOKEN = localStorage.getItem("STRAVA_REFRESH_TOKEN") || import.meta.env.VITE_STRAVA_REFRESH_TOKEN;

//   // Function to refresh token
//   async function refreshStravaToken() {
//     try {
//       const response = await fetch("https://www.strava.com/oauth/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({
//           client_id: CLIENT_ID,
//           client_secret: CLIENT_SECRET,
//           grant_type: "refresh_token",
//           refresh_token: REFRESH_TOKEN,
//         }),
//       });

//       const data = await response.json();

//       if (data.access_token) {
//         ACCESS_TOKEN = data.access_token;
//         REFRESH_TOKEN = data.refresh_token;

//         localStorage.setItem("STRAVA_ACCESS_TOKEN", ACCESS_TOKEN);
//         localStorage.setItem("STRAVA_REFRESH_TOKEN", REFRESH_TOKEN);

//         console.log("✅ Strava token refreshed");
//       } else {
//         console.error("❌ Failed to refresh token", data);
//       }
//     } catch (err) {
//       console.error("❌ Error refreshing Strava token", err);
//     }
//   }

//   // Fetch activities with auto-refresh
//   async function fetchActivities() {
//     setLoading(true);
//     try {
//       let token = ACCESS_TOKEN;
//       let response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // If token expired, refresh and retry
//       if (response.status === 401) {
//         await refreshStravaToken();
//         token = localStorage.getItem("STRAVA_ACCESS_TOKEN");
//         response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       if (!response.ok) throw new Error(`Strava API error (${response.status})`);

//       const data = await response.json();
//       setActivities(data);
//     } catch (err) {
//       console.error("❌ Error fetching activities:", err);
//       setError("Failed to load activities. Check your token.");
//       setActivities([]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchActivities();

//     // Auto-refresh token every 1 hour
//     const interval = setInterval(refreshStravaToken, 60 * 60 * 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const filteredActivities = useMemo(() => {
//     return activities.filter((act) => {
//       const distanceKm = act.distance / 1000;
//       const typeMatch = filters.type === "All" || act.type === filters.type;
//       const distanceMatch = distanceKm >= filters.minDistance && distanceKm <= filters.maxDistance;
//       return typeMatch && distanceMatch;
//     });
//   }, [activities, filters]);

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-6 md:px-12">
//       <header className="text-center mb-8">
//         <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">🏃 Strava Dashboard</h1>
//         <p className="text-gray-400 max-w-xl mx-auto">
//           Track your running, cycling, and other activities. Filter, explore, and analyze your training history.
//         </p>
//       </header>

//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
//         <div className="flex gap-2 items-center">
//           <label htmlFor="type" className="text-gray-300 font-medium">Activity Type:</label>
//           <select
//             id="type"
//             className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
//             value={filters.type}
//             onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
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
//             onChange={(e) => setFilters((f) => ({ ...f, minDistance: Number(e.target.value) }))}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//           <span className="text-gray-400">-</span>
//           <input
//             type="number"
//             min={0}
//             max={500}
//             value={filters.maxDistance}
//             onChange={(e) => setFilters((f) => ({ ...f, maxDistance: Number(e.target.value) }))}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//         </div>
//       </div>

//       {/* Activity Cards */}
//       {loading && <div className="text-center text-gray-400">Loading Strava activities...</div>}
//       {error && <div className="text-center text-red-500">{error}</div>}
//       {!loading && filteredActivities.length === 0 && (
//         <div className="text-center text-gray-400">No activities match your filters.</div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredActivities.map((act) => {
//           const distanceKm = (act.distance / 1000).toFixed(2);
//           const movingTimeMin = Math.floor(act.moving_time / 60);
//           const avgSpeed = act.average_speed ? (act.average_speed * 3.6).toFixed(1) : "-"; // m/s to km/h
//           const elevation = act.total_elevation_gain ? Math.round(act.total_elevation_gain) : 0;

//           return (
//             <div
//               key={act.id}
//               className="bg-gray-800/60 p-5 rounded-3xl shadow-lg hover:scale-105 transform transition"
//             >
//               <h2 className="text-xl font-bold text-yellow-400 mb-2">{act.name}</h2>
//               <p className="text-gray-400 text-sm mb-2">
//                 {new Date(act.start_date).toLocaleDateString()} • {act.type}
//               </p>
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


// 2



// /* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState, useMemo } from "react";

// const STRAVA_ACTIVITIES_URL = "https://www.strava.com/api/v3/athlete/activities";
// const CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID;
// const CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET;

// export default function StravaDashboard() {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [filters, setFilters] = useState({
//     type: "All",
//     minDistance: 0,
//     maxDistance: 100,
//   });

//   // Load tokens from localStorage or env
//   let ACCESS_TOKEN = localStorage.getItem("STRAVA_ACCESS_TOKEN") || import.meta.env.VITE_STRAVA_ACCESS_TOKEN;
//   let REFRESH_TOKEN = localStorage.getItem("STRAVA_REFRESH_TOKEN") || import.meta.env.VITE_STRAVA_REFRESH_TOKEN;

//   // Refresh token function
//   async function refreshStravaToken() {
//     try {
//       const response = await fetch("https://www.strava.com/oauth/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({
//           client_id: CLIENT_ID,
//           client_secret: CLIENT_SECRET,
//           grant_type: "refresh_token",
//           refresh_token: REFRESH_TOKEN,
//         }),
//       });
//       const data = await response.json();

//       if (data.access_token) {
//         ACCESS_TOKEN = data.access_token;
//         REFRESH_TOKEN = data.refresh_token;

//         localStorage.setItem("STRAVA_ACCESS_TOKEN", ACCESS_TOKEN);
//         localStorage.setItem("STRAVA_REFRESH_TOKEN", REFRESH_TOKEN);

//         console.log("✅ Strava token refreshed");
//       } else {
//         console.error("❌ Failed to refresh token", data);
//       }
//     } catch (err) {
//       console.error("❌ Error refreshing Strava token", err);
//     }
//   }

//   // Fetch activities with auto-refresh
//   async function fetchActivities() {
//     setLoading(true);
//     try {
//       let token = ACCESS_TOKEN;
//       let response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.status === 401) {
//         await refreshStravaToken();
//         token = localStorage.getItem("STRAVA_ACCESS_TOKEN");
//         response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       if (!response.ok) throw new Error(`Strava API error (${response.status})`);

//       const data = await response.json();
//       setActivities(data);
//     } catch (err) {
//       console.error("❌ Error fetching activities:", err);
//       setError("Failed to load activities. Check your token.");
//       setActivities([]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchActivities();

//     const interval = setInterval(refreshStravaToken, 60 * 60 * 1000); // auto-refresh every hour
//     return () => clearInterval(interval);
//   }, []);

//   // Filter activities
//   const filteredActivities = useMemo(() => {
//     return activities.filter((act) => {
//       const distanceKm = act.distance / 1000;
//       const typeMatch = filters.type === "All" || act.type === filters.type;
//       const distanceMatch = distanceKm >= filters.minDistance && distanceKm <= filters.maxDistance;
//       return typeMatch && distanceMatch;
//     });
//   }, [activities, filters]);

//   // Summary stats
//   const summary = useMemo(() => {
//     const totalDistance = filteredActivities.reduce((sum, act) => sum + act.distance / 1000, 0).toFixed(2);
//     const totalTime = Math.floor(filteredActivities.reduce((sum, act) => sum + act.moving_time, 0) / 60); // in minutes
//     const totalElevation = filteredActivities.reduce((sum, act) => sum + (act.total_elevation_gain || 0), 0);
//     return { totalDistance, totalTime, totalElevation };
//   }, [filteredActivities]);

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-6 md:px-12">
//       <header className="text-center mb-8">
//         <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">🏃 Strava Dashboard</h1>
//         <p className="text-gray-400 max-w-xl mx-auto">
//           Track your running, cycling, and other activities. Filter, explore, and analyze your training history.
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
//             <p className="text-yellow-400 text-xl font-bold">{summary.totalTime} min</p>
//           </div>
//           <div className="bg-gray-700/50 p-4 rounded-2xl">
//             <p className="text-gray-400 text-sm">Total Elevation</p>
//             <p className="text-yellow-400 text-xl font-bold">{summary.totalElevation} m</p>
//           </div>
//         </div>
//       )}

//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
//         <div className="flex gap-2 items-center">
//           <label htmlFor="type" className="text-gray-300 font-medium">Activity Type:</label>
//           <select
//             id="type"
//             className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
//             value={filters.type}
//             onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
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
//             onChange={(e) => setFilters((f) => ({ ...f, minDistance: Number(e.target.value) }))}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//           <span className="text-gray-400">-</span>
//           <input
//             type="number"
//             min={0}
//             max={500}
//             value={filters.maxDistance}
//             onChange={(e) => setFilters((f) => ({ ...f, maxDistance: Number(e.target.value) }))}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//         </div>
//       </div>

//       {/* Activity Cards */}
//       {loading && <div className="text-center text-gray-400">Loading Strava activities...</div>}
//       {error && <div className="text-center text-red-500">{error}</div>}
//       {!loading && filteredActivities.length === 0 && (
//         <div className="text-center text-gray-400">No activities match your filters.</div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredActivities.map((act) => {
//           const distanceKm = (act.distance / 1000).toFixed(2);
//           const movingTimeMin = Math.floor(act.moving_time / 60);
//           const avgSpeed = act.average_speed ? (act.average_speed * 3.6).toFixed(1) : "-"; // m/s to km/h
//           const elevation = act.total_elevation_gain ? Math.round(act.total_elevation_gain) : 0;

//           return (
//             <div
//               key={act.id}
//               className="bg-gray-800/60 p-5 rounded-3xl shadow-lg hover:scale-105 transform transition"
//             >
//               <h2 className="text-xl font-bold text-yellow-400 mb-2">{act.name}</h2>
//               <p className="text-gray-400 text-sm mb-2">
//                 {new Date(act.start_date).toLocaleDateString()} • {act.type}
//               </p>
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


// 3



// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState, useMemo } from "react";

// const STRAVA_ACTIVITIES_URL = "https://www.strava.com/api/v3/athlete/activities";
// const CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID;
// const CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET;

// export default function StravaDashboard() {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [filters, setFilters] = useState({
//     type: "All",
//     minDistance: 0,
//     maxDistance: 100,
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9; // cards per page

//   // Load tokens from localStorage or env
//   let ACCESS_TOKEN =
//     localStorage.getItem("STRAVA_ACCESS_TOKEN") || import.meta.env.VITE_STRAVA_ACCESS_TOKEN;
//   let REFRESH_TOKEN =
//     localStorage.getItem("STRAVA_REFRESH_TOKEN") || import.meta.env.VITE_STRAVA_REFRESH_TOKEN;

//   // Refresh token function
//   async function refreshStravaToken() {
//     try {
//       const response = await fetch("https://www.strava.com/oauth/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({
//           client_id: CLIENT_ID,
//           client_secret: CLIENT_SECRET,
//           grant_type: "refresh_token",
//           refresh_token: REFRESH_TOKEN,
//         }),
//       });
//       const data = await response.json();

//       if (data.access_token) {
//         ACCESS_TOKEN = data.access_token;
//         REFRESH_TOKEN = data.refresh_token;

//         localStorage.setItem("STRAVA_ACCESS_TOKEN", ACCESS_TOKEN);
//         localStorage.setItem("STRAVA_REFRESH_TOKEN", REFRESH_TOKEN);

//         console.log("✅ Strava token refreshed");
//       } else {
//         console.error("❌ Failed to refresh token", data);
//       }
//     } catch (err) {
//       console.error("❌ Error refreshing Strava token", err);
//     }
//   }

//   // Fetch activities with auto-refresh
//   async function fetchActivities() {
//     setLoading(true);
//     try {
//       let token = ACCESS_TOKEN;
//       let response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.status === 401) {
//         await refreshStravaToken();
//         token = localStorage.getItem("STRAVA_ACCESS_TOKEN");
//         response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       if (!response.ok) throw new Error(`Strava API error (${response.status})`);

//       const data = await response.json();
//       setActivities(data);
//     } catch (err) {
//       console.error("❌ Error fetching activities:", err);
//       setError("Failed to load activities. Check your token.");
//       setActivities([]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchActivities();
//     const interval = setInterval(refreshStravaToken, 60 * 60 * 1000); // auto-refresh every hour
//     return () => clearInterval(interval);
//   }, []);

//   // Filter activities
//   const filteredActivities = useMemo(() => {
//     return activities.filter((act) => {
//       const distanceKm = act.distance / 1000;
//       const typeMatch = filters.type === "All" || act.type === filters.type;
//       const distanceMatch = distanceKm >= filters.minDistance && distanceKm <= filters.maxDistance;
//       return typeMatch && distanceMatch;
//     });
//   }, [activities, filters]);

//   // Summary stats
//   const summary = useMemo(() => {
//     const totalDistance = filteredActivities
//       .reduce((sum, act) => sum + act.distance / 1000, 0)
//       .toFixed(2);

//     const totalTimeMinutes = filteredActivities.reduce((sum, act) => sum + act.moving_time, 0);
//     const hours = Math.floor(totalTimeMinutes / 3600);
//     const minutes = Math.floor((totalTimeMinutes % 3600) / 60);

//     const totalElevation = filteredActivities
//       .reduce((sum, act) => sum + (act.total_elevation_gain || 0), 0)
//       .toFixed(2);

//     return { totalDistance, hours, minutes, totalElevation };
//   }, [filteredActivities]);

//   // Pagination
//   const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
//   const paginatedActivities = filteredActivities.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="min-h-screen text-gray-200 py-12 px-6 md:px-12">
//       <header className="text-center mb-8">
//         <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">🏃 Strava Dashboard</h1>
//         <p className="text-gray-400 max-w-xl mx-auto">
//           Track your running, cycling, and other activities. Filter, explore, and analyze your training
//           history.
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

//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
//         <div className="flex gap-2 items-center">
//           <label htmlFor="type" className="text-gray-300 font-medium">Activity Type:</label>
//           <select
//             id="type"
//             className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
//             value={filters.type}
//             onChange={(e) => {
//               setFilters((f) => ({ ...f, type: e.target.value }));
//               setCurrentPage(1); // reset page
//             }}
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
//             onChange={(e) => {
//               setFilters((f) => ({ ...f, minDistance: Number(e.target.value) }));
//               setCurrentPage(1);
//             }}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//           <span className="text-gray-400">-</span>
//           <input
//             type="number"
//             min={0}
//             max={500}
//             value={filters.maxDistance}
//             onChange={(e) => {
//               setFilters((f) => ({ ...f, maxDistance: Number(e.target.value) }));
//               setCurrentPage(1);
//             }}
//             className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
//           />
//         </div>
//       </div>

//       {/* Activity Cards */}
//       {loading && <div className="text-center text-gray-400">Loading Strava activities...</div>}
//       {error && <div className="text-center text-red-500">{error}</div>}
//       {!loading && paginatedActivities.length === 0 && (
//         <div className="text-center text-gray-400">No activities match your filters.</div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {paginatedActivities.map((act) => {
//           const distanceKm = (act.distance / 1000).toFixed(2);
//           const movingTimeMin = Math.floor(act.moving_time / 60);
//           const avgSpeed = act.average_speed ? (act.average_speed * 3.6).toFixed(2) : "0.00"; // 2 digits
//           const elevation = act.total_elevation_gain ? act.total_elevation_gain.toFixed(2) : "0.00";

//           return (
//             <div
//               key={act.id}
//               className="bg-gray-800/60 p-5 rounded-3xl shadow-lg hover:scale-105 transform transition"
//             >
//               <h2 className="text-xl font-bold text-yellow-400 mb-2">{act.name}</h2>
//               <p className="text-gray-400 text-sm mb-2">
//                 {new Date(act.start_date).toLocaleDateString()} • {act.type}
//               </p>
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

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-8 gap-3">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             className="px-3 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
//           >
//             Prev
//           </button>
//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-lg transition ${
//                 currentPage === i + 1 ? "bg-yellow-400 text-black" : "bg-gray-700 hover:bg-gray-600"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             className="px-3 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// // 4


// /* eslint-disable no-unused-vars */
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


const STRAVA_ACTIVITIES_URL = "https://www.strava.com/api/v3/athlete/activities";
const CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET;

// Replace this with your Strava profile link
const STRAVA_PROFILE_LINK = "https://www.strava.com/athletes/132335060";

export default function StravaDashboard() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ type: "All", minDistance: 0, maxDistance: 100 });
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Load tokens
  let ACCESS_TOKEN =
    localStorage.getItem("STRAVA_ACCESS_TOKEN") || import.meta.env.VITE_STRAVA_ACCESS_TOKEN;
  let REFRESH_TOKEN =
    localStorage.getItem("STRAVA_REFRESH_TOKEN") || import.meta.env.VITE_STRAVA_REFRESH_TOKEN;

  // Refresh token
  async function refreshStravaToken() {
    try {
      const response = await fetch("https://www.strava.com/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: REFRESH_TOKEN,
        }),
      });
      const data = await response.json();
      if (data.access_token) {
        ACCESS_TOKEN = data.access_token;
        REFRESH_TOKEN = data.refresh_token;
        localStorage.setItem("STRAVA_ACCESS_TOKEN", ACCESS_TOKEN);
        localStorage.setItem("STRAVA_REFRESH_TOKEN", REFRESH_TOKEN);
      } else {
        console.error("Failed to refresh token", data);
      }
    } catch (err) {
      console.error("Error refreshing token", err);
    }
  }

  // Fetch activities
  async function fetchActivities() {
    setLoading(true);
    try {
      let token = ACCESS_TOKEN;
      let response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 401) {
        await refreshStravaToken();
        token = localStorage.getItem("STRAVA_ACCESS_TOKEN");
        response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      if (!response.ok) throw new Error(`Strava API error (${response.status})`);

      const data = await response.json();
      setActivities(data);
    } catch (err) {
      console.error("Error fetching activities:", err);
      setError("Failed to load activities. Check your token.");
      setActivities([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchActivities();
    const interval = setInterval(refreshStravaToken, 60 * 60 * 1000); // auto-refresh every hour
    return () => clearInterval(interval);
  }, []);

  // Filter activities
  const filteredActivities = useMemo(() => {
    return activities.filter((act) => {
      const distanceKm = act.distance / 1000;
      const typeMatch = filters.type === "All" || act.type === filters.type;
      const distanceMatch = distanceKm >= filters.minDistance && distanceKm <= filters.maxDistance;
      return typeMatch && distanceMatch;
    });
  }, [activities, filters]);

  // Sort activities
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
          Welcome to my Strava Dashboard! Track all my running, cycling, and other activities directly
          from my Strava profile. Explore stats, filter by type or distance, analyze trends, and see
          my personal achievements. Check my full profile{" "}
          <a
            href={STRAVA_PROFILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            here
          </a>
          .
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
        <div className=" rounded-3xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4 text-center">
            📊 Activity Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              data={[...filteredActivities]
                .slice() // clone
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
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "#ccc" }}
                domain={[0, "auto"]}
              />
              <Tooltip
                contentStyle={{ background: "#222", border: "none", color: "#fff" }}
              />
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


      {/* Filters + Sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 flex-wrap">
        <div className="flex gap-2 items-center">
          <label htmlFor="type" className="text-gray-300 font-medium">Activity Type:</label>
          <select
            id="type"
            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
            value={filters.type}
            onChange={(e) => {
              setFilters((f) => ({ ...f, type: e.target.value }));
              setCurrentPage(1);
            }}
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
            onChange={(e) => {
              setFilters((f) => ({ ...f, minDistance: Number(e.target.value) }));
              setCurrentPage(1);
            }}
            className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            min={0}
            max={500}
            value={filters.maxDistance}
            onChange={(e) => {
              setFilters((f) => ({ ...f, maxDistance: Number(e.target.value) }));
              setCurrentPage(1);
            }}
            className="w-16 bg-gray-800 text-gray-200 px-2 py-1 rounded-lg text-center"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-gray-300 font-medium">Sort By:</label>
          <select
            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
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
      {!loading && paginatedActivities.length === 0 && (
        <div className="text-center text-gray-400">No activities match your filters.</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedActivities.map((act) => {
          const distanceKm = (act.distance / 1000).toFixed(2);
          const movingTimeMin = Math.floor(act.moving_time / 60);
          const avgSpeed = act.average_speed ? (act.average_speed * 3.6).toFixed(2) : "0.00";
          const elevation = act.total_elevation_gain ? act.total_elevation_gain.toFixed(2) : "0.00";

          return (
            <div
              key={act.id}
              className="bg-gray-800/60 p-5 rounded-3xl shadow-lg hover:scale-105 transform transition"
            >
              <h2 className="text-xl font-bold text-yellow-400 mb-2">{act.name}</h2>
              <p className="text-gray-400 text-sm mb-2">
                {new Date(act.start_date).toLocaleDateString()} • {act.type}
              </p>
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-3 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg transition ${currentPage === i + 1 ? "bg-yellow-400 text-black" : "bg-gray-700 hover:bg-gray-600"
                }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

// 5 CHARTS

// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState, useMemo } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// const STRAVA_ACTIVITIES_URL = "https://www.strava.com/api/v3/athlete/activities";
// const ACCESS_TOKEN = import.meta.env.VITE_STRAVA_ACCESS_TOKEN;

// export default function StravaDashboard() {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filterType, setFilterType] = useState("All");
//   const [sortBy, setSortBy] = useState("date");
//   const [currentPage, setCurrentPage] = useState(1);
//   const activitiesPerPage = 10;

//   // Fetch Strava Data
//   useEffect(() => {
//     async function fetchActivities() {
//       try {
//         const response = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=50`, {
//           headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
//         });
//         if (!response.ok) throw new Error(`Strava API error (${response.status})`);
//         const data = await response.json();
//         setActivities(data);
//       } catch (err) {
//         console.error("❌ Error fetching activities:", err);
//         setActivities([]);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchActivities();
//   }, []);

//   // Filter by activity type
//   const filteredActivities = useMemo(() => {
//     if (filterType === "All") return activities;
//     return activities.filter((act) => act.type === filterType);
//   }, [activities, filterType]);

//   // Sort by selected option
//   const sortedActivities = useMemo(() => {
//     let sorted = [...filteredActivities];
//     if (sortBy === "date") {
//       sorted.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
//     } else if (sortBy === "distance") {
//       sorted.sort((a, b) => b.distance - a.distance);
//     } else if (sortBy === "speed") {
//       sorted.sort((a, b) => (b.average_speed || 0) - (a.average_speed || 0));
//     }
//     return sorted;
//   }, [filteredActivities, sortBy]);

//   // Pagination logic
//   const indexOfLastActivity = currentPage * activitiesPerPage;
//   const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
//   const currentActivities = sortedActivities.slice(indexOfFirstActivity, indexOfLastActivity);

//   const totalPages = Math.ceil(sortedActivities.length / activitiesPerPage);

//   // Summary stats
//   const summary = useMemo(() => {
//     const totalDistance = filteredActivities
//       .reduce((sum, act) => sum + act.distance / 1000, 0)
//       .toFixed(2);

//     const totalMinutes = filteredActivities.reduce((sum, act) => sum + act.moving_time / 60, 0);
//     const totalHours = Math.floor(totalMinutes / 60);
//     const remainingMinutes = Math.floor(totalMinutes % 60);

//     const totalElevation = filteredActivities
//       .reduce((sum, act) => sum + (act.total_elevation_gain || 0), 0)
//       .toFixed(2);

//     return { totalDistance, totalHours, remainingMinutes, totalElevation };
//   }, [filteredActivities]);

//   // Chart Data
//   const chartData = useMemo(() => {
//     return sortedActivities.map((act) => ({
//       date: new Date(act.start_date).toLocaleDateString(),
//       distance: parseFloat((act.distance / 1000).toFixed(2)),
//       speed: act.average_speed ? parseFloat((act.average_speed * 3.6).toFixed(2)) : 0,
//       elevation: act.total_elevation_gain ? parseFloat(act.total_elevation_gain.toFixed(2)) : 0,
//     }));
//   }, [sortedActivities]);

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
//       {/* Header */}
//       <header className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-yellow-400 mb-4">🏃‍♂️ My Strava Dashboard</h1>
//         <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//           Welcome to my Strava Dashboard! Here, you can track all my running, cycling, and other
//           activities directly from my Strava profile. Explore detailed stats, filter by activity
//           type, analyze training trends, and see my personal achievements. Check out my profile on{" "}
//           <a
//             href="https://www.strava.com/athletes/132335060"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-yellow-400 hover:text-yellow-500 underline"
//           >
//             Strava
//           </a>
//           .
//         </p>
//       </header>

//       {/* Summary Cards */}
//       <div className="grid sm:grid-cols-3 gap-4 mb-8">
//         <div className="bg-gray-800/60 p-5 rounded-2xl text-center">
//           <p className="text-gray-400 text-sm">Total Distance</p>
//           <p className="text-yellow-400 text-2xl font-bold">{summary.totalDistance} km</p>
//         </div>
//         <div className="bg-gray-800/60 p-5 rounded-2xl text-center">
//           <p className="text-gray-400 text-sm">Total Time</p>
//           <p className="text-yellow-400 text-2xl font-bold">
//             {summary.totalHours}h {summary.remainingMinutes}m
//           </p>
//         </div>
//         <div className="bg-gray-800/60 p-5 rounded-2xl text-center">
//           <p className="text-gray-400 text-sm">Total Elevation</p>
//           <p className="text-yellow-400 text-2xl font-bold">{summary.totalElevation} m</p>
//         </div>
//       </div>

//       {/* Chart */}
//       {chartData.length > 0 && (
//         <div className="bg-gray-800/60 p-6 rounded-3xl mb-10">
//           <h2 className="text-xl font-bold text-yellow-400 mb-4">📈 Activity Trends</h2>
//           <ResponsiveContainer width="100%" height={320}>
//             <LineChart data={chartData}>
//               <CartesianGrid stroke="#444" strokeDasharray="3 3" />
//               <XAxis dataKey="date" stroke="#ccc" />
//               <YAxis stroke="#ccc" />
//               <Tooltip contentStyle={{ backgroundColor: "#222", border: "none", color: "#fff" }} />
//               <Line type="monotone" dataKey="distance" stroke="#facc15" name="Distance (km)" />
//               <Line type="monotone" dataKey="speed" stroke="#34d399" name="Avg Speed (km/h)" />
//               <Line type="monotone" dataKey="elevation" stroke="#60a5fa" name="Elevation (m)" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       )}

//       {/* Filters */}
//       <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
//         <div className="flex items-center gap-2">
//           <label className="text-gray-300 font-medium">Filter:</label>
//           <select
//             className="bg-gray-800 px-3 py-1 rounded-lg"
//             value={filterType}
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setCurrentPage(1);
//             }}
//           >
//             <option value="All">All</option>
//             <option value="Run">Run</option>
//             <option value="Ride">Ride</option>
//             <option value="Walk">Walk</option>
//             <option value="Hike">Hike</option>
//           </select>
//         </div>

//         <div className="flex items-center gap-2">
//           <label className="text-gray-300 font-medium">Sort By:</label>
//           <select
//             className="bg-gray-800 px-3 py-1 rounded-lg"
//             value={sortBy}
//             onChange={(e) => {
//               setSortBy(e.target.value);
//               setCurrentPage(1);
//             }}
//           >
//             <option value="date">Date</option>
//             <option value="distance">Distance</option>
//             <option value="speed">Avg Speed</option>
//           </select>
//         </div>
//       </div>

//       {/* Activity List */}
//       {loading ? (
//         <p className="text-center text-gray-400">Loading Strava activities...</p>
//       ) : currentActivities.length === 0 ? (
//         <p className="text-center text-gray-400">No activities found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {currentActivities.map((act) => (
//             <li
//               key={act.id}
//               className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700 flex flex-col sm:flex-row sm:justify-between sm:items-center"
//             >
//               <div>
//                 <h3 className="text-yellow-400 font-semibold">{act.name}</h3>
//                 <p className="text-gray-400 text-sm">
//                   {new Date(act.start_date).toLocaleDateString()} —{" "}
//                   {parseFloat((act.distance / 1000).toFixed(2))} km
//                 </p>
//               </div>
//               <div className="text-sm text-gray-300 mt-2 sm:mt-0">
//                 {act.type} — {parseFloat((act.average_speed * 3.6 || 0).toFixed(2))} km/h —{" "}
//                 {parseFloat((act.total_elevation_gain || 0).toFixed(2))} m ↑
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-3 mt-8">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="bg-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
//           >
//             Prev
//           </button>
//           <span className="text-gray-300">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="bg-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
