import express from "express";
import fetch from "node-fetch"; // or globally in Node 20+

const app = express();
const PORT = 5000;

const CLIENT_ID = "180737";
const CLIENT_SECRET = "2883d52f93af0cb033eeee89e86992fc4fc9ce26";
let ACCESS_TOKEN = "YOUR_INITIAL_ACCESS_TOKEN";
let REFRESH_TOKEN = "YOUR_REFRESH_TOKEN";

async function refreshAccessToken() {
  const res = await fetch(`https://www.strava.com/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });
  const data = await res.json();
  ACCESS_TOKEN = data.access_token;
  REFRESH_TOKEN = data.refresh_token;
  return ACCESS_TOKEN;
}

app.get("/api/strava/activities", async (req, res) => {
  try {
    let token = ACCESS_TOKEN;
    let response = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=50",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 401) {
      // token expired → refresh
      token = await refreshAccessToken();
      response = await fetch(
        "https://www.strava.com/api/v3/athlete/activities?per_page=50",
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
