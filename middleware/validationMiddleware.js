
module.exports = (req, res, next) => {
  const { video, duration } = req.body;

  if (!video) {
    return res.status(400).json({ error: 'Video is required' });
  }

  if (!duration || parseInt(duration) > 15) {
    return res.status(400).json({ error: 'Duration must be ≤ 15 seconds' });
  }

  next();
};
