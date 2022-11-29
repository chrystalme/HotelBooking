import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('users endpoint');
});

export default router;
// module.exports = router;
