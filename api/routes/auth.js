import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Create a new   User same as POST /api/auth/register
router.post('/register', registerUser);
// Create a new   User same as POST /api/auth/login
router.post('/login', loginUser);

export default router;
// module.exports = router;
