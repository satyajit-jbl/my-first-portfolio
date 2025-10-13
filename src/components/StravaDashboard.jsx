import { useEffect, useState } from "react";
// import { fetchActivities, formatDistance, formatTime, formatPace } from "../../utils/stravaUtils";
// import SetupScreen from "../../components/SetupScreen";
import { fetchActivities, formatDistance, formatPace, formatTime } from "../utils/stravaUtils";
import SetupScreen from "./SetupScreen";

export default function StravaDashboard() {
  const [activities, setActivities] = useState([]);
  const [unit, setUnit] = useState("imperial");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities()
      .then(data => setActivities(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <SetupScreen />;

  return (
    <div className="bg-blue-50 min-h-full p-4 rounded-md">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Strava Dashboard</h1>
      {activities.length === 0 ? (
        <p className="text-gray-500">No activities found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map(act => (
            <div key={act.id} className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-shadow">
              <h3 className="text-blue-700 font-semibold">{act.name}</h3>
              <p className="text-gray-600 text-sm">{new Date(act.start_date_local).toLocaleDateString()}</p>
              <div className="mt-2 text-gray-700 space-y-1">
                <p>Type: {act.type}</p>
                <p>Distance: {formatDistance(act.distance, unit)}</p>
                <p>Time: {formatTime(act.moving_time)}</p>
                <p>Avg Pace: {formatPace(act.distance, act.moving_time, unit)}</p>
                <p>Elevation: {act.total_elevation_gain ? Math.round(act.total_elevation_gain * 3.28084) + " ft" : "N/A"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
