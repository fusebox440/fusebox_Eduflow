import express from "express";
const router = express.Router();

// Course controllers
import {
  createCourse,
  getCourseDetails,
  getAllCourses,
  getFullCourseDetails,
  editCourse,
  deleteCourse,
  getInstructorCourses,
} from "../controllers/course.js";

import { updateCourseProgress } from "../controllers/courseProgress.js";

// Category controllers
import {
  createCategory,
  showAllCategories,
  getCategoryPageDetails,
} from "../controllers/category.js";

// Section controllers
import {
  createSection,
  updateSection,
  deleteSection,
} from "../controllers/section.js";

// SubSection controllers
import {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} from "../controllers/subSection.js";

// Rating controllers
import {
  createRating,
  getAverageRating,
  getAllRatingReview,
} from "../controllers/ratingAndReview.js";

// Middlewares
import {
  auth,
  isAdmin,
  isInstructor,
  isStudent,
} from "../middleware/auth.js";

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can only be created by instructors
router.post("/createCourse", auth, isInstructor, createCourse);

// Section routes
router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);

// SubSection routes
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);

// Course fetch routes
router.post("/getCourseDetails", getCourseDetails);
router.get("/getAllCourses", getAllCourses);
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);

// Course edit/delete
router.post("/editCourse", auth, isInstructor, editCourse);
router.delete("/deleteCourse", auth, isInstructor, deleteCourse);

// Course progress
router.post(
  "/updateCourseProgress",
  auth,
  isStudent,
  updateCourseProgress
);

// ********************************************************************************************************
//                                      Category routes (Admin only)
// ********************************************************************************************************

router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", getCategoryPageDetails);

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************

router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRatingReview);

export default router;
