import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createApplication,
  getApplications,
  updateApplication,
  deleteApplication,
  getApplicationStats,
} from "../controllers/applicationController.js";

const router = express.Router();

router.route("/")
  .post(protect, createApplication)
  .get(protect, getApplications);

router.get("/stats", protect, getApplicationStats);

router.route("/:id")
  .put(protect, updateApplication)
  .delete(protect, deleteApplication);

export default router;
