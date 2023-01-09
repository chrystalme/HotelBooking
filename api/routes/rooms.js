import express from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create a new room same as POST /api/rooms
router.post('/:hotelid', verifyAdmin, createRoom);

// Update a room same as PUT /api/rooms/:id
router.put('/:id', verifyAdmin, updateRoom);

// Delete a room same as DELETE /api/rooms/:id
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

// Get all rooms same as GET /api/rooms == GET ALL
router.get('/', getRooms);

// Get room by id same as GET /api/rooms/:id == SHOW
router.get('/:id', getRoom);

export default router;
// module.exports = router;
