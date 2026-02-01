import express from "express";
const router = express.Router();

import { auth, isInstructor } from "../middleware/auth.js";

// Controllers
import {
  updateProfile,
  updateUserProfileImage,
  getUserDetails,
  getEnrolledCourses,
  deleteAccount,
  instructorDashboard,
} from "../controllers/profile.js";

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount);

// Update profile
router.put("/updateProfile", auth, updateProfile);

// Get user details
router.get("/getUserDetails", auth, getUserDetails);

// Get enrolled courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses);

// Update profile image
router.put("/updateUserProfileImage", auth, updateUserProfileImage);

// Instructor dashboard
router.get(
  "/instructorDashboard",
  auth,
  isInstructor,
  instructorDashboard
);

export default router;
