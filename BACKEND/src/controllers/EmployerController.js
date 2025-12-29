import Employer from "../models/employer.js";

// GET all employers
export const getEmployers = async (req, res) => {
  try {
    const employers = await Employer.find({ status: "active" })
      .sort({ createdAt: -1 });

    res.status(200).json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
