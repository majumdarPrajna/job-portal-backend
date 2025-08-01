const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchJobs = async (req, res) => {
  try {
    const { title } = req.query;
    const jobs = await Job.find({ title: { $regex: title, $options: "i" } });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
