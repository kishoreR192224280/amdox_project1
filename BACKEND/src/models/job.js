import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      name: { type: String, required: true },
      shortInfo: String,
      organizationType: String,
      founded: String,
      size: String,

      contact: {
        phone: String,
        email: String,
        website: String,
        socialLinks: {
          facebook: String,
          twitter: String,
          instagram: String,
          youtube: String,
        },
      },
    },

    logo: { type: String, required: true },

    featured: {
      type: Boolean,
      default: false,
    },

    location: { type: String, required: true },

    jobTitle: { type: String, required: true },

    jobDescription: String,

    responsibilities: [String],

    jobType: { type: String, required: true },

    education: String,

    experience: String,

    salary: {
      currency: String,
      min: Number,
      max: Number,
      display: String,
    },

    status: {
      type: String,
      default: "active",
    },

    jobPosted: Date,

    jobExpire: Date,
  },
  {
    timestamps: true, // uses createdAt & updatedAt automatically
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
