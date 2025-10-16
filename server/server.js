/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // load MONGODB_URI from .env

const app = express();
// app.use(cors());
// app.use(express.json());
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5174", "https://satyajit-ghosh.netlify.app"]
}));

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "marathonDB"; // same as in URI
const collectionName = "events";

async function getCollection() {
  if (!client.topology?.isConnected()) await client.connect();
  return client.db(dbName).collection(collectionName);
}

app.get("/api/test", async (req, res) => {
  try {
    const collection = await getCollection();
    await collection.findOne();
    // res.send("✅ MongoDB connected successfully!");
    // res.send("✅ MongoDB connected successfully!");
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    res.status(500).send("❌ MongoDB connection failed: " + err.message);
  }
});

// ✅ Get all events (sorted by date)
app.get("/api/events", async (req, res) => {
  try {
    const collection = await getCollection();
    const events = await collection.find().sort({ date: 1 }).toArray();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch events" });
  }
});

// ✅ Add event
app.post("/api/events", async (req, res) => {
  try {
    const collection = await getCollection();
    const result = await collection.insertOne(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to add event" });
  }
});

// ✅ Update event
app.put("/api/events/:id", async (req, res) => {
  try {
    const collection = await getCollection();
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to update event" });
  }
});

// ✅ Delete event
app.delete("/api/events/:id", async (req, res) => {
  try {
    const collection = await getCollection();
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to delete event" });
  }
});




app.listen(5000, () => console.log("✅ Server running on port 5000"));
