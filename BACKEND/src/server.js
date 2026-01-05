import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/jobRoutes.js"; 
import employerRoutes from "./routes/employerRoutes.js";
import { connectDB } from "./config/db.js";
import { protect } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();

// --------------------
// Middlewares
// --------------------
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// --------------------
// Routes
// --------------------
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(cookieParser());

// 🔐 Auth routes
app.use("/api/auth", authRoutes);

// 💼 Job routes
app.use("/api/jobs", jobRoutes);

app.use("/api/employers", employerRoutes);

// 🔒 Protected test route
app.get("/api/protected", protect, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed successfully",
    userId: req.user,
  });
});

// --------------------
// Database Connection
// --------------------
connectDB();

// --------------------
// Server
// --------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
