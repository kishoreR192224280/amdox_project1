import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import notes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

// Middlewares
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/notes", notes);

// Database Connection
connectDB();

// Server Port
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
