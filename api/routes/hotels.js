import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotelsController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create a new hotel same as POST /api/hotels
router.post('/', verifyAdmin, createHotel);

// Update a hotel same as PUT /api/hotels/:id
router.put('/:id', verifyAdmin, updateHotel);

// Delete a hotel same as DELETE /api/hotels/:id
router.delete('/:id', verifyAdmin, deleteHotel);

// Get all hotels same as GET /api/hotels == GET ALL
router.get('/', getHotels);

// Get hotel by id same as GET /api/hotels/:id == SHOW
router.get('/:id', getHotel);
export default router;
// module.exports = router;
