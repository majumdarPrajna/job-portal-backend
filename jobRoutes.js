const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { createJob, getJobs, searchJobs } = require("../controllers/jobController");

const router = express.Router();

router.post("/", protect, createJob);
router.get("/", getJobs);
router.get("/search", searchJobs);

module.exports = router;
