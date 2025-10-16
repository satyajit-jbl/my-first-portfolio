// // server/index.js
// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Load from environment
// const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
// const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
// let ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN;
// let REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;

// // Function to refresh token
// async function refreshStravaToken() {
//   try {
//     const res = await fetch("https://www.strava.com/oauth/token", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams({
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         grant_type: "refresh_token",
//         refresh_token: REFRESH_TOKEN,
//       }),
//     });
//     const data = await res.json();
//     ACCESS_TOKEN = data.access_token;
//     REFRESH_TOKEN = data.refresh_token;
//     console.log("🔁 Strava token refreshed");
//   } catch (err) {
//     console.error("Failed to refresh Strava token:", err);
//   }
// }

// // Route to get activities
// app.get("/api/strava/activities", async (req, res) => {
//   try {
//     let response = await fetch(
//       `https://www.strava.com/api/v3/athlete/activities?per_page=30`,
//       { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
//     );

//     // Token expired? Refresh and retry
//     if (response.status === 401) {
//       console.log("⚠ Access token expired. Refreshing...");
//       await refreshStravaToken();
//       response = await fetch(
//         `https://www.strava.com/api/v3/athlete/activities?per_page=30`,
//         { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
//       );
//     }

//     if (!response.ok) {
//       const errText = await response.text();
//       throw new Error(errText);
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "Failed to fetch Strava activities",
//       details: err.message,
//     });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
