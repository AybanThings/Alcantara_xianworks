// routes/homeRoutes.js — Modular route: Home
import express from "express";
import { homePage } from "../controllers/homeController.js";

const router = express.Router();

// GET /ivan/
router.get("/", homePage);

export default router;