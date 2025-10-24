// import { useEffect, useState } from "react";
// import { BASE_URL } from "../../../utils/config";

// export default function AdminDashboard() {
//   const [pending, setPending] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 Normalize distance (array or string)
//   const formatDistance = (val) => {
//     if (Array.isArray(val)) return val.join(", ");
//     if (typeof val === "string") return val;
//     return "-";
//   };

//   const fetchPending = async () => {
//     setLoading(true);
//     try {
//       let adminPwd = sessionStorage.getItem("admin_pwd") || null;
//       if (!adminPwd) {
//         adminPwd = prompt("Enter admin password to view pending actions:");
//         if (!adminPwd) {
//           setLoading(false);
//           return;
//         }
//         sessionStorage.setItem("admin_pwd", adminPwd);
//       }

//       const res = await fetch(`${BASE_URL}/events/pending`, {
//         headers: { "x-admin-secret": adminPwd },
//       });

//       if (res.status === 403) {
//         sessionStorage.removeItem("admin_pwd");
//         alert("Incorrect admin password");
//         setLoading(false);
//         return;
//       }

//       const data = await res.json();
//       setPending(data);
//     } catch (err) {
//       console.error("Error loading pending:", err);
//       alert("Failed to load pending items (check console)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPending();
//   }, []);

//   const approve = async (id) => {
//     const pwd =
//       sessionStorage.getItem("admin_pwd") ||
//       prompt("Enter admin password to approve:");
//     if (!pwd) return;
//     try {
//       const res = await fetch(`${BASE_URL}/events/${id}/approve`, {
//         method: "PUT",
//         headers: { "x-admin-secret": pwd },
//       });
//       if (res.status === 403) {
//         sessionStorage.removeItem("admin_pwd");
//         alert("Incorrect password");
//         return;
//       }
//       const data = await res.json();
//       alert(data.message);
//       fetchPending();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to approve");
//     }
//   };

//   const reject = async (id) => {
//     const pwd =
//       sessionStorage.getItem("admin_pwd") ||
//       prompt("Enter admin password to reject:");
//     if (!pwd) return;
//     try {
//       const res = await fetch(`${BASE_URL}/events/${id}/reject`, {
//         method: "DELETE",
//         headers: { "x-admin-secret": pwd },
//       });
//       if (res.status === 403) {
//         sessionStorage.removeItem("admin_pwd");
//         alert("Incorrect password");
//         return;
//       }
//       const data = await res.json();
//       alert(data.message);
//       fetchPending();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to reject");
//     }
//   };

//   const renderChangeRow = (label, oldValue, newValue) => {
//     if (oldValue === newValue) return null;
//     return (
//       <tr>
//         <td className="font-semibold pr-2">{label}</td>
//         <td className="text-red-400 line-through">{oldValue || "-"}</td>
//         <td className="text-green-400">{newValue || "-"}</td>
//       </tr>
//     );
//   };

//   return (
//     <div className="min-h-screen p-4 text-gray-100">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold text-yellow-400 mb-6">
//           🛠️ Admin — Pending Actions
//         </h1>

//         {loading ? (
//           <p>Loading pending actions...</p>
//         ) : pending.length === 0 ? (
//           <p>No pending items.</p>
//         ) : (
//           pending.map((item) => {
//             const action = item.pendingAction;
//             const oldData = item;
//             const newData = item.pendingData;

//             return (
//               <div
//                 key={item._id}
//                 className=" p-4 rounded mb-4 border border-gray-700"
//               >
//                 {/* 🔹 Action Summary Title */}
//                 <h2 className="text-xl font-semibold mb-2">
//                   {action === "create" && "🟢 New Event Pending Approval"}
//                   {action === "update" && "🟡 Event Update Pending Approval"}
//                   {action === "delete" && "🔴 Deletion Request Pending Approval"}
//                 </h2>

//                 {/* 🔹 Basic Info */}
//                 <p className="text-sm text-gray-400 mb-2">
//                   ID: {item._id} | Requested on:{" "}
//                   {new Date(item.dateCreated).toLocaleString()}
//                 </p>

//                 {/* 🔹 CREATE Action */}
//                 {action === "create" && (
//                   <div className=" p-3 rounded">
//                     <p className="text-yellow-300 font-semibold mb-2">
//                       New Event Details:
//                     </p>
//                     <p>Name: {newData?.name}</p>
//                     <p>Date: {newData?.date}</p>
//                     <p>Location: {newData?.location}</p>
//                     <p>Distance: {formatDistance(newData?.distance)}</p>
//                     <p>Organizer: {newData?.organizer}</p>
//                   </div>
//                 )}

//                 {/* 🔹 UPDATE Action */}
//                 {action === "update" && (
//                   <div className="bg-[#08152d] p-3 rounded">
//                     <p className="text-yellow-300 font-semibold mb-2">
//                       Update Summary (Before → After)
//                     </p>
//                     <table className="text-sm w-full">
//                       <tbody>
//                         {renderChangeRow("Name", oldData.name, newData.name)}
//                         {renderChangeRow("Date", oldData.date, newData.date)}
//                         {renderChangeRow(
//                           "Location",
//                           oldData.location,
//                           newData.location
//                         )}
//                         {renderChangeRow(
//                           "Distance",
//                           formatDistance(oldData.distance),
//                           formatDistance(newData.distance)
//                         )}
//                         {renderChangeRow(
//                           "Organizer",
//                           oldData.organizer,
//                           newData.organizer
//                         )}
//                         {renderChangeRow(
//                           "Deadline",
//                           oldData.registrationDeadline,
//                           newData.registrationDeadline
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}

//                 {/* 🔹 DELETE Action */}
//                 {action === "delete" && (
//                   <div className="bg-[#240b0b] p-3 rounded">
//                     <p className="text-red-300 font-semibold mb-2">
//                       This event will be permanently deleted:
//                     </p>
//                     <p>Name: {oldData.name}</p>
//                     <p>Date: {oldData.date}</p>
//                     <p>Location: {oldData.location}</p>
//                     <p>Distance: {formatDistance(oldData.distance)}</p>
//                     <p>Organizer: {oldData.organizer}</p>
//                   </div>
//                 )}

//                 {/* 🔹 Action Buttons */}
//                 <div className="flex gap-3 mt-3">
//                   <button
//                     onClick={() => approve(item._id)}
//                     className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
//                   >
//                     ✅ Approve
//                   </button>
//                   <button
//                     onClick={() => reject(item._id)}
//                     className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     ❌ Reject
//                   </button>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/config";

export default function AdminDashboard() {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatDistance = (val) => {
    if (Array.isArray(val)) return val.join(", ");
    if (typeof val === "string") return val;
    return "-";
  };

  const fetchPending = async () => {
    setLoading(true);
    try {
      let adminPwd = sessionStorage.getItem("admin_pwd") || null;
      if (!adminPwd) {
        adminPwd = prompt("Enter admin password to view pending actions:");
        if (!adminPwd) {
          setLoading(false);
          return;
        }
        sessionStorage.setItem("admin_pwd", adminPwd);
      }

      const res = await fetch(`${BASE_URL}/events/pending`, {
        headers: { "x-admin-secret": adminPwd },
      });

      if (res.status === 403) {
        sessionStorage.removeItem("admin_pwd");
        alert("Incorrect admin password");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setPending(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load pending items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const approve = async (id) => {
    const pwd = sessionStorage.getItem("admin_pwd") || prompt("Enter admin password to approve:");
    if (!pwd) return;
    try {
      const res = await fetch(`${BASE_URL}/events/${id}/approve`, {
        method: "PUT",
        headers: { "x-admin-secret": pwd },
      });
      if (res.status === 403) {
        sessionStorage.removeItem("admin_pwd");
        alert("Incorrect password");
        return;
      }
      const data = await res.json();
      alert(data.message);
      fetchPending();
    } catch (err) {
      console.error(err);
      alert("Failed to approve");
    }
  };

  const reject = async (id) => {
    const pwd = sessionStorage.getItem("admin_pwd") || prompt("Enter admin password to reject:");
    if (!pwd) return;
    try {
      const res = await fetch(`${BASE_URL}/events/${id}/reject`, {
        method: "DELETE",
        headers: { "x-admin-secret": pwd },
      });
      if (res.status === 403) {
        sessionStorage.removeItem("admin_pwd");
        alert("Incorrect password");
        return;
      }
      const data = await res.json();
      alert(data.message);
      fetchPending();
    } catch (err) {
      console.error(err);
      alert("Failed to reject");
    }
  };

  const renderChangeRow = (label, oldValue, newValue) => {
    if (oldValue === newValue) return null;
    return (
      <tr>
        <td className="font-semibold pr-2">{label}</td>
        <td className="text-red-400 line-through">{oldValue || "-"}</td>
        <td className="text-green-400">{newValue || "-"}</td>
      </tr>
    );
  };

  const getRequestDate = (item) => {
    return item.requestedAt
      ? new Date(item.requestedAt).toLocaleString()
      : "-";
  };

  return (
    <div className="min-h-screen p-4 text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          🛠️ Admin — Pending Actions
        </h1>

        {loading ? (
          <p>Loading pending actions...</p>
        ) : pending.length === 0 ? (
          <p>No pending items.</p>
        ) : (
          pending.map((item) => {
            const action = item.pendingAction;
            const oldData = item;
            const newData = item.pendingData;

            return (
              <div
                key={item._id}
                className=" p-4 rounded mb-4 border border-gray-700"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {action === "create" && "🟢 New Event Pending Approval"}
                  {action === "update" && "🟡 Event Update Pending Approval"}
                  {action === "delete" && "🔴 Deletion Request Pending Approval"}
                </h2>

                <p className="text-sm text-gray-400 mb-2">
                  ID: {item._id} | Requested on: {getRequestDate(item)}
                </p>

                {action === "create" && (
                  <div className="p-3 rounded">
                    <p className="text-yellow-300 font-semibold mb-2">
                      New Event Details:
                    </p>
                    <p>Name: {newData?.name}</p>
                    <p>Date: {newData?.date}</p>
                    <p>Location: {newData?.location}</p>
                    <p>Distance: {formatDistance(newData?.distance)}</p>
                    <p>Organizer: {newData?.organizer}</p>
                  </div>
                )}

                {action === "update" && (
                  <div className="bg-[#08152d] p-3 rounded">
                    <p className="text-yellow-300 font-semibold mb-2">
                      Update Summary (Before → After)
                    </p>
                    <table className="text-sm w-full">
                      <tbody>
                        {renderChangeRow("Name", oldData.name, newData.name)}
                        {renderChangeRow("Date", oldData.date, newData.date)}
                        {renderChangeRow("Location", oldData.location, newData.location)}
                        {renderChangeRow(
                          "Distance",
                          formatDistance(oldData.distance),
                          formatDistance(newData.distance)
                        )}
                        {renderChangeRow("Organizer", oldData.organizer, newData.organizer)}
                        {renderChangeRow(
                          "Deadline",
                          oldData.registrationDeadline,
                          newData.registrationDeadline
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {action === "delete" && (
                  <div className="bg-[#240b0b] p-3 rounded">
                    <p className="text-red-300 font-semibold mb-2">
                      This event will be permanently deleted:
                    </p>
                    <p>Name: {oldData.name}</p>
                    <p>Date: {oldData.date}</p>
                    <p>Location: {oldData.location}</p>
                    <p>Distance: {formatDistance(oldData.distance)}</p>
                    <p>Organizer: {oldData.organizer}</p>
                  </div>
                )}

                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => approve(item._id)}
                    className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                  >
                    ✅ Approve
                  </button>
                  <button
                    onClick={() => reject(item._id)}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                  >
                    ❌ Reject
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
