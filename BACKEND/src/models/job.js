import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: String,
    logo: String,
    featured: Boolean,
    location: String,
    jobTitle: String,
    jobType: String,
    salary: {
      currency: String,
      min: Number,
      max: Number,
      display: String
    },
    status: String,
    createdAt: Date
  },
  { timestamps: false }
);

const Job = mongoose.model("Job", jobSchema);

export default Job; // ✅ THIS FIXES THE ERROR
