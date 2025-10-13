import React from "react";

const SetupScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Strava Setup</h1>
      <p className="text-gray-400 max-w-md text-center">
        Please configure your Strava API tokens in the <code>.env</code> file to
        start fetching your activities.
      </p>
      <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
        <p className="text-yellow-400 font-mono text-sm">
          STRAVA_ACCESS_TOKEN=&lt;your_access_token&gt;
        </p>
        <p className="text-yellow-400 font-mono text-sm">
          STRAVA_REFRESH_TOKEN=&lt;your_refresh_token&gt;
        </p>
        <p className="text-yellow-400 font-mono text-sm">
          STRAVA_CLIENT_ID=&lt;your_client_id&gt;
        </p>
        <p className="text-yellow-400 font-mono text-sm">
          STRAVA_CLIENT_SECRET=&lt;your_client_secret&gt;
        </p>
      </div>
    </div>
  );
};

export default SetupScreen;
