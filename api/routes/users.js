import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/usersController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello User, You are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello User, You are logged in and can delete your account');
// });

// router.get('/checkadmin', verifyAdmin, (req, res, next) => {
//   res.send('Hello Admin, You are logged in and can delete all account');
// });

// Update a user same as PUT /api/users/:id
router.put('/:id', verifyUser, updateUser);

// Delete a user same as DELETE /api/users/:id
router.delete('/:id', verifyUser, deleteUser);

// Get user by id same as GET /api/users/:id == SHOW
router.get('/:id', verifyUser, getUser);

// Get all users same as GET /api/users == GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;
// module.exports = router;
