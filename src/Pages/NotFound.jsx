// import { Link } from "react-router-dom";

// export default function NotFound() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white text-center px-6">
//       <h1 className="text-7xl font-extrabold mb-4 text-blue-500">404</h1>
//       <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
//       <p className="max-w-md text-gray-400 mb-8">
//         Oops! The page you’re looking for doesn’t exist or has been moved.
//       </p>
//       <Link
//         to="/"
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // ✅ Attempt to fetch the last update time from your GitHub repo
    fetch("https://api.github.com/repos/satyajit-jbl/portfolio/commits?per_page=1")
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]?.commit?.committer?.date) {
          const date = new Date(data[0].commit.committer.date);
          setLastUpdated(date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }));
        }
      })
      .catch(() => {
        // fallback to local date if GitHub API fails
        const local = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        setLastUpdated(local);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white text-center px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5602/5602730.png"
        alt="Under Maintenance"
        className="w-40 h-40 mb-6 animate-pulse"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-blue-400">
        Page Under Maintenance
      </h1>
      <p className="max-w-md text-gray-300 mb-6">
        I’m continuously improving and updating this page to provide you a better experience.  
        Please check back soon — new updates are on the way!
      </p>

      {lastUpdated && (
        <p className="text-sm text-gray-400 mb-10 italic">
          Last updated on: {lastUpdated}
        </p>
      )}

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
