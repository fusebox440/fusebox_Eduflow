import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js";

const OTPSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 5 * 60, // expires after 5 minutes
    },
  },
  { timestamps: true }
);

// function to send email
async function sendVerificationEmail(email, otp) {
  try {
    await mailSender(
      email,
      "Verification Email from Fusebox Eduflow",
      otp
    );
    console.log("Email sent successfully to:", email);
  } catch (error) {
    console.error("Error while sending verification email:", error);
    throw error;
  }
}

// ✅ IMPORTANT: use NORMAL function, NOT arrow
OTPSchema.pre("save", async function (next) {
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

const OTP = mongoose.model("OTP", OTPSchema);

export default OTP;
