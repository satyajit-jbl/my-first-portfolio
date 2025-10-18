// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { MongoClient, ObjectId } from "mongodb";

// dotenv.config();

// const app = express();
// app.use(express.json());

// // app.use(
// //   cors({
// //     origin: ["http://localhost:5173", "https://satyajit-ghosh.netlify.app"],
// //     credentials: true,
// //   })
// // );

// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174"], // your dev ports
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

// const client = new MongoClient(process.env.MONGODB_URI);
// const dbName = "chat_db";
// let eventsCollection;

// // ✅ Initialize MongoDB connection
// async function initDB() {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     eventsCollection = db.collection("events");
//     console.log("✅ MongoDB connected");
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }
// }
// initDB();

// // ✅ Admin auth middleware
// function adminAuth(req, res, next) {
//   const adminSecret = req.headers["x-admin-secret"]; // frontend must send this
//   if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
//     return res.status(403).json({ error: "❌ Unauthorized: Admin password required" });
//   }
//   next();
// }

// // 🟢 Add new event
// app.post("/api/events", async (req, res) => {
//   try {
//     const event = req.body;
//     event.isApproved = false;
//     const result = await eventsCollection.insertOne(event);
//     res.json({
//       message: "✅ Event submitted for admin approval",
//       id: result.insertedId,
//     });
//   } catch (err) {
//     console.error("❌ Error submitting event:", err);
//     res.status(500).json({ error: "Failed to submit event" });
//   }
// });

// // 🟢 Get all events (for dashboard)
// app.get("/api/events", async (req, res) => {
//   try {
//     const events = await eventsCollection.find().sort({ date: 1 }).toArray();
//     res.json(events);
//   } catch (err) {
//     console.error("❌ Error fetching all events:", err);
//     res.status(500).json({ error: "Failed to fetch events" });
//   }
// });

// // 🟢 Get approved events
// app.get("/api/events/approved", async (req, res) => {
//   try {
//     const events = await eventsCollection
//       .find({ isApproved: true })
//       .sort({ date: 1 })
//       .toArray();
//     res.json(events);
//   } catch (err) {
//     console.error("❌ Error fetching approved events:", err);
//     res.status(500).json({ error: "Failed to fetch events" });
//   }
// });

// // 🟢 Get pending events
// app.get("/api/events/pending", async (req, res) => {
//   try {
//     const events = await eventsCollection
//       .find({ isApproved: false })
//       .sort({ date: 1 })
//       .toArray();
//     res.json(events);
//   } catch (err) {
//     console.error("❌ Error fetching pending events:", err);
//     res.status(500).json({ error: "Failed to fetch pending events" });
//   }
// });

// // 🟢 Update an event
// app.put("/api/events/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;
//     await eventsCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: updateData }
//     );
//     res.json({ message: "✅ Event updated successfully" });
//   } catch (err) {
//     console.error("❌ Error updating event:", err);
//     res.status(500).json({ error: "Failed to update event" });
//   }
// });

// // 🟢 Approve event (admin)
// app.put("/api/events/:id/approve",adminAuth, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const adminSecret = req.headers["x-admin-secret"];
//     if (adminSecret !== process.env.ADMIN_SECRET) {
//       return res.status(403).json({ error: "❌ Unauthorized access" });
//     }

//     await eventsCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: { isApproved: true } }
//     );

//     res.json({ message: "✅ Event approved successfully" });
//   } catch (err) {
//     console.error("❌ Error approving event:", err);
//     res.status(500).json({ error: "Failed to approve event" });
//   }
// });

// // 🟢 Delete event (admin)
// app.delete("/api/events/:id", adminAuth, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const adminSecret = req.headers["x-admin-secret"];
//     if (adminSecret !== process.env.ADMIN_SECRET) {
//       return res.status(403).json({ error: "❌ Unauthorized access" });
//     }

//     await eventsCollection.deleteOne({ _id: new ObjectId(id) });
//     res.json({ message: "🚫 Event deleted successfully" });
//   } catch (err) {
//     console.error("❌ Error deleting event:", err);
//     res.status(500).json({ error: "Failed to delete event" });
//   }
// });

// // ✅ Root route
// app.get("/", (req, res) => {
//   res.send("🎯 Marathon API is running...");
// });

// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();
const app = express();

// ✅ CORS for dev frontend
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// ✅ MongoDB setup
const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "marathonDB";
let eventsCollection;

async function initDB() {
  await client.connect();
  const db = client.db(dbName);
  eventsCollection = db.collection("events");
  console.log("✅ MongoDB connected");
}
initDB();

// ✅ Admin auth middleware
function adminAuth(req, res, next) {
  const adminSecret = req.headers["x-admin-secret"];
  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: "❌ Unauthorized: Admin password required" });
  }
  next();
}

// ➕ Add new event (pending approval)
app.post("/api/events", async (req, res) => {
  try {
    const event = req.body;
    event.isApproved = false;      // still not approved
    event.isPendingUpdate = true;  // mark as pending for admin
    event.isPendingDelete = false; 
    const result = await eventsCollection.insertOne(event);
    res.json({ message: "⚡ Event submitted (pending admin approval)", id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit event" });
  }
});


// ✏️ Submit update request (pending approval)
app.put("/api/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    await eventsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, isPendingUpdate: true } }
    );
    res.json({ message: "⚡ Update submitted, pending admin approval" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit update" });
  }
});

// 🗑️ Request deletion (pending approval)
app.delete("/api/events/:id/request", async (req, res) => {
  try {
    const { id } = req.params;
    await eventsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { isPendingDelete: true } }
    );
    res.json({ message: "⚡ Deletion requested, pending admin approval" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to request deletion" });
  }
});

// ✅ Admin approves update
app.put("/api/events/:id/approve-update", adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await eventsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { isApproved: true, isPendingUpdate: false } }
    );
    res.json({ message: "✅ Update approved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to approve update" });
  }
});

// ✅ Admin approves deletion
app.delete("/api/events/:id/approve-delete", adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await eventsCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: "🚫 Event deleted by admin" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete event" });
  }
});

// 👀 Get all approved events
app.get("/api/events/approved", async (req, res) => {
  try {
    const events = await eventsCollection.find({ isApproved: true }).sort({ date: 1 }).toArray();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// 👀 Get all pending events (for admin dashboard)
app.get("/api/events/pending", async (req, res) => {
  try {
    const events = await eventsCollection.find({
      $or: [{ isPendingUpdate: true }, { isPendingDelete: true }]
    }).sort({ date: 1 }).toArray();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch pending events" });
  }
});

// Root
app.get("/", (req, res) => res.send("🎯 Marathon API is running..."));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
