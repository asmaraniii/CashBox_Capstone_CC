const express = require('express');
const budgetingController = require('../controllers/budgetingController');

const router = express.Router();

// Endpoint untuk menambahkan budget
router.post('/', async (req, res) => {
    try {
      const { nominal, kategori, urgensi } = req.body;
  
      if (nominal === undefined || kategori === undefined || urgensi === undefined) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const response = await budgetingController.addBudgeting(req, res);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

// Endpoint untuk mendapatkan semua budget
router.get('/', budgetingController.getAllBudgeting);

// Endpoint untuk mengedit budget
router.put('/:id', budgetingController.updateBudgeting);

// Endpoint untuk menghapus budget
router.delete('/:id', budgetingController.deleteBudgeting);

module.exports = router;