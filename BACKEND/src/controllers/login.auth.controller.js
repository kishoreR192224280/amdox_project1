import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import validator from "validator";

const signup = async (req, res) => {
  try {
    let { fullName, username, email, password } = req.body;

    fullName = fullName?.trim();
    username = username?.trim().toLowerCase();
    email = email?.trim().toLowerCase();

    if (!fullName || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

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
        message: "Password must be 8+ characters with a number",
      });
    }

    const exists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (exists) {
      return res
        .status(409)
        .json({ message: "Email or username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export default signup;
