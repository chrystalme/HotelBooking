import express from 'express';

const router = express.Router();

// Create a new room same as POST /api/rooms
router.post('/', verifyAdmin, createRoom);

// Update a room same as PUT /api/rooms/:id
router.put('/:id', verifyAdmin, updateRoom);

// Delete a room same as DELETE /api/rooms/:id
router.delete('/:id', verifyAdmin, deleteRoom);

// Get all rooms same as GET /api/rooms == GET ALL
router.get('/', getRooms);

// Get room by id same as GET /api/rooms/:id == SHOW
router.get('/:id', getRoom);

export default router;
// module.exports = router;
