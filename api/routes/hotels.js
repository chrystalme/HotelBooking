import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotelsController.js';

const router = express.Router();

// Create a new hotel same as POST /api/hotels
router.post('/', createHotel);

// Update a hotel same as PUT /api/hotels/:id
router.put('/:id', updateHotel);

// Delete a hotel same as DELETE /api/hotels/:id
router.delete('/:id', deleteHotel);

// Get all hotels same as GET /api/hotels == GET ALL
router.get('/', getHotels);

// Get hotel by id same as GET /api/hotels/:id == SHOW
router.get('/:id', getHotel);
export default router;
// module.exports = router;
