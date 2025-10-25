// import { useEffect, useState } from "react";
// import { BASE_URL } from "../../../utils/config";
// import { Edit2, Trash2 } from "lucide-react";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// // 🌌 Global SweetAlert2 Theme (Dark Blue + Glow)
// const swalTheme = Swal.mixin({
//   background: "linear-gradient(145deg, #0a0f24, #0d1533)", // dark-blue gradient
//   color: "#e0e7ff",
//   showClass: {
//     popup: "animate__animated animate__fadeInDown animate__faster",
//   },
//   hideClass: {
//     popup: "animate__animated animate__fadeOutUp animate__faster",
//   },
//   customClass: {
//     popup: "rounded-2xl shadow-2xl border border-blue-800/30 backdrop-blur-md",
//     title: "text-blue-300 font-semibold tracking-wide",
//     htmlContainer: "text-blue-100",
//     confirmButton:
//       "bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 focus:outline-none",
//     cancelButton:
//       "bg-gray-700 text-gray-200 px-5 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 focus:outline-none",
//   },
//   buttonsStyling: false,
//   timerProgressBar: true,
// });

// // 🌠 Global SweetAlert2 Toast Theme
// const Toast = swalTheme.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 3000,
//   showClass: { popup: "animate__animated animate__fadeInRight" },
//   hideClass: { popup: "animate__animated animate__fadeOutRight" },
//   customClass: {
//     popup:
//       "bg-[#0b1220]/95 text-blue-100 border border-blue-700/40 rounded-xl shadow-lg backdrop-blur-sm",
//   },
// });

// export default function RunningEventsUpdate() {
//   const [events, setEvents] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     date: "",
//     location: "",
//     distance: [],
//     organizer: "",
//     registrationDeadline: "",
//     registrationLink: "",
//   });
//   const [editId, setEditId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState({
//     name: "",
//     location: "",
//     type: "",
//     distance: "",
//   });


//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const eventsPerPage = 5;

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/events`);
//       const data = await res.json();
//       data.sort((a, b) => new Date(a.date) - new Date(b.date));
//       setEvents(data);
//     } catch (err) {
//       console.error("Error fetching events:", err);
//       swalTheme.fire({
//         title: "Error!",
//         text: "Failed to fetch events.",
//         icon: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filter]);

//   const handleChange = (e) =>
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleDistanceChange = (e) => {
//     const value = e.target.value;
//     setFormData((prev) => {
//       if (prev.distance.includes(value)) {
//         return { ...prev, distance: prev.distance.filter((d) => d !== value) };
//       } else {
//         return { ...prev, distance: [...prev.distance, value] };
//       }
//     });
//   };


//   // Add or Update Event
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // 🟢 Only confirm when adding a new event
//       if (!editId) {
//         const result = await swalTheme.fire({
//           title: "Add New Event?",
//           text: "This event will be sent for admin approval.",
//           icon: "question",
//           showCancelButton: true,
//           confirmButtonText: "Yes, add it!",
//           cancelButtonText: "Cancel",
//         });

//         if (!result.isConfirmed) return; // Stop if user cancels
//       }

//       const method = editId ? "PUT" : "POST";
//       const url = editId ? `${BASE_URL}/events/${editId}` : `${BASE_URL}/events`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       Toast.fire({
//         icon: "success",
//         title: data.message || (editId ? "Event updated!" : "Event added!"),
//       });

//       // Reset form
//       setFormData({
//         name: "",
//         date: "",
//         location: "",
//         distance: [],
//         organizer: "",
//         registrationDeadline: "",
//         registrationLink: "",
//       });
//       setEditId(null);
//       fetchEvents();
//     } catch (err) {
//       console.error("Error saving event:", err);
//       swalTheme.fire({
//         title: "Error!",
//         text: "Failed to submit. Check console.",
//         icon: "error",
//       });
//     }
//   };


//   // Prepare edit form
//   const handleEdit = (ev) => {
//     const source =
//       ev.pendingAction === "update" && ev.pendingData ? ev.pendingData : ev;
//     setFormData({
//       name: source.name || "",
//       date: source.date || "",
//       location: source.location || "",
//       distance: Array.isArray(source.distance)
//         ? source.distance
//         : [source.distance || ""],
//       organizer: source.organizer || "",
//       registrationDeadline: source.registrationDeadline || "",
//       registrationLink: source.registrationLink || "",
//     });
//     setEditId(ev._id);

//     swalTheme.fire({
//       title: `Edit Event: ${source.name}`,
//       text: "⚡ Update details and submit for review.",
//       icon: "info",
//       confirmButtonText: "Got it",
//     });
//   };

//   // Request deletion
//   const requestDelete = async (id) => {
//     const result = await swalTheme.fire({
//       title: "Are you sure to delete this event?",
//       text: "This action will await admin approval.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, request it!",
//       cancelButtonText: "Cancel",
//     });

//     if (!result.isConfirmed) return;

//     try {
//       const res = await fetch(`${BASE_URL}/events/${id}/request`, {
//         method: "DELETE",
//       });
//       const data = await res.json();

//       Toast.fire({
//         icon: "success",
//         title: data.message || "Deletion request sent!",
//       });

//       fetchEvents();
//     } catch (err) {
//       console.error(err);
//       swalTheme.fire({
//         title: "Error!",
//         text: "Failed to request deletion",
//         icon: "error",
//       });
//     }
//   };

//   // Distance badge helpers
//   const getDistanceLabel = (dist) => {
//     if (dist === "half") return "21k";
//     if (dist === "full") return "42k";
//     return dist.toUpperCase();
//   };

//   const getBadgeColor = (dist) => {
//     switch (dist) {
//       case "5k":
//         return "bg-green-600";
//       case "7k":
//         return "bg-blue-600";
//       case "10k":
//         return "bg-purple-600";
//       case "half":
//         return "bg-orange-600";
//       case "full":
//         return "bg-red-600";
//       default:
//         return "bg-gray-600";
//     }
//   };

//   // Filtered + Paginated Events
//   const filteredEvents = events.filter((ev) => {
//     const matchesName = ev.name
//       ?.toLowerCase()
//       .includes(filter.name.toLowerCase());
//     const matchesLocation = ev.location
//       ?.toLowerCase()
//       .includes(filter.location.toLowerCase());
//     const matchesType = filter.type
//       ? ev.type?.toLowerCase() === filter.type.toLowerCase()
//       : true;
//     const matchesDistance = filter.distance
//       ? Array.isArray(ev.distance)
//         ? ev.distance.includes(filter.distance)
//         : ev.distance === filter.distance
//       : true;
//     return matchesName && matchesLocation && matchesType && matchesDistance;
//   });

//   const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
//   const startIndex = (currentPage - 1) * eventsPerPage;
//   const currentEvents = filteredEvents.slice(
//     startIndex,
//     startIndex + eventsPerPage
//   );

//   return (
//     <div className="min-h-screen p-4 text-gray-100">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
//           🏃‍♂️ Running Events
//         </h1>

//         {/* FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-[#0b1220] p-6 rounded-lg shadow-md mb-6"
//         >
//           <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Event Name"
//               required
//               className="p-2 rounded bg-[#0f1724]"
//             />
//             {/* <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               className="p-2 rounded bg-[#0f1724]"
//             /> */}
//             {/* Event Date */}
//             <DatePicker
//               selected={formData.date ? new Date(formData.date) : null}
//               onChange={(date) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   date: date.toISOString().split("T")[0],
//                 }))
//               }
//               placeholderText="Select Event Date"
//               required
//               dateFormat="dd/MM/yyyy"
//               className="p-2 rounded bg-[#0f1724] text-gray-100 w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
//             />
//             <input
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Location"
//               required
//               className="p-2 rounded bg-[#0f1724]"
//             />

//             {/* Distance checkboxes */}
//             <div className="flex flex-wrap gap-3 bg-[#0f1724] p-2 rounded">
//               {["5k", "7k","8k", "10k", "half", "full"].map((dist) => (
//                 <label key={dist} className="flex items-center gap-1">
//                   <input
//                     type="checkbox"
//                     value={dist}
//                     checked={formData.distance.includes(dist)}
//                     onChange={handleDistanceChange}

//                     className="accent-yellow-400"
//                   />
//                   <span className="capitalize">{getDistanceLabel(dist)}</span>
//                 </label>
//               ))}
//             </div>

//             <input
//               name="organizer"
//               value={formData.organizer}
//               onChange={handleChange}
//               placeholder="Organizer"
//               className="p-2 rounded bg-[#0f1724]"
//             />
//             {/* <input
//               type="date"
//               name="registrationDeadline"
//               placeholder="registrationDeadline"
//               value={formData.registrationDeadline}
//               onChange={handleChange}
//               required
//               className="p-2 rounded bg-[#0f1724]"
//             /> */}
//             {/* Registration Deadline */}
//             <DatePicker
//               selected={formData.registrationDeadline ? new Date(formData.registrationDeadline) : null}
//               onChange={(date) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   registrationDeadline: date.toISOString().split("T")[0],
//                 }))
//               }
//               placeholderText="Select Registration Deadline"
//               required
//               dateFormat="dd/MM/yyyy"
//               className="p-2 rounded bg-[#0f1724] text-gray-100 w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
//             />
//           </div>

//           <input
//             name="registrationLink"
//             value={formData.registrationLink}
//             required
//             onChange={handleChange}
//             placeholder="Registration Link (https://...)"
//             type="url"
//             className="mt-3 p-2 rounded bg-[#0f1724] w-full"
//           />

//           <div className="flex gap-2 mt-4">
//             <button
//               type="submit"
//               className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
//             >
//               {editId ? "Submit Update" : "Add Event"}
//             </button>
//             {editId && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setEditId(null);
//                   setFormData({
//                     name: "",
//                     date: "",
//                     location: "",
//                     distance: [],
//                     organizer: "",
//                     registrationDeadline: "",
//                     registrationLink: "",
//                   });
//                 }}
//                 className="bg-gray-600 px-3 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>

//         {/* FILTER BAR */}
//         <div className="bg-[#0b1220] p-4 mb-6 rounded-lg flex flex-wrap gap-3 justify-center">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={filter.name}
//             onChange={(e) => setFilter({ ...filter, name: e.target.value })}
//             className="p-2 rounded bg-[#0f1724]"
//           />
//           <input
//             type="text"
//             placeholder="Search by location"
//             value={filter.location}
//             onChange={(e) => setFilter({ ...filter, location: e.target.value })}
//             className="p-2 rounded bg-[#0f1724]"
//           />
//           <select
//             value={filter.type}
//             onChange={(e) => setFilter({ ...filter, type: e.target.value })}
//             className="p-2 rounded bg-[#0f1724]"
//           >
//             <option value="">All Types</option>
//             <option value="trail">Trail</option>
//             <option value="road">Road</option>
//             <option value="fun-run">Fun Run</option>
//           </select>
//           <select
//             value={filter.distance}
//             onChange={(e) =>
//               setFilter({ ...filter, distance: e.target.value })
//             }
//             className="p-2 rounded bg-[#0f1724]"
//           >
//             <option value="">All Distances</option>
//             {["5k", "7k", "10k", "half", "full"].map((d) => (
//               <option key={d} value={d}>
//                 {getDistanceLabel(d)}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* EVENTS TABLE */}
//         <div className="bg-[#071128] p-4 rounded-lg shadow">
//           <h2 className="text-xl mb-3">
//             Upcoming events (Click event name for registration)
//           </h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : filteredEvents.length === 0 ? (
//             <p>No events found.</p>
//           ) : (
//             <>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full text-left">
//                   <thead className="text-yellow-400">
//                     <tr>
//                       <th className="p-2">Sl</th>
//                       <th className="p-2">Event Name</th>
//                       <th className="p-2">Date</th>
//                       <th className="p-2">Location</th>
//                       <th className="p-2">Distance</th>
//                       <th className="p-2">Organizer</th>
//                       <th className="p-2">Deadline</th>
//                       <th className="p-2 text-center">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentEvents.map((ev, index) => (
//                       <tr key={ev._id} className="border-t border-gray-700">
//                         <td className="p-2">{startIndex + index + 1}</td>
//                         <td className="p-2">
//                           <a
//                             href={ev.registrationLink}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="text-blue-300 hover:underline"
//                           >
//                             {ev.name}
//                           </a>
//                         </td>
//                         <td className="p-2">
//                           {ev.date
//                             ? new Date(ev.date).toLocaleDateString("en-GB")
//                             : "-"}
//                         </td>
//                         <td className="p-2">{ev.location}</td>
//                         <td className="p-2 flex flex-wrap gap-1">
//                           {Array.isArray(ev.distance)
//                             ? ev.distance.map((dist) => (
//                               <span
//                                 key={dist}
//                                 className={`${getBadgeColor(
//                                   dist
//                                 )} text-white text-xs px-2 py-1 rounded-full`}
//                               >
//                                 {getDistanceLabel(dist)}
//                               </span>
//                             ))
//                             : ev.distance}
//                         </td>
//                         <td className="p-2">{ev.organizer}</td>
//                         <td
//                           className={`p-2 ${ev.registrationDeadline &&
//                             new Date(ev.registrationDeadline) < new Date()
//                             ? "text-red-500 font-semibold"
//                             : ""
//                             }`}
//                         >
//                           {ev.registrationDeadline
//                             ? new Date(ev.registrationDeadline) < new Date()
//                               ? "Closed"
//                               : new Date(ev.registrationDeadline).toLocaleDateString(
//                                 "en-GB"
//                               )
//                             : "-"}
//                         </td>
//                         <td className="p-2 text-center align-middle">
//                           <div className="flex justify-center items-center gap-4">
//                             <button
//                               onClick={() => handleEdit(ev)}
//                               title="Edit"
//                               className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer hover:scale-110"
//                             >
//                               <Edit2 size={18} />
//                             </button>
//                             <button
//                               onClick={() => requestDelete(ev._id)}
//                               title="Delete"
//                               className="text-gray-300 hover:text-red-500 transition-colors duration-200 cursor-pointer hover:scale-110"
//                             >
//                               <Trash2 size={18} />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* PAGINATION */}
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <button
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage((prev) => prev - 1)}
//                   className={`px-3 py-1 rounded ${currentPage === 1
//                     ? "bg-gray-600 cursor-not-allowed"
//                     : "bg-yellow-400 text-black"
//                     }`}
//                 >
//                   Prev
//                 </button>

//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <button
//                     key={i + 1}
//                     onClick={() => setCurrentPage(i + 1)}
//                     className={`px-3 py-1 rounded ${currentPage === i + 1
//                       ? "bg-yellow-400 text-black"
//                       : "bg-gray-700"
//                       }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}

//                 <button
//                   disabled={currentPage === totalPages}
//                   onClick={() => setCurrentPage((prev) => prev + 1)}
//                   className={`px-3 py-1 rounded ${currentPage === totalPages
//                     ? "bg-gray-600 cursor-not-allowed"
//                     : "bg-yellow-400 text-black"
//                     }`}
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/config";
import { Edit2, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 🌌 Global SweetAlert2 Theme (Dark Blue + Glow)
const swalTheme = Swal.mixin({
  background: "linear-gradient(145deg, #0a0f24, #0d1533)",
  color: "#e0e7ff",
  showClass: {
    popup: "animate__animated animate__fadeInDown animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp animate__faster",
  },
  customClass: {
    popup: "rounded-2xl shadow-2xl border border-blue-800/30 backdrop-blur-md",
    title: "text-blue-300 font-semibold tracking-wide",
    htmlContainer: "text-blue-100",
    confirmButton:
      "bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 focus:outline-none",
    cancelButton:
      "bg-gray-700 text-gray-200 px-5 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 focus:outline-none",
  },
  buttonsStyling: false,
  timerProgressBar: true,
});

// 🌠 Global SweetAlert2 Toast Theme
const Toast = swalTheme.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  showClass: { popup: "animate__animated animate__fadeInRight" },
  hideClass: { popup: "animate__animated animate__fadeOutRight" },
  customClass: {
    popup:
      "bg-[#0b1220]/95 text-blue-100 border border-blue-700/40 rounded-xl shadow-lg backdrop-blur-sm",
  },
});

export default function RunningEventsUpdate() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    distance: [],
    organizer: "",
    registrationDeadline: "",
    registrationLink: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    name: "",
    location: "",
    type: "",
    distance: "",
  });

  // 🧭 Sorting
  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  // Fetch events
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/events`);
      const data = await res.json();
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
      swalTheme.fire({
        title: "Error!",
        text: "Failed to fetch events.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleDistanceChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => {
      if (prev.distance.includes(value)) {
        return { ...prev, distance: prev.distance.filter((d) => d !== value) };
      } else {
        return { ...prev, distance: [...prev.distance, value] };
      }
    });
  };

  // Add or Update Event
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!editId) {
        const result = await swalTheme.fire({
          title: "Add New Event?",
          text: "This event will be sent for admin approval.",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes, add it!",
          cancelButtonText: "Cancel",
        });
        if (!result.isConfirmed) return;
      }

      const method = editId ? "PUT" : "POST";
      const url = editId ? `${BASE_URL}/events/${editId}` : `${BASE_URL}/events`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      Toast.fire({
        icon: "success",
        title: data.message || (editId ? "Event updated!" : "Event added!"),
      });

      setFormData({
        name: "",
        date: "",
        location: "",
        distance: [],
        organizer: "",
        registrationDeadline: "",
        registrationLink: "",
      });
      setEditId(null);
      fetchEvents();
    } catch (err) {
      console.error("Error saving event:", err);
      swalTheme.fire({
        title: "Error!",
        text: "Failed to submit. Check console.",
        icon: "error",
      });
    }
  };

  const handleEdit = (ev) => {
    const source =
      ev.pendingAction === "update" && ev.pendingData ? ev.pendingData : ev;
    setFormData({
      name: source.name || "",
      date: source.date || "",
      location: source.location || "",
      distance: Array.isArray(source.distance)
        ? source.distance
        : [source.distance || ""],
      organizer: source.organizer || "",
      registrationDeadline: source.registrationDeadline || "",
      registrationLink: source.registrationLink || "",
    });
    setEditId(ev._id);
    swalTheme.fire({
      title: `Edit Event: ${source.name}`,
      text: "⚡ Update details and submit for review.",
      icon: "info",
      confirmButtonText: "Got it",
    });
  };

  const requestDelete = async (id) => {
    const result = await swalTheme.fire({
      title: "Are you sure to delete this event?",
      text: "This action will await admin approval.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, request it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;
    try {
      const res = await fetch(`${BASE_URL}/events/${id}/request`, {
        method: "DELETE",
      });
      const data = await res.json();
      Toast.fire({
        icon: "success",
        title: data.message || "Deletion request sent!",
      });
      fetchEvents();
    } catch (err) {
      console.error(err);
      swalTheme.fire({
        title: "Error!",
        text: "Failed to request deletion",
        icon: "error",
      });
    }
  };

  const getDistanceLabel = (dist) => {
    if (dist === "half") return "21k";
    if (dist === "full") return "42k";
    return dist.toUpperCase();
  };

  const getBadgeColor = (dist) => {
    switch (dist) {
      case "5k":
        return "bg-green-600";
      case "7k":
        return "bg-blue-600";
      case "10k":
        return "bg-purple-600";
      case "half":
        return "bg-orange-600";
      case "full":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  // Filter + Sort + Paginate
  const filteredEvents = events.filter((ev) => {
    const matchesName = ev.name
      ?.toLowerCase()
      .includes(filter.name.toLowerCase());
    const matchesLocation = ev.location
      ?.toLowerCase()
      .includes(filter.location.toLowerCase());
    const matchesType = filter.type
      ? ev.type?.toLowerCase() === filter.type.toLowerCase()
      : true;
    const matchesDistance = filter.distance
      ? Array.isArray(ev.distance)
        ? ev.distance.includes(filter.distance)
        : ev.distance === filter.distance
      : true;
    return matchesName && matchesLocation && matchesType && matchesDistance;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a[sortField]);
    const dateB = new Date(b[sortField]);
    if (isNaN(dateA) || isNaN(dateB)) return 0;
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = sortedEvents.slice(startIndex, startIndex + eventsPerPage);

  return (
    <div className="min-h-screen p-4 text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
          🏃‍♂️ Running Events
        </h1>

        {/* FORM (unchanged) */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0b1220] p-6 rounded-lg shadow-md mb-6"
        >
          <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Event Name"
              required
              className="p-2 rounded bg-[#0f1724]"
            />
            {/* <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="p-2 rounded bg-[#0f1724]"
                    /> */}
            {/* Event Date */}
            <DatePicker
              selected={formData.date ? new Date(formData.date) : null}
              onChange={(date) =>
                setFormData((prev) => ({
                  ...prev,
                  date: date.toISOString().split("T")[0],
                }))
              }
              placeholderText="Select Event Date"
              required
              dateFormat="dd/MM/yyyy"
              className="p-2 rounded bg-[#0f1724] text-gray-100 w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
              className="p-2 rounded bg-[#0f1724]"
            />

            {/* Distance checkboxes */}
            <div className="flex flex-wrap gap-3 bg-[#0f1724] p-2 rounded">
              {["5k", "7k", "8k", "10k", "half", "full"].map((dist) => (
                <label key={dist} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    value={dist}
                    checked={formData.distance.includes(dist)}
                    onChange={handleDistanceChange}

                    className="accent-yellow-400"
                  />
                  <span className="capitalize">{getDistanceLabel(dist)}</span>
                </label>
              ))}
            </div>

            <input
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
              placeholder="Organizer"
              className="p-2 rounded bg-[#0f1724]"
            />
            {/* <input
                      type="date"
                      name="registrationDeadline"
                      placeholder="registrationDeadline"
                      value={formData.registrationDeadline}
                      onChange={handleChange}
                      required
                      className="p-2 rounded bg-[#0f1724]"
                    /> */}
            {/* Registration Deadline */}
            <DatePicker
              selected={formData.registrationDeadline ? new Date(formData.registrationDeadline) : null}
              onChange={(date) =>
                setFormData((prev) => ({
                  ...prev,
                  registrationDeadline: date.toISOString().split("T")[0],
                }))
              }
              placeholderText="Select Registration Deadline"
              required
              dateFormat="dd/MM/yyyy"
              className="p-2 rounded bg-[#0f1724] text-gray-100 w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <input
            name="registrationLink"
            value={formData.registrationLink}
            required
            onChange={handleChange}
            placeholder="Registration Link (https://...)"
            type="url"
            className="mt-3 p-2 rounded bg-[#0f1724] w-full"
          />

          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
            >
              {editId ? "Submit Update" : "Add Event"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setFormData({
                    name: "",
                    date: "",
                    location: "",
                    distance: [],
                    organizer: "",
                    registrationDeadline: "",
                    registrationLink: "",
                  });
                }}
                className="bg-gray-600 px-3 py-2 rounded"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* FILTER BAR + SORT */}
        <div className="bg-[#0b1220] p-4 mb-6 rounded-lg flex flex-wrap gap-3 justify-center items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={filter.name}
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            className="p-2 rounded bg-[#0f1724]"
          />
          <input
            type="text"
            placeholder="Search by location"
            value={filter.location}
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
            className="p-2 rounded bg-[#0f1724]"
          />
          <select
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
            className="p-2 rounded bg-[#0f1724]"
          >
            <option value="">All Types</option>
            <option value="trail">Trail</option>
            <option value="road">Road</option>
            <option value="fun-run">Fun Run</option>
          </select>
          <select
            value={filter.distance}
            onChange={(e) =>
              setFilter({ ...filter, distance: e.target.value })
            }
            className="p-2 rounded bg-[#0f1724]"
          >
            <option value="">All Distances</option>
            {["5k", "7k", "10k", "half", "full"].map((d) => (
              <option key={d} value={d}>
                {getDistanceLabel(d)}
              </option>
            ))}
          </select>

          {/* 🧭 Sort Controls */}
          <div className="flex items-center gap-2">
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="p-2 rounded bg-[#0f1724]"
            >
              <option value="date">Event Date</option>
              <option value="registrationDeadline">Deadline Date</option>
            </select>
            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className={`px-3 py-2 rounded font-semibold transition-all duration-300 ${sortOrder === "asc"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-black shadow-md shadow-yellow-400/30"
                : "bg-gradient-to-r from-blue-500 to-cyan-400 text-black shadow-md shadow-cyan-400/30"
                }`}
            >
              {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
            </button>
          </div>
        </div>
        {/* 🌟 FILTER BAR + SORT (Fully Responsive) */}
        <div
          className="bg-[#0b1220] p-4 mb-6 rounded-lg flex flex-wrap gap-3 justify-center items-center
             sm:justify-between sm:gap-4 md:gap-5"
        >
          {/* 🔍 Filters */}
          <div className="flex flex-wrap w-full lg:w-auto justify-center md:justify-start gap-3">
            <input
              type="text"
              placeholder="Search by name"
              value={filter.name}
              onChange={(e) => setFilter({ ...filter, name: e.target.value })}
              className="p-2 rounded bg-[#0f1724] w-full sm:w-[48%] md:w-[32%] lg:w-auto"
            />
            <input
              type="text"
              placeholder="Search by location"
              value={filter.location}
              onChange={(e) => setFilter({ ...filter, location: e.target.value })}
              className="p-2 rounded bg-[#0f1724] w-full sm:w-[48%] md:w-[32%] lg:w-auto"
            />
            <select
              value={filter.type}
              onChange={(e) => setFilter({ ...filter, type: e.target.value })}
              className="p-2 rounded bg-[#0f1724] w-full sm:w-[48%] md:w-[32%] lg:w-auto"
            >
              <option value="">All Types</option>
              <option value="trail">Trail</option>
              <option value="road">Road</option>
              <option value="fun-run">Fun Run</option>
            </select>
            <select
              value={filter.distance}
              onChange={(e) => setFilter({ ...filter, distance: e.target.value })}
              className="p-2 rounded bg-[#0f1724] w-full sm:w-[48%] md:w-[32%] lg:w-auto"
            >
              <option value="">All Distances</option>
              {["5k", "7k", "10k", "half", "full"].map((d) => (
                <option key={d} value={d}>
                  {getDistanceLabel(d)}
                </option>
              ))}
            </select>
          </div>

          {/* 🧭 Sort Controls */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full lg:w-auto"
          >
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="p-2 rounded bg-[#0f1724] w-full sm:w-[48%] md:w-[32%] lg:w-auto"
            >
              <option value="date">Event Date</option>
              <option value="registrationDeadline">Deadline Date</option>
            </select>

            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className={`px-3 py-2 rounded font-semibold transition-all duration-300 w-full sm:w-[48%] md:w-[32%] lg:w-auto
        ${sortOrder === "asc"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-black shadow-md shadow-yellow-400/30"
                  : "bg-gradient-to-r from-blue-500 to-cyan-400 text-black shadow-md shadow-cyan-400/30"
                }`}
            >
              {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
            </button>
          </div>
        </div>



        {/* EVENTS TABLE (unchanged) */}
        <div className="bg-[#071128] p-4 rounded-lg shadow">
          <h2 className="text-xl mb-3">
            Upcoming events (Click event name for registration)
          </h2>
          {loading ? (
            <p>Loading...</p>
          ) : filteredEvents.length === 0 ? (
            <p>No events found.</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="text-yellow-400">
                    <tr>
                      <th className="p-2">Sl</th>
                      <th className="p-2">Event Name</th>
                      <th className="p-2">Date</th>
                      <th className="p-2">Location</th>
                      <th className="p-2">Distance</th>
                      <th className="p-2">Organizer</th>
                      <th className="p-2">Deadline</th>
                      <th className="p-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentEvents.map((ev, index) => (
                      <tr key={ev._id} className="border-t border-gray-700">
                        <td className="p-2">{startIndex + index + 1}</td>
                        <td className="p-2">
                          <a
                            href={ev.registrationLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-300 hover:underline"
                          >
                            {ev.name}
                          </a>
                        </td>
                        <td className="p-2">
                          {ev.date
                            ? new Date(ev.date).toLocaleDateString("en-GB")
                            : "-"}
                        </td>
                        <td className="p-2">{ev.location}</td>
                        <td className="p-2 flex flex-wrap gap-1">
                          {Array.isArray(ev.distance)
                            ? ev.distance.map((dist) => (
                              <span
                                key={dist}
                                className={`${getBadgeColor(
                                  dist
                                )} text-white text-xs px-2 py-1 rounded-full`}
                              >
                                {getDistanceLabel(dist)}
                              </span>
                            ))
                            : ev.distance}
                        </td>
                        <td className="p-2">{ev.organizer}</td>
                        <td
                          className={`p-2 ${ev.registrationDeadline &&
                            new Date(ev.registrationDeadline) < new Date()
                            ? "text-red-500 font-semibold"
                            : ""
                            }`}
                        >
                          {ev.registrationDeadline
                            ? new Date(ev.registrationDeadline) < new Date()
                              ? "Closed"
                              : new Date(ev.registrationDeadline).toLocaleDateString(
                                "en-GB"
                              )
                            : "-"}
                        </td>
                        <td className="p-2 text-center align-middle">
                          <div className="flex justify-center items-center gap-4">
                            <button
                              onClick={() => handleEdit(ev)}
                              title="Edit"
                              className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer hover:scale-110"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => requestDelete(ev._id)}
                              title="Delete"
                              className="text-gray-300 hover:text-red-500 transition-colors duration-200 cursor-pointer hover:scale-110"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PAGINATION */}
              <div className="flex justify-center items-center gap-2 mt-4">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={`px-3 py-1 rounded ${currentPage === 1
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-yellow-400 text-black"
                    }`}
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${currentPage === i + 1
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-700"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={`px-3 py-1 rounded ${currentPage === totalPages
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-yellow-400 text-black"
                    }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
