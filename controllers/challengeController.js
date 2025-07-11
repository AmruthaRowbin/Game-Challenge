exports.getChallenges = (req, res) => {
  const challenges = [
    {
      id: 1,
      title: 'Dance Challenge',
      videoUrl: 'https://placeholder.com/video1.mp4',
      stickers: ['💃', '🔥', '🎵'],
    },
    {
      id: 2,
      title: 'Food Challenge',
      videoUrl: 'https://placeholder.com/video2.mp4',
      stickers: ['🍕', '🍔', '🌮'],
    },
    {
      id: 3,
      title: 'Pet Challenge',
      videoUrl: 'https://placeholder.com/video3.mp4',
      stickers: ['🐶', '🐱', '🦜'],
    },
    {
      id: 4,
      title: 'Funny Face',
      videoUrl: 'https://placeholder.com/video4.mp4',
      stickers: ['🤣', '🤪', '😜'],
    },
    {
      id: 5,
      title: 'Fitness Fun',
      videoUrl: 'https://placeholder.com/video5.mp4',
      stickers: ['🏋️‍♂️', '🤸‍♀️', '💪'],
    },
  ];

  res.json(challenges);
};
