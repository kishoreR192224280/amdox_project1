import Employer from "../models/employers.js";

export const getEmployers = async (req, res) => {
  try {
    const { keyword, location, openJobs } = req.query;

    const query = {};

    // 🔍 Company name search
    if (keyword) {
      query.company = { $regex: keyword, $options: "i" };
    }

    // 📍 Location search
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    // 📊 Open jobs filter
    if (openJobs) {
      if (openJobs === "1-5") query.openJobs = { $lte: 5 };
      if (openJobs === "6-10") query.openJobs = { $gte: 6, $lte: 10 };
      if (openJobs === "10+") query.openJobs = { $gte: 10 };
    }

    const employers = await Employer.find(query).sort({ createdAt: -1 });

    res.status(200).json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
