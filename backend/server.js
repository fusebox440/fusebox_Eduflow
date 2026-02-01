import express from "express";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// config
import { connectDB } from "./config/database.js";
import { cloudinaryConnect } from "./config/cloudinary.js";

// routes
import userRoutes from "./routes/user.js";
import profileRoutes from "./routes/profile.js";
import paymentRoutes from "./routes/payments.js";
import courseRoutes from "./routes/course.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// connect external services
connectDB();
cloudinaryConnect();

// routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/course", courseRoutes);

// default route
app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: Arial; padding: 20px; text-align: center;">
      <h1>Fusebox Eduflow API</h1>
      <p>Created by Lakshya Khetan</p>
      <p>Server is running successfully! ✅</p>
    </div>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
