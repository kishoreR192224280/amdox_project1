import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },

    // ✅ DASHBOARD FIELDS
    appliedJobs: [
      {
        jobId: mongoose.Schema.Types.ObjectId,
        appliedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    favoriteJobs: [
      {
        jobId: mongoose.Schema.Types.ObjectId,
        savedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    appliedJobsCount: {
      type: Number,
      default: 0,
    },

    favoriteJobsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
