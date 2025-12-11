import express from "express"
import { createNotes, getAllNotes } from "../controllers/notesControllers.js";
export const router = express.Router()

router.get("/", getAllNotes);

router.post("/",createNotes)


export default router