import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

/* ===========================
   SIGNUP
=========================== */
export const signup = async (req, res) => {
  try {
    let { fullName, username, email, password } = req.body;

    // 🛑 strict undefined check
    if (
      fullName === undefined ||
      username === undefined ||
      email === undefined ||
      password === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    fullName = fullName.trim();
    username = username.trim().toLowerCase();
    email = email.trim().toLowerCase();

    // validations
    if (fullName.length < 3) {
      return res.status(400).json({ message: "Full name too short" });
    }

    if (username.length < 4 || username.includes(" ")) {
      return res.status(400).json({ message: "Invalid username" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 8 || !/\d/.test(password)) {
      return res.status(400).json({
        message: "Password must be at least 8 characters with a number",
      });
    }

    // duplicate check
    const exists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (exists) {
      return res
        .status(409)
        .json({ message: "Email or username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,

      // ✅ dashboard-ready defaults
      appliedJobs: [],
      favoriteJobs: [],
      appliedJobsCount: 0,
      favoriteJobsCount: 0,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ===========================
   LOGIN
=========================== */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ SET COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production (https)
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        appliedJobsCount: user.appliedJobsCount,
        favoriteJobsCount: user.favoriteJobsCount,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ===========================
   LOGOUT
=========================== */
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: false, // true in production (https)
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};


/* ===========================
   GET current user
=========================== */
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
