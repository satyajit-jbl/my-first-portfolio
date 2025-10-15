import fetch from "node-fetch";

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;

// In-memory token store
let accessToken = process.env.STRAVA_ACCESS_TOKEN;
let refreshToken = process.env.STRAVA_REFRESH_TOKEN;
let expiresAt = Number(process.env.STRAVA_EXPIRES_AT) || 0;

const STRAVA_ACTIVITIES_URL = "https://www.strava.com/api/v3/athlete/activities";

async function refreshTokenIfNeeded() {
  const now = Math.floor(Date.now() / 1000);

  if (now >= expiresAt - 30) {
    console.log("🔁 Strava token expired, refreshing...");
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });

    const res = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      body: params,
    });

    const data = await res.json();
    accessToken = data.access_token;
    refreshToken = data.refresh_token;
    expiresAt = data.expires_at;

    console.log("✅ Strava token refreshed successfully");
  }
}

export async function getActivities(perPage = 30) {
  await refreshTokenIfNeeded();

  const res = await fetch(`${STRAVA_ACTIVITIES_URL}?per_page=${perPage}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(JSON.stringify(errData));
  }

  return res.json();
}
