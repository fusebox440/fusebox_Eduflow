import express from "express";
const router = express.Router();

import {
  capturePayment,
  verifyPayment,
} from "../controllers/payments.js";

import {
  auth,
  isStudent,
} from "../middleware/auth.js";

router.post("/capturePayment", auth, isStudent, capturePayment);
router.post("/verifyPayment", auth, isStudent, verifyPayment);

export default router;
