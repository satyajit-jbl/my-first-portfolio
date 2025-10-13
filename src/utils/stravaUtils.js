export const STRAVA_ACCESS_TOKEN = import.meta.env.VITE_STRAVA_ACCESS_TOKEN;

export async function fetchActivities() {
  const res = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=50', {
    headers: { Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}` },
  });
  if (!res.ok) throw new Error('Failed to fetch Strava activities');
  return res.json();
}

export function formatDistance(distanceMeters, unit = "imperial") {
  if (!distanceMeters) return "N/A";
  return unit === "metric"
    ? `${(distanceMeters / 1000).toFixed(2)} km`
    : `${(distanceMeters / 1609.34).toFixed(2)} mi`;
}

export function formatTime(seconds) {
  if (!seconds) return "N/A";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h > 0 ? `${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}` : `${m}:${s.toString().padStart(2,"0")}`;
}

export function formatPace(distanceMeters, timeSeconds, unit="imperial") {
  if (!distanceMeters || !timeSeconds) return "N/A";
  const pace = unit === "metric" ? timeSeconds / (distanceMeters/1000) : timeSeconds / (distanceMeters/1609.34);
  const m = Math.floor(pace/60);
  const s = Math.round(pace%60);
  return `${m}:${s.toString().padStart(2,"0")}/${unit==="metric"?"km":"mi"}`;
}
