// routes/aboutRoutes.js — Modular route: About
import express from "express";
import { aboutPage } from "../controllers/aboutController.js";

const router = express.Router();

// GET /ivan/about
router.get("/about", aboutPage);

export default router;