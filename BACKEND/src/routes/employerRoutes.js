import express from "express";
import { getEmployers } from "../controllers/employerController.js";

const router = express.Router();

router.get("/", getEmployers);

export default router;
