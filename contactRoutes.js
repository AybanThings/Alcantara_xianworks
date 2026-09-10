// routes/contactRoutes.js — Modular route: Contact
import express from "express";
import { contactPage } from "../controllers/contactController.js";

const router = express.Router();

// GET /ivan/contact
router.get("/contact", contactPage);

export default router;