import express from "express";
import { getActivities } from "./stravaService.js";

const router = express.Router();

router.get("/activities", async (req, res) => {
  try {
    const activities = await getActivities();
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Strava activities", details: err.message });
  }
});

export default router;
