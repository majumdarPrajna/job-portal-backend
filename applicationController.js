const Application = require("../models/Application");

exports.applyJob = async (req, res) => {
  try {
    const app = await Application.create({ user: req.user.id, job: req.body.jobId });
    res.status(201).json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const deleted = await Application.findOneAndDelete({ user: req.user.id, job: req.params.jobId });
    res.json({ message: "Application deleted", deleted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
