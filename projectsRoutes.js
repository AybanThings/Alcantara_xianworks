// routes/projectsRoutes.js — Modular route: Projects
import express from "express";
import { projectsPage } from "../controllers/projectsController.js";

const router = express.Router();

// GET /ivan/projects
router.get("/projects", projectsPage);

export default router;