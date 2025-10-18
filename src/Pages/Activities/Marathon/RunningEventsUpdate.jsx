import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/config";

export default function RunningEventsUpdate() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    distance: "5k",
    organizer: "",
    registrationDeadline: "",
    registrationLink: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // ✅ Add or Update Event (pending)
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
        distance: "5k",
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
      distance: source.distance || "5k",
      organizer: source.organizer || "",
      registrationDeadline: source.registrationDeadline || "",
      registrationLink: source.registrationLink || "",
    });
    setEditId(ev._id);
    alert(
      "⚡ Your changes will be submitted as pending and will require admin approval."
    );
  };

  // ✅ Request deletion (pending)
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

  return (
    <div className="min-h-screen p-4 bg-[#0f172a] text-gray-100">
      <div className="max-w-4xl mx-auto">
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
            <select
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="p-2 rounded bg-[#0f1724]"
            >
              <option value="5k">5K</option>
              <option value="7k">7K</option>
              <option value="10k">10K</option>
              <option value="half">Half Marathon</option>
              <option value="full">Full Marathon</option>
            </select>
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
              {editId ? "Submit Update (pending)" : "Add Event (pending)"}
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
                    distance: "5k",
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

        {/* EVENTS TABLE */}
        <div className="bg-[#071128] p-4 rounded-lg shadow">
          <h2 className="text-xl mb-3">Upcoming events</h2>
          {loading ? (
            <p>Loading...</p>
          ) : events.length === 0 ? (
            <p>No events yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="text-yellow-400">
                  <tr>
                    <th className="p-2">Name</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Location</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Organizer</th>
                    <th className="p-2">Deadline</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((ev) => (
                    <tr key={ev._id} className="border-t border-gray-700">
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
                      <td className="p-2">{ev.date}</td>
                      <td className="p-2">{ev.location}</td>
                      <td className="p-2">{ev.distance}</td>
                      <td className="p-2">{ev.organizer}</td>
                      <td className="p-2">{ev.registrationDeadline}</td>
                      <td className="p-2 flex gap-2">
                        <button
                          onClick={() => handleEdit(ev)}
                          className="bg-blue-500 px-3 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => requestDelete(ev._id)}
                          className="bg-red-500 px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
