import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/config";
import { Edit2, Trash2 } from "lucide-react";

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

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  // ✅ Fetch approved events
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/events`);
      const data = await res.json();

      // Sort by date ascending
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ✅ Reset page to 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // ✅ Handle multiple checkbox selection for distance
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

  // ✅ Add or Update Event
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId
        ? `${BASE_URL}/events/${editId}`
        : `${BASE_URL}/events`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

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
      alert("Failed to submit. Check console.");
    }
  };

  // ✅ Prepare edit form
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
    alert(
      "⚡ Your changes will be submitted as pending and will require admin approval."
    );
  };

  // ✅ Request deletion
  const requestDelete = async (id) => {
    if (!confirm("Request deletion? This will await admin approval.")) return;
    try {
      const res = await fetch(`${BASE_URL}/events/${id}/request`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(data.message);
      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Failed to request deletion");
    }
  };

  // ✅ Distance badge helpers
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

  // ✅ Apply filters
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

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + eventsPerPage
  );

  return (
    <div className="min-h-screen p-4 text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
          🏃‍♂️ Running Events
        </h1>

        {/* FORM */}
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
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="p-2 rounded bg-[#0f1724]"
            />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
              className="p-2 rounded bg-[#0f1724]"
            />

            {/* ✅ Multi distance checkboxes */}
            <div className="flex flex-wrap gap-3 bg-[#0f1724] p-2 rounded">
              {["5k", "7k", "10k", "half", "full"].map((dist) => (
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
            <input
              type="date"
              name="registrationDeadline"
              value={formData.registrationDeadline}
              onChange={handleChange}
              required
              className="p-2 rounded bg-[#0f1724]"
            />
          </div>

          <input
            name="registrationLink"
            value={formData.registrationLink}
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

        {/* ✅ FILTER BAR */}
        <div className="bg-[#0b1220] p-4 mb-6 rounded-lg flex flex-wrap gap-3 justify-center">
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
        </div>

        {/* EVENTS TABLE */}
        <div className="bg-[#071128] p-4 rounded-lg shadow">
          <h2 className="text-xl mb-3">Upcoming events(Click event name for registration)</h2>
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
                        <td className="p-2">
                          {startIndex + index + 1}
                        </td>
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
                        {/* <td className="p-2">{ev.date}</td> */}
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
                          className={`p-2 ${ev.registrationDeadline && new Date(ev.registrationDeadline) < new Date()
                            ? "text-red-500 font-semibold"
                            : ""
                            }`}
                        >
                          {ev.registrationDeadline
                            ? new Date(ev.registrationDeadline) < new Date()
                              ? "Closed"
                              : new Date(ev.registrationDeadline).toLocaleDateString("en-GB")
                            : "-"}
                        </td>
                        <td
                          className="p-2 text-center align-middle"
                          style={{ verticalAlign: "middle" }}
                        >
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

              {/* ✅ PAGINATION CONTROLS */}
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
