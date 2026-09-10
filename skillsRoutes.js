// routes/skillsRoutes.js — Modular route: Skills
import express from "express";
import { skillsPage } from "../controllers/skillsController.js";

const router = express.Router();

// GET /ivan/skills
router.get("/skills", skillsPage);

export default router;