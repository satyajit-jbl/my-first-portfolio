// import { useEffect } from "react";

// const StravaActivities = () => {
//   useEffect(() => {
//     const testConnection = async () => {
//       try {
//         console.log("🔗 Testing connection to Strava...");

//         const response = await fetch("https://www.strava.com/oauth/token", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             client_id: import.meta.env.VITE_STRAVA_CLIENT_ID,
//             client_secret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
//             refresh_token: import.meta.env.VITE_STRAVA_REFRESH_TOKEN,
//             grant_type: "refresh_token",
//           }),
//         });

//         const data = await response.json();
//         console.log("✅ Strava token response:", data);

//         if (data.access_token) {
//             console.log(data.access_token);
//           alert("✅ Strava connection successful!");
//           localStorage.setItem("strava_token", data.access_token);
//         } else {
//           alert("❌ Strava connection failed. Check console.");
//         }
//       } catch (error) {
//         console.error("⚠️ Error connecting to Strava:", error);
//       }
//     };

//     testConnection();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
//       <h1 className="text-3xl font-bold mb-4">🏃 Strava API Test</h1>
//       <p>Check your browser console for connection logs.</p>
//     </div>
//   );
// };

// export default StravaActivities;
import { useEffect, useState } from "react";

const StravaActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const token = "1b50b9b1de59d19220a4cc17d08a9a3425a1c92d"; // fresh from Postman

async function fetchActivities() {
  try {
    const res = await fetch("https://www.strava.com/api/v3/athlete/activities", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    console.log("🏃 Strava activities raw response:", data);
  } catch (err) {
    console.error("❌ Error fetching activities:", err);
  }
}

fetchActivities();

    fetchActivities();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">🏃 Strava Activities</h1>
      {activities.length > 0 ? (
        <ul className="space-y-2 w-full max-w-xl">
          {activities.map((act) => (
            <li key={act.id} className="p-2 border rounded border-gray-500">
              <p><strong>Name:</strong> {act.name}</p>
              <p><strong>Type:</strong> {act.type}</p>
              <p><strong>Distance:</strong> {(act.distance / 1000).toFixed(2)} km</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities fetched yet. Check console for logs.</p>
      )}
    </div>
  );
};

export default StravaActivities;
