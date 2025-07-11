const express = require('express');
const bodyParser = require('body-parser')
const multer = require('multer');
const asciiArt = require('./utils/asciiArt');

const challengeRoutes = require('./routes/challengeRoutes');
const submissionRoutes = require('./routes/submissionRoutes');

const app = express();
const upload = multer(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/challenges', challengeRoutes);
app.use('/submissions', upload.none(), submissionRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  asciiArt();
  console.log(` Server running on http://localhost:${PORT}`);
});
