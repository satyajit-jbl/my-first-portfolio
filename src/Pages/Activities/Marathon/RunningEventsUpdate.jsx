import { useEffect, useState } from "react";

export default function RunningEventsUpdate() {
  const BASE_URL = "http://localhost:5000/api/events"; // 🔁 change to your backend
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    distance: "",
    organizer: "",
    registrationDeadline: "",
    registrationLink: "",
  });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      // Sort by date (upcoming first)
      const sorted = data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setEvents(sorted);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `${BASE_URL}/${editId}` : BASE_URL;

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({
        name: "",
        date: "",
        location: "",
        distance: "",
        organizer: "",
        registrationDeadline: "",
        registrationLink: "",
      });
      setEditId(null);
      fetchEvents();
    } catch (err) {
      console.error("Error saving event:", err);
    }
  };

  const handleEdit = (event) => {
    setFormData(event);
    setEditId(event._id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  // Search filter
  const filteredEvents = events.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase()) ||
      e.organizer.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginated = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const today = new Date();

  return (
    <div className="text-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
        🏃 Running Events Update
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg mb-8 flex flex-col gap-4 max-w-2xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded bg-gray-700 text-gray-100"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-2 rounded bg-gray-700 text-gray-100"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="p-2 rounded bg-gray-700 text-gray-100"
          />
          <input
            type="text"
            name="distance"
            placeholder="Type (5K, 10K, Half Marathon)"
            value={formData.distance}
            onChange={handleChange}
            required
            className="p-2 rounded bg-gray-700 text-gray-100"
          />
          <input
            type="text"
            name="organizer"
            placeholder="Organized By"
            value={formData.organizer}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-gray-100"
          />
          <input
            type="date"
            name="registrationDeadline"
            value={formData.registrationDeadline}
            onChange={handleChange}
            required
            className="p-2 rounded bg-gray-700 text-gray-100"
          />
        </div>

        <input
          type="url"
          name="registrationLink"
          placeholder="Registration Link (https://...)"
          value={formData.registrationLink}
          onChange={handleChange}
          required
          className="p-2 rounded bg-gray-700 text-gray-100"
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition"
        >
          {editId ? "Update Event" : "Add Event"}
        </button>
      </form>

      {/* Search */}
      <div className="flex justify-between items-center mb-4 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search by name, location, or organizer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-700 p-2 rounded w-full md:w-1/2"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="min-w-full border border-gray-600 text-sm md:text-base">
          <thead className="bg-gray-700 text-yellow-400">
            <tr>
              <th className="p-3 text-left">Event Name</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Organized By</th>
              <th className="p-3 text-left">Registration Deadline</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((event) => {
              const deadline = new Date(event.registrationDeadline);
              const isExpired = deadline < today;

              return (
                <tr
                  key={event._id}
                  className={`border-t border-gray-700 ${
                    isExpired ? "bg-red-900/40" : "hover:bg-gray-800"
                  }`}
                >
                  <td className="p-3">
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {event.name}
                    </a>
                  </td>
                  <td className="p-3">{event.date}</td>
                  <td className="p-3">{event.location}</td>
                  <td className="p-3">{event.distance}</td>
                  <td className="p-3">{event.organizer}</td>
                  <td className="p-3">
                    {event.registrationDeadline}{" "}
                    {isExpired && (
                      <span className="ml-2 text-red-400 font-semibold">
                        ⏰ Closed
                      </span>
                    )}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {paginated.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-400">
                  No matching events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(totalPages).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
