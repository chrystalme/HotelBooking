import express from 'express';
import {
  countByCity,
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
router.get('/find/:id', getHotel);

//  Get number hotel by id same as GET /api/hotels/countByCity?cities= == SHOW
router.get('/countByCity', countByCity);

// Get hotel by id same as GET /api/hotels/:id == SHOW
router.get('/countByType');
export default router;
// module.exports = router;
