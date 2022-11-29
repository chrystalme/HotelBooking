import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

//Create a new hotel same as POST /api/hotels

router.post('/', async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.json(savedHotel).status(200);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update a hotel same as PUT /api/hotels/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.send(updatedHotel).status(200);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a hotel same as DELETE /api/hotels/:id
router.delete('/:id', async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted');
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all hotels same as GET /api/hotels == GET ALL

// Get hotel by id same as GET /api/hotels/:id == SHOW

export default router;
// module.exports = router;
