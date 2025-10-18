import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/config"; // use the same config

export default function AdminDashboard() {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPending = async () => {
    setLoading(true);
    try {
      let adminPwd = sessionStorage.getItem("admin_pwd") || null;
      if (!adminPwd) {
        adminPwd = prompt("Enter admin password to view pending actions:");
        if (!adminPwd) { setLoading(false); return; }
        sessionStorage.setItem("admin_pwd", adminPwd);
      }

      const res = await fetch(`${BASE_URL}/events/pending`, {
        headers: { "x-admin-secret": adminPwd }
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
      console.error("Error loading pending:", err);
      alert("Failed to load pending items (check console)");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPending(); }, []);

  const approve = async (id) => {
    const pwd = sessionStorage.getItem("admin_pwd") || prompt("Enter admin password to approve:");
    if (!pwd) return;
    try {
      const res = await fetch(`${BASE_URL}/events/${id}/approve`, {
        method: "PUT",
        headers: { "x-admin-secret": pwd }
      });
      if (res.status === 403) { sessionStorage.removeItem("admin_pwd"); alert("Incorrect password"); return; }
      const data = await res.json();
      alert(data.message);
      fetchPending();
    } catch (err) { console.error(err); alert("Failed to approve"); }
  };

  const reject = async (id) => {
    const pwd = sessionStorage.getItem("admin_pwd") || prompt("Enter admin password to reject:");
    if (!pwd) return;
    try {
      const res = await fetch(`${BASE_URL}/events/${id}/reject`, {
        method: "DELETE",
        headers: { "x-admin-secret": pwd }
      });
      if (res.status === 403) { sessionStorage.removeItem("admin_pwd"); alert("Incorrect password"); return; }
      const data = await res.json();
      alert(data.message);
      fetchPending();
    } catch (err) { console.error(err); alert("Failed to reject"); }
  };

  return (
    <div className="min-h-screen p-4 bg-[#071129] text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">Admin — Pending Actions</h1>

        {loading ? <p>Loading pending actions...</p> : pending.length === 0 ? (
          <p>No pending items.</p>
        ) : (
          pending.map(item => (
            <div key={item._id} className="bg-[#0b1220] p-4 rounded mb-4 border border-gray-700">
              <h2 className="text-xl font-semibold">
                {item.pendingAction === "create" ? item.pendingData?.name || "New Event" : item.name}
              </h2>
              <p>Date: {item.pendingAction === "create" ? item.pendingData?.date : item.date}</p>
              <p>Location: {item.pendingAction === "create" ? item.pendingData?.location : item.location}</p>

              {item.pendingAction === "update" && (
                <div className="mt-2 p-3 bg-[#061024] rounded">
                  <p className="text-yellow-300 font-semibold">Pending Update Preview:</p>
                  <p>Name: {item.pendingData?.name}</p>
                  <p>Date: {item.pendingData?.date}</p>
                  <p>Location: {item.pendingData?.location}</p>
                  <p>Type: {item.pendingData?.distance}</p>
                </div>
              )}

              <div className="flex gap-2 mt-3">
                <button onClick={() => approve(item._id)} className="bg-green-500 px-3 py-1 rounded">Approve</button>
                <button onClick={() => reject(item._id)} className="bg-red-500 px-3 py-1 rounded">Reject</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
