import express from 'express';

const router = express.Router();

router.get('/instances', (req, res) => {
  res.json([]);
});

export default router;
