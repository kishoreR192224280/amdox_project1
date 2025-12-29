import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const {
      keyword,
      location,
      jobType,
      salaryMin,
      salaryMax
    } = req.query;

    const query = { status: "active" };

    // Keyword
    if (keyword) {
      query.$or = [
        { jobTitle: { $regex: keyword, $options: "i" } },
        { company: { $regex: keyword, $options: "i" } }
      ];
    }

    // Location
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    // Job Type
    if (jobType) {
      query.jobType = new RegExp(`^${jobType}$`, "i");
    }

    // Salary range
    if (salaryMin || salaryMax) {
      query["salary.min"] = { $gte: Number(salaryMin || 0) };
      query["salary.max"] = { $lte: Number(salaryMax || 1000000) };
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
