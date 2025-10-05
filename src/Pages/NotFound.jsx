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
// import { useEffect, useState } from "react";

// export default function MaintenancePage() {
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     // Fetch the last commit date from your GitHub repo
//     fetch("https://api.github.com/repos/satyajit-jbl/my-first-portfolio/commits?per_page=1")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data && data.length > 0) {
//           const updatedDate = new Date(data[0].commit.committer.date);
//           const formatted = updatedDate.toLocaleString("en-US", {
//             weekday: "long",
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true,
//           });
//           setLastUpdated(formatted);
//         }
//       })
//       .catch((err) => console.error("Error fetching last updated date:", err));
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 px-6">
//       <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
//         🚧 Site Under Maintenance 🚧
//       </h1>
//       <p className="text-lg text-gray-600 mb-6">
//         I’m currently updating and improving my portfolio. Please check back soon!
//       </p>

//       {lastUpdated ? (
//         <p className="text-sm text-gray-500 mt-4">
//           Last updated on: <span className="font-medium">{lastUpdated}</span>
//         </p>
//       ) : (
//         <p className="text-sm text-gray-400 mt-4 animate-pulse">Fetching latest update...</p>
//       )}

//       <a
//         href="https://github.com/satyajit-jbl/my-first-portfolio"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
//       >
//         View Project on GitHub
//       </a>
//     </div>
//   );
// }



import { useEffect, useState } from "react";

export default function MaintenancePage() {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    // Fetch latest commit date from your GitHub repo
    fetch("https://api.github.com/repos/satyajit-jbl/my-first-portfolio/commits?per_page=1")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const updatedDate = new Date(data[0].commit.committer.date);
          const formatted = updatedDate.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });
          setLastUpdated(formatted);
        }
      })
      .catch((err) => console.error("Error fetching last updated date:", err));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Gradient Background (same as MainLayout) */}
      <div className="fixed inset-0 -z-10 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Glow animation */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-30 blur-3xl animate-pulse"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
        🚧 Site Under Maintenance 🚧
      </h1>

      <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
        I’m currently enhancing and updating my portfolio to bring new features and a better experience.
      </p>

      {lastUpdated ? (
        <p className="text-sm text-gray-300 mt-2">
          Last updated on:{" "}
          <span className="font-semibold text-blue-300">{lastUpdated}</span>
        </p>
      ) : (
        <p className="text-sm text-gray-400 mt-2 animate-pulse">
          Fetching latest update...
        </p>
      )}

      <a
        href="https://github.com/satyajit-jbl/my-first-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
      >
        View Project on GitHub
      </a>
    </div>
  );
}
