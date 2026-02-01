import express from "express";
const router = express.Router();

// Controllers
import {
  signup,
  login,
  sendOTP,
  changePassword,
} from "../controllers/auth.js";

// Reset password controllers
import {
  resetPasswordToken,
  resetPassword,
} from "../controllers/resetPassword.js";

// Middleware
import { auth } from "../middleware/auth.js";

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user signup
router.post("/signup", signup);

// Route for user login
router.post("/login", login);

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP);

// Route for Changing the password
router.post("/changepassword", auth, changePassword);

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

export default router;
