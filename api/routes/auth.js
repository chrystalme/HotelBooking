import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// Create a new   User same as POST /api/register
router.post('/register', registerUser);

export default router;
// module.exports = router;
