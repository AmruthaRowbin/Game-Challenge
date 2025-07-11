const fs = require('fs');
const path = require('path');

const submissionFile = path.join(__dirname, '../data/submissions.json');

const getRandomStatus = () => {
  const statuses = ['pending', 'approved', 'rejected'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

exports.getSubmissions = (req, res) => {
  const data = fs.existsSync(submissionFile)
    ? JSON.parse(fs.readFileSync(submissionFile))
    : [];

  // simulate moderation status
  const updated = data.map(sub => ({
    ...sub,
    status: sub.status || getRandomStatus(),
  }));

  res.json(updated);
};

exports.postSubmission = (req, res) => {
  const { video, stickers, challengeId, duration } = req.body;

  const submission = {
    id: Date.now(),
    challengeId,
    video,
    stickers,
    duration,
    status: 'pending',
    submittedAt: new Date(),
  };

  let data = [];
  if (fs.existsSync(submissionFile)) {
    data = JSON.parse(fs.readFileSync(submissionFile));
  }

  data.push(submission);
  fs.writeFileSync(submissionFile, JSON.stringify(data, null, 2));

  res.json({ message: 'Submission pending review by moderator' });
};

exports.postPreview = (req, res) => {
  const { video, stickers, challengeId } = req.body;

  res.json({
    message: 'Preview generated',
    preview: {
      video,
      stickers,
      challengeId,
    },
  });
};
