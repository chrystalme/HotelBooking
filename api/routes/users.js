import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/usersController.js';

const router = express.Router();

router.get('/checkauthentication', (req, res, next) => {
  res.send('Hello User, You are logged in');
});

router.get('/checkuser/:id', (req, res, next) => {
  res.send('Hello User, You are logged in and can delete your account');
});

// Update a user same as PUT /api/users/:id
router.put('/:id', updateUser);

// Delete a user same as DELETE /api/users/:id
router.delete('/:id', deleteUser);

// Get all users same as GET /api/users == GET ALL
router.get('/', getUsers);

// Get user by id same as GET /api/users/:id == SHOW
router.get('/:id', getUser);

export default router;
// module.exports = router;
