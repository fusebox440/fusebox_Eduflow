// AUTH , IS STUDENT , IS INSTRUCTOR , IS ADMIN

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// ================ AUTH ================
// user Authentication by checking token validating
export const auth = (req, res, next) => {
  try {
    // extract token from body, cookies, or headers
    const token =
      req.body?.token ||
      req.cookies?.token ||
      req.header("Authorization")?.replace("Bearer ", "");

    // if token is missing
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is Missing",
      });
    }

    // verify token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    } catch (error) {
      console.log("Error while decoding token");
      console.log(error);
      return res.status(401).json({
        success: false,
        error: error.message,
        message: "Error while decoding token",
      });
    }

    next();
  } catch (error) {
    console.log("Error while token validating");
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while token validating",
    });
  }
};

// ================ IS STUDENT ================
export const isStudent = (req, res, next) => {
  try {
    if (req.user?.accountType !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This page is protected only for students",
      });
    }
    next();
  } catch (error) {
    console.log("Error while checking student role");
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while checking student role",
    });
  }
};

// ================ IS INSTRUCTOR ================
export const isInstructor = (req, res, next) => {
  try {
    if (req.user?.accountType !== "Instructor") {
      return res.status(401).json({
        success: false,
        message: "This page is protected only for instructors",
      });
    }
    next();
  } catch (error) {
    console.log("Error while checking instructor role");
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while checking instructor role",
    });
  }
};

// ================ IS ADMIN ================
export const isAdmin = (req, res, next) => {
  try {
    if (req.user?.accountType !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This page is protected only for admins",
      });
    }
    next();
  } catch (error) {
    console.log("Error while checking admin role");
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while checking admin role",
    });
  }
};
