const express = require('express');
const router = express.Router();
const {
  getSubmissions,
  postSubmission,
  postPreview,
} = require('../controllers/submissionController');

const delayMiddleware = require('../middleware/delayMiddleware');
const validateSubmission = require('../middleware/validationMiddleware');

router.get('/', getSubmissions);
router.post('/', delayMiddleware, validateSubmission, postSubmission);
router.post('/preview', postPreview);

module.exports = router;
