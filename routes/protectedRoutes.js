const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// router.get('/home', authMiddleware, (req, res) => {
//   res.status(200).json({ message: 'Welcome to the home page!' });
// });

router.get('/home', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Welcome to the home page!' });
});

module.exports = router;
