import Job from "../models/job.js";

export const getJobs = async (req, res) => {
  try {
    const {
      keyword,
      location,
      jobType,
      salaryMin,
      salaryMax,
    } = req.query;

    const query = { status: "active" };

    /* ================= KEYWORD SEARCH ================= */
    if (keyword) {
      query.$or = [
        { jobTitle: { $regex: keyword, $options: "i" } },
        { "company.name": { $regex: keyword, $options: "i" } },
        { "company.shortInfo": { $regex: keyword, $options: "i" } },
      ];
    }

    /* ================= LOCATION ================= */
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    /* ================= JOB TYPE ================= */
    if (jobType) {
      query.jobType = new RegExp(`^${jobType}$`, "i");
    }

    /* ================= SALARY RANGE (OVERLAP LOGIC) ================= */
    if (salaryMin || salaryMax) {
      const min = Number(salaryMin || 0);
      const max = Number(salaryMax || 1000000);

      query.$and = [
        { "salary.max": { $gte: min } },
        { "salary.min": { $lte: max } },
      ];
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= SINGLE JOB ================= */
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: "Invalid Job ID" });
  }
};
