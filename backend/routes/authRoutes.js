// backend/routes/authRoutes.js - Add Google auth routes
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { register, login, generateToken } = require('../controllers/authController');


router.post('/auth/register', register);
router.post('/auth/login', login);

// Google OAuth routes
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = generateToken(req.user._id);
    res.redirect(`${process.env.CLIENT_URL}/auth/success?token=${token}`);
  }
);



module.exports = router;