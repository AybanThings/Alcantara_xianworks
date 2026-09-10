// routes/index.js — Root router: redirects / to the /ivan app
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/ivan");
});

export default router;