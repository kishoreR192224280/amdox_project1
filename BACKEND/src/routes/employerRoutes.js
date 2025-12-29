import express from "express";
import { getEmployers } from "../controllers/EmployerController.js";


const router = express.Router();

router.get("/", getEmployers);

export default router;
