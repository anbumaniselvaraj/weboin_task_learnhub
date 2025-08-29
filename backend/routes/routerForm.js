const express = require('express');
const router = express.Router();
const Form = require('../models/userForm');

// Get all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
     console.log(req.body);
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    console.log(req.body);

    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.status(200).json({
      message: "Data fetched successfully",
      data: form
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Create a form
router.post('/', async (req, res) => {
  const form = new Form(req.body);
   console.log(req.body);
 
  try {
    const newForm = await form.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a form
router.put('/:id', async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
     console.log(req.body);
    res.json(updatedForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a form
router.delete('/:id', async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);
    res.json({ message: 'Form deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;