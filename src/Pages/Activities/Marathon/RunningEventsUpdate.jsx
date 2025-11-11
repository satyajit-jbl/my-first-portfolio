// // import { useEffect, useState } from "react";
// // import { BASE_URL } from "../../../utils/config";
// // import { Edit2, Trash2 } from "lucide-react";
// // import Swal from "sweetalert2";
// // import "sweetalert2/dist/sweetalert2.min.css";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";


// // // 🌌 Global SweetAlert2 Theme (Dark Blue + Glow)
// // const swalTheme = Swal.mixin({
// //   background: "linear-gradient(145deg, #0a0f24, #0d1533)", // dark-blue gradient
// //   color: "#e0e7ff",
// //   showClass: {
// //     popup: "animate__animated animate__fadeInDown animate__faster",
// //   },
// //   hideClass: {
// //     popup: "animate__animated animate__fadeOutUp animate__faster",
// //   },
// //   customClass: {
// //     popup: "rounded-2xl shadow-2xl border border-blue-800/30 backdrop-blur-md",
// //     title: "text-blue-300 font-semibold tracking-wide",
// //     htmlContainer: "text-blue-100",
// //     confirmButton:
// //       "bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 focus:outline-none",
// //     cancelButton:
// //       "bg-gray-700 text-gray-200 px-5 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 focus:outline-none",
// //   },
// //   buttonsStyling: false,
// //   timerProgressBar: true,
// // });

// // // 🌠 Global SweetAlert2 Toast Theme
// // const Toast = swalTheme.mixin({
// //   toast: true,
// //   position: "top-end",
// //   showConfirmButton: false,
// //   timer: 3000,
// //   showClass: { popup: "animate__animated animate__fadeInRight" },
// //   hideClass: { popup: "animate__animated animate__fadeOutRight" },
// //   customClass: {
// //     popup:
// //       "bg-[#0b1220]/95 text-blue-100 border border-blue-700/40 rounded-xl shadow-lg backdrop-blur-sm",
// //   },
// // });

// // export default function RunningEventsUpdate() {
// //   const [events, setEvents] = useState([]);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     date: "",
// //     location: "",
// //     distance: [],
// //     organizer: "",
// //     registrationDeadline: "",
// //     registrationLink: "",
// //   });
// //   const [editId, setEditId] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [filter, setFilter] = useState({
// //     name: "",
// //     location: "",
// //     type: "",
// //     distance: "",
// //   });


// //   // Pagination
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const eventsPerPage = 5;

// //   // Fetch events
// //   const fetchEvents = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await fetch(`${BASE_URL}/events`);
// //       const data = await res.json();
// //       data.sort((a, b) => new Date(a.date) - new Date(b.date));
// //       setEvents(data);
// //     } catch (err) {
// //       console.error("Error fetching events:", err);
// //       swalTheme.fire({
// //         title: "Error!",
// //         text: "Failed to fetch events.",
// //         icon: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [filter]);

// //   const handleChange = (e) =>
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// //   const handleDistanceChange = (e) => {
// //     const value = e.target.value;
// //     setFormData((prev) => {
// //       if (prev.distance.includes(value)) {
// //         return { ...prev, distance: prev.distance.filter((d) => d !== value) };
// //       } else {
// //         return { ...prev, distance: [...prev.distance, value] };
// //       }
// //     });
// //   };


// //   // Add or Update Event
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // 🟢 Only confirm when adding a new event
// //       if (!editId) {
// //         const result = await swalTheme.fire({
// //           title: "Add New Event?",
// //           text: "This event will be sent for admin approval.",
// //           icon: "question",
// //           showCancelButton: true,
// //           confirmButtonText: "Yes, add it!",
// //           cancelButtonText: "Cancel",
// //         });

// //         if (!result.isConfirmed) return; // Stop if user cancels
// //       }

// //       const method = editId ? "PUT" : "POST";
// //       const url = editId ? `${BASE_URL}/events/${editId}` : `${BASE_URL}/events`;

// //       const res = await fetch(url, {
// //         method,
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await res.json();

// //       Toast.fire({
// //         icon: "success",
// //         title: data.message || (editId ? "Event updated!" : "Event added!"),
// //       });

// //       // Reset form
// //       setFormData({
// //         name: "",
// //         date: "",
// //         location: "",
// //         distance: [],
// //         organizer: "",
// //         registrationDeadline: "",
// //         registrationLink: "",
// //       });
// //       setEditId(null);
// //       fetchEvents();
// //     } catch (err) {
// //       console.error("Error saving event:", err);
// //       swalTheme.fire({
// //         title: "Error!",
// //         text: "Failed to submit. Check console.",
// //         icon: "error",
// //       });
// //     }
// //   };


// //   // Prepare edit form
// //   const handleEdit = (ev) => {
// //     const source =
// //       ev.pendingAction === "update" && ev.pendingData ? ev.pendingData : ev;
// //     setFormData({
// //       name: source.name || "",
// //       date: source.date || "",
// //       location: source.location || "",
// //       distance: Array.isArray(source.distance)
// //         ? source.distance
// //         : [source.distance || ""],
// //       organizer: source.organizer || "",
// //       registrationDeadline: source.registrationDeadline || "",
// //       registrationLink: source.registrationLink || "",
// //     });
// //     setEditId(ev._id);

// //     swalTheme.fire({
// //       title: `Edit Event: ${source.name}`,
// //       text: "⚡ Update details and submit for review.",
// //       icon: "info",
// //       confirmButtonText: "Got it",
// //     });
// //   };

// //   // Request deletion
// //   const requestDelete = async (id) => {
// //     const result = await swalTheme.fire({
// //       title: "Are you sure to delete this event?",
// //       text: "This action will await admin approval.",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonText: "Yes, request it!",
// //       cancelButtonText: "Cancel",
// //     });

// //     if (!result.isConfirmed) return;

// //     try {
// //       const res = await fetch(`${BASE_URL}/events/${id}/request`, {
// //         method: "DELETE",
// //       });
// //       const data = await res.json();

// //       Toast.fire({
// //         icon: "success",
// //         title: data.message || "Deletion request sent!",
// //       });

// //       fetchEvents();
// //     } catch (err) {
// //       console.error(err);
// //       swalTheme.fire({
// //         title: "Error!",
// //         text: "Failed to request deletion",
// //         icon: "error",
// //       });
// //     }
// //   };

// //   // Distance badge helpers
// //   const getDistanceLabel = (dist) => {
// //     if (dist === "half") return "21k";
// //     if (dist === "full") return "42k";
// //     return dist.toUpperCase();
// //   };

// //   const getBadgeColor = (dist) => {
// //     switch (dist) {
// //       case "5k":
// //         return "bg-green-600";
// //       case "7k":
// //         return "bg-blue-600";
// //       case "10k":
// //         return "bg-purple-600";
// //       case "half":
// //         return "bg-orange-600";
// //       case "full":
// //         return "bg-red-600";
// //       default:
// //         return "bg-gray-600";
// //     }
// //   };

// //   // Filtered + Paginated Events
// //   const filteredEvents = events.filter((ev) => {
// //     const matchesName = ev.name
// //       ?.toLowerCase()
// //       .includes(filter.name.toLowerCase());
// //     const matchesLocation = ev.location
// //       ?.toLowerCase()
// //       .includes(filter.location.toLowerCase());
// //     const matchesType = filter.type
// //       ? ev.type?.toLowerCase() === filter.type.toLowerCase()
// //       : true;
// //     const matchesDistance = filter.distance
// //       ? Array.isArray(ev.distance)
// //         ? ev.distance.includes(filter.distance)
// //         : ev.distance === filter.distance
// //       : true;
// //     return matchesName && matchesLocation && matchesType && matchesDistance;
// //   });

// //   const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
// //   const startIndex = (currentPage - 1) * eventsPerPage;
// //   const currentEvents = filteredEvents.slice(
// //     startIndex,
// //     startIndex + eventsPerPage
// //   );

// //   return (
// //     <div className="min-h-screen p-4 text-gray-100">
// //       <div className="max-w-5xl mx-auto">
// //         <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
// //           🏃‍♂️ Running Events
// //         </h1>

// //         {/* FORM */}
// //         <form
// //           onSubmit={handleSubmit}
// //           className="bg-[#0b1220] p-6 rounded-lg shadow-md mb-6"
// //         >
// //           <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
// //             <input
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               placeholder="Event Name"
// //               required
// //               className="p-2 rounded bg-[#0f1724]"
// //             />
// //             {/* <input
// //               type="date"
// //               name="date"
// //               value={formData.date}
// //               onChange={handleChange}
// //               required
// //               className="p-2 rounded bg-[#0f1724]"
// //             /> */}
// //             {/* Event Date */}
// //             <DatePicker
// //               selected={formData.date ? new Date(formData.date) : null}
// //               onChange={(date) =>
// //                 setFormData((prev) => ({
// //                   ...prev,
// //                   date: date.toISOString().split("T")[0],
// //                 }))
// //               }
// //               placeholderText="Select Event Date"
// //               required
// //               dateFormat="dd/MM/yyyy"
// //               className="p-2 rounded bg-[#0f1724] text-gray-100 w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
// //             />
// //             <input
// //               name="location"
// //               value={formData.location}
// //               onChange={handleChange}
// //               placeholder="Location"
// //               required
// //               className="p-2 rounded bg-[#0f1724]"
// //             />

// //             {/* Distance checkboxes */}
// //             <div className="flex flex-wrap gap-3 bg-[#0f1724] p-2 rounded">
// //               {["5k", "7k","8k", "10k", "half", "full"].map((dist) => (
// //                 <label key={dist} className="flex items-center gap-1">
// //                   <input
// //                     type="checkbox"
// //                     value={dist}
// //                     checked={formData.distance.includes(dist)}
// //                     onChange={handleDistanceChange}

// //                     className="accent-yellow-400"
// //                   />
// //                   <span className="capitalize">{getDistanceLabel(dist)}</span>
// //                 </label>
// //               ))}
// //             </div>

// //             <input
// //               name="organizer"
// //               value={formData.organizer}
// //               onChange={handleChange}
// //               placeholder="Organizer"
// //               className="p-2 rounded bg-[#0f1724]"
// //             />
// //             {/* <input
// //               type="date"
// //               name="registrationDeadline"
// //               placeholder="registrationDeadline"
// //               value={formData.registrationDeadline}
// //               onChange={handleChange}
// //               required
// //               className="p-2 rounded bg-[#0f1724]"
// //             /> */}
// //             {/* Registration Deadline */}
// //             <DatePicker
// //               selected={formData.registrationDeadline ? new Date(formData.registrationDeadline) : null}
// //               onChange={(date) =>
// //                 setFormData((prev) => ({
// //                   ...prev,
// //                   registrationDeadline: date.toISOString().split("T")[0],
// //                 }))
// //               }
// //               placeholderText="Select Registration Deadline"
// //               required
// //               dateFormat="dd/MM/yyyy"
// //               className="p-2 rounded bg-[#0f1724] text-gray-100 w-full border border-gray-700 focus:border-blue-500 focus:outline-none"
// //             />
// //           </div>

// //           <input
// //             name="registrationLink"
// //             value={formData.registrationLink}
// //             required
// //             onChange={handleChange}
// //             placeholder="Registration Link (https://...)"
// //             type="url"
// //             className="mt-3 p-2 rounded bg-[#0f1724] w-full"
// //           />

// //           <div className="flex gap-2 mt-4">
// //             <button
// //               type="submit"
// //               className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
// //             >
// //               {editId ? "Submit Update" : "Add Event"}
// //             </button>
// //             {editId && (
// //               <button
// //                 type="button"
// //                 onClick={() => {
// //                   setEditId(null);
// //                   setFormData({
// //                     name: "",
// //                     date: "",
// //                     location: "",
// //                     distance: [],
// //                     organizer: "",
// //                     registrationDeadline: "",
// //                     registrationLink: "",
// //                   });
// //                 }}
// //                 className="bg-gray-600 px-3 py-2 rounded"
// //               >
// //                 Cancel
// //               </button>
// //             )}
// //           </div>
// //         </form>

// //         {/* FILTER BAR */}
// //         <div className="bg-[#0b1220] p-4 mb-6 rounded-lg flex flex-wrap gap-3 justify-center">
// //           <input
// //             type="text"
// //             placeholder="Search by name"
// //             value={filter.name}
// //             onChange={(e) => setFilter({ ...filter, name: e.target.value })}
// //             className="p-2 rounded bg-[#0f1724]"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Search by location"
// //             value={filter.location}
// //             onChange={(e) => setFilter({ ...filter, location: e.target.value })}
// //             className="p-2 rounded bg-[#0f1724]"
// //           />
// //           <select
// //             value={filter.type}
// //             onChange={(e) => setFilter({ ...filter, type: e.target.value })}
// //             className="p-2 rounded bg-[#0f1724]"
// //           >
// //             <option value="">All Types</option>
// //             <option value="trail">Trail</option>
// //             <option value="road">Road</option>
// //             <option value="fun-run">Fun Run</option>
// //           </select>
// //           <select
// //             value={filter.distance}
// //             onChange={(e) =>
// //               setFilter({ ...filter, distance: e.target.value })
// //             }
// //             className="p-2 rounded bg-[#0f1724]"
// //           >
// //             <option value="">All Distances</option>
// //             {["5k", "7k", "10k", "half", "full"].map((d) => (
// //               <option key={d} value={d}>
// //                 {getDistanceLabel(d)}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         {/* EVENTS TABLE */}
// //         <div className="bg-[#071128] p-4 rounded-lg shadow">
// //           <h2 className="text-xl mb-3">
// //             Upcoming events (Click event name for registration)
// //           </h2>
// //           {loading ? (
// //             <p>Loading...</p>
// //           ) : filteredEvents.length === 0 ? (
// //             <p>No events found.</p>
// //           ) : (
// //             <>
// //               <div className="overflow-x-auto">
// //                 <table className="min-w-full text-left">
// //                   <thead className="text-yellow-400">
// //                     <tr>
// //                       <th className="p-2">Sl</th>
// //                       <th className="p-2">Event Name</th>
// //                       <th className="p-2">Date</th>
// //                       <th className="p-2">Location</th>
// //                       <th className="p-2">Distance</th>
// //                       <th className="p-2">Organizer</th>
// //                       <th className="p-2">Deadline</th>
// //                       <th className="p-2 text-center">Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {currentEvents.map((ev, index) => (
// //                       <tr key={ev._id} className="border-t border-gray-700">
// //                         <td className="p-2">{startIndex + index + 1}</td>
// //                         <td className="p-2">
// //                           <a
// //                             href={ev.registrationLink}
// //                             target="_blank"
// //                             rel="noreferrer"
// //                             className="text-blue-300 hover:underline"
// //                           >
// //                             {ev.name}
// //                           </a>
// //                         </td>
// //                         <td className="p-2">
// //                           {ev.date
// //                             ? new Date(ev.date).toLocaleDateString("en-GB")
// //                             : "-"}
// //                         </td>
// //                         <td className="p-2">{ev.location}</td>
// //                         <td className="p-2 flex flex-wrap gap-1">
// //                           {Array.isArray(ev.distance)
// //                             ? ev.distance.map((dist) => (
// //                               <span
// //                                 key={dist}
// //                                 className={`${getBadgeColor(
// //                                   dist
// //                                 )} text-white text-xs px-2 py-1 rounded-full`}
// //                               >
// //                                 {getDistanceLabel(dist)}
// //                               </span>
// //                             ))
// //                             : ev.distance}
// //                         </td>
// //                         <td className="p-2">{ev.organizer}</td>
// //                         <td
// //                           className={`p-2 ${ev.registrationDeadline &&
// //                             new Date(ev.registrationDeadline) < new Date()
// //                             ? "text-red-500 font-semibold"
// //                             : ""
// //                             }`}
// //                         >
// //                           {ev.registrationDeadline
// //                             ? new Date(ev.registrationDeadline) < new Date()
// //                               ? "Closed"
// //                               : new Date(ev.registrationDeadline).toLocaleDateString(
// //                                 "en-GB"
// //                               )
// //                             : "-"}
// //                         </td>
// //                         <td className="p-2 text-center align-middle">
// //                           <div className="flex justify-center items-center gap-4">
// //                             <button
// //                               onClick={() => handleEdit(ev)}
// //                               title="Edit"
// //                               className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer hover:scale-110"
// //                             >
// //                               <Edit2 size={18} />
// //                             </button>
// //                             <button
// //                               onClick={() => requestDelete(ev._id)}
// //                               title="Delete"
// //                               className="text-gray-300 hover:text-red-500 transition-colors duration-200 cursor-pointer hover:scale-110"
// //                             >
// //                               <Trash2 size={18} />
// //                             </button>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>

// //               {/* PAGINATION */}
// //               <div className="flex justify-center items-center gap-2 mt-4">
// //                 <button
// //                   disabled={currentPage === 1}
// //                   onClick={() => setCurrentPage((prev) => prev - 1)}
// //                   className={`px-3 py-1 rounded ${currentPage === 1
// //                     ? "bg-gray-600 cursor-not-allowed"
// //                     : "bg-yellow-400 text-black"
// //                     }`}
// //                 >
// //                   Prev
// //                 </button>

// //                 {Array.from({ length: totalPages }, (_, i) => (
// //                   <button
// //                     key={i + 1}
// //                     onClick={() => setCurrentPage(i + 1)}
// //                     className={`px-3 py-1 rounded ${currentPage === i + 1
// //                       ? "bg-yellow-400 text-black"
// //                       : "bg-gray-700"
// //                       }`}
// //                   >
// //                     {i + 1}
// //                   </button>
// //                 ))}

// //                 <button
// //                   disabled={currentPage === totalPages}
// //                   onClick={() => setCurrentPage((prev) => prev + 1)}
// //                   className={`px-3 py-1 rounded ${currentPage === totalPages
// //                     ? "bg-gray-600 cursor-not-allowed"
// //                     : "bg-yellow-400 text-black"
// //                     }`}
// //                 >
// //                   Next
// //                 </button>
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

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
              {/* <div className="flex justify-center items-center gap-2 mt-4">
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
              </div> */}
              {/* PAGINATION + DOWNLOAD SECTION */}
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

                {/* 📥 DOWNLOAD BUTTON */}
                <button
                  onClick={async () => {
                    const { value: format } = await swalTheme.fire({
                      title: "Download Events Data",
                      input: "select",
                      inputOptions: {
                        pdf: "📄 PDF",
                        xls: "📊 Excel (XLS)",
                      },
                      inputPlaceholder: "Select file format",
                      showCancelButton: true,
                      confirmButtonText: "Download",
                      cancelButtonText: "Cancel",
                    });

                    if (!format) return;

                    if (format === "pdf") {
                      const { jsPDF } = await import("jspdf");
                      import("jspdf-autotable").then(() => {
                        const doc = new jsPDF();
                        doc.setFontSize(14);
                        doc.text("🏃‍♂️ Running Events Report", 14, 15);
                        doc.autoTable({
                          startY: 25,
                          head: [["#", "Event Name", "Date", "Location", "Distance", "Organizer"]],
                          body: events.map((ev, i) => [
                            i + 1,
                            ev.name,
                            ev.date ? new Date(ev.date).toLocaleDateString("en-GB") : "-",
                            ev.location,
                            Array.isArray(ev.distance) ? ev.distance.join(", ") : ev.distance,
                            ev.organizer || "-",
                          ]),
                        });
                        doc.save("Running_Events.pdf");
                      });
                    } else if (format === "xls") {
                      const XLSX = await import("xlsx");
                      const ws = XLSX.utils.json_to_sheet(
                        events.map((ev, i) => ({
                          SL: i + 1,
                          Name: ev.name,
                          Date: ev.date ? new Date(ev.date).toLocaleDateString("en-GB") : "-",
                          Location: ev.location,
                          Distance: Array.isArray(ev.distance)
                            ? ev.distance.join(", ")
                            : ev.distance,
                          Organizer: ev.organizer || "-",
                          Deadline: ev.registrationDeadline
                            ? new Date(ev.registrationDeadline).toLocaleDateString("en-GB")
                            : "-",
                        }))
                      );
                      const wb = XLSX.utils.book_new();
                      XLSX.utils.book_append_sheet(wb, ws, "Running Events");
                      XLSX.writeFile(wb, "Running_Events.xlsx");
                    }

                    Toast.fire({
                      icon: "success",
                      title: `Downloaded as ${format.toUpperCase()}`,
                    });
                  }}
                  className="ml-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-yellow-400/40 transition-all duration-300"
                >
                  📥 Download Events
                </button>
              </div>

            </>
          )}
        </div>

      </div>


    </div>
  );
}

//  download function works

// import  { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// const swalTheme = Swal.mixin({
//   background: "#0a0a0a",
//   color: "#fff",
//   confirmButtonColor: "#10B981",
//   cancelButtonColor: "#EF4444",
//   customClass: {
//     popup: "rounded-2xl",
//     title: "text-xl font-semibold",
//   },
// });

// const Toast = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 2500,
//   timerProgressBar: true,
//   background: "#0a0a0a",
//   color: "#10B981",
// });

// export default function RunningEvents() {
//   const [events, setEvents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

//   // Dummy data (replace with your API later)
//   useEffect(() => {
//     setEvents([
//       {
//         name: "Cox’s Bazar Marathon",
//         date: "2025-01-01",
//         location: "Cox’s Bazar",
//         distance: ["5K", "10K", "21K", "42K"],
//         organizer: "CBR Club",
//         registrationDeadline: "2024-12-20",
//       },
//       {
//         name: "Dhaka Ultra Run",
//         date: "2025-02-15",
//         location: "Hatirjheel, Dhaka",
//         distance: ["25K", "50K", "100K"],
//         organizer: "Dhaka Runners",
//         registrationDeadline: "2025-02-05",
//       },
//       {
//         name: "Chattogram Hill Trail",
//         date: "2025-03-22",
//         location: "Fatikchhari",
//         distance: ["10K", "21K"],
//         organizer: "CTG Trail Club",
//         registrationDeadline: "2025-03-10",
//       },
//       {
//         name: "Sylhet Green Half Marathon",
//         date: "2025-04-10",
//         location: "Sylhet Stadium",
//         distance: ["5K", "21K"],
//         organizer: "Sylhet Runners",
//         registrationDeadline: "2025-03-31",
//       },
//       {
//         name: "Bandarban Vertical Run",
//         date: "2025-05-05",
//         location: "Nilgiri, Bandarban",
//         distance: ["7K", "15K"],
//         organizer: "Adventure BD",
//         registrationDeadline: "2025-04-25",
//       },
//     ]);
//   }, []);

//   const totalPages = Math.ceil(events.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentData = events.slice(startIndex, startIndex + rowsPerPage);

//   const handleDownload = async () => {
//     const { value: format } = await swalTheme.fire({
//       title: "Download Table",
//       input: "select",
//       inputOptions: {
//         pdf: "PDF Format",
//         excel: "Excel (XLSX) Format",
//       },
//       inputPlaceholder: "Select download format",
//       showCancelButton: true,
//       confirmButtonText: "Download",
//     });

//     if (!format) return;

//     const exportData = events.map((ev, i) => ({
//       Sl: i + 1,
//       Name: ev.name,
//       Date: ev.date ? new Date(ev.date).toLocaleDateString("en-GB") : "-",
//       Location: ev.location,
//       Distance: Array.isArray(ev.distance)
//         ? ev.distance.join(", ")
//         : ev.distance,
//       Organizer: ev.organizer,
//       Deadline: ev.registrationDeadline
//         ? new Date(ev.registrationDeadline).toLocaleDateString("en-GB")
//         : "-",
//     }));

//    if (format === "pdf") {
//   const doc = new jsPDF({
//     orientation: "landscape",
//     unit: "pt",
//     format: "A4",
//   });

//   // Header
//   doc.setFillColor(16, 185, 129);
//   doc.rect(0, 0, doc.internal.pageSize.width, 50, "F");
//   doc.setFontSize(18);
//   doc.setTextColor(255, 255, 255);
//   doc.text("🏃 Running Events - 2025", 40, 30);

//   // Use autoTable function directly
//   autoTable(doc, {
//     startY: 70,
//     head: [["Sl", "Name", "Date", "Location", "Distance", "Organizer", "Deadline"]],
//     body: exportData.map((d) => Object.values(d)),
//     theme: "striped",
//     headStyles: {
//       fillColor: [16, 185, 129],
//       textColor: 255,
//       fontStyle: "bold",
//     },
//     bodyStyles: { textColor: 50 },
//     alternateRowStyles: { fillColor: [245, 245, 245] },
//     styles: { fontSize: 9, cellPadding: 4 },
//   });

//   const pageHeight = doc.internal.pageSize.height;
//   doc.setFontSize(10);
//   doc.setTextColor(120);
//   doc.text(
//     "Generated by Running Event Portal © " + new Date().getFullYear(),
//     40,
//     pageHeight - 20
//   );

//   doc.save("Running_Events.pdf");


//     } else if (format === "excel") {
//       const ws = XLSX.utils.json_to_sheet(exportData);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, "Running Events");
//       const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//       const blob = new Blob([excelBuffer], {
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       });
//       saveAs(blob, "Running_Events.xlsx");
//     }

//     Toast.fire({
//       icon: "success",
//       title: `Downloaded as ${format.toUpperCase()}`,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
//       <h1 className="text-3xl font-bold text-center mb-6 text-emerald-400">
//         🏃 Running Events - 2025
//       </h1>

//       <div className="overflow-x-auto shadow-lg rounded-2xl border border-emerald-600">
//         <table className="min-w-full border-collapse">
//           <thead>
//             <tr className="bg-emerald-600 text-black text-sm uppercase">
//               <th className="px-4 py-3 text-left">Sl</th>
//               <th className="px-4 py-3 text-left">Name</th>
//               <th className="px-4 py-3 text-left">Date</th>
//               <th className="px-4 py-3 text-left">Location</th>
//               <th className="px-4 py-3 text-left">Distance</th>
//               <th className="px-4 py-3 text-left">Organizer</th>
//               <th className="px-4 py-3 text-left">Deadline</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((ev, index) => (
//               <tr
//                 key={index}
//                 className="border-t border-emerald-800 hover:bg-emerald-900/40 transition"
//               >
//                 <td className="px-4 py-2">{startIndex + index + 1}</td>
//                 <td className="px-4 py-2">{ev.name}</td>
//                 <td className="px-4 py-2">
//                   {new Date(ev.date).toLocaleDateString("en-GB")}
//                 </td>
//                 <td className="px-4 py-2">{ev.location}</td>
//                 <td className="px-4 py-2">
//                   {Array.isArray(ev.distance)
//                     ? ev.distance.join(", ")
//                     : ev.distance}
//                 </td>
//                 <td className="px-4 py-2">{ev.organizer}</td>
//                 <td className="px-4 py-2">
//                   {new Date(ev.registrationDeadline).toLocaleDateString("en-GB")}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 gap-2">
//         <button
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           className="bg-emerald-600 text-black px-3 py-1 rounded-md font-semibold disabled:opacity-40"
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         <span className="px-3 py-1 text-lg text-emerald-400">
//           {currentPage} / {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//           className="bg-emerald-600 text-black px-3 py-1 rounded-md font-semibold disabled:opacity-40"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>

//       {/* DOWNLOAD BUTTON */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={handleDownload}
//           className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-3 rounded-xl font-semibold shadow-md shadow-green-500/40 hover:scale-105 transition-transform duration-300"
//         >
//           ⬇️ Download Table
//         </button>
//       </div>
//     </div>
//   );
// }
