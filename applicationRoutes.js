const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { applyJob, deleteApplication } = require("../controllers/applicationController");

const router = express.Router();

router.post("/", protect, applyJob);
router.delete("/:jobId", protect, deleteApplication);

module.exports = router;
