import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
  company: String,
  logo: String,
  location: String,
  openJobs: Number,
  status: String,
  createdAt: Date
});

export default mongoose.model(
  "Employer",          // model name (any, used internally)
  employerSchema,
  "employer"         
);