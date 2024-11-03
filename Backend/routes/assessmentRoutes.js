const express = require('express');
const Assessment = require('../models/Assessment');

const router = express.Router();

// Create a new assessment
router.post('/', async (req, res) => {
  try {
    const newAssessment = new Assessment(req.body);
    await newAssessment.save();
    res.status(201).json(newAssessment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all assessments
router.get('/', async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.json(assessments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
