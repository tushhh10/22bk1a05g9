const express = require('express');
const app = express();

console.log('Starting server...');

// Try importing db.js and urlController.js here
require('./db'); // Add this line
require('./urlController'); // Add this line

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

const db = require('./db');
const Url = require('./models/Url');

const urlController = require('/routes/urlController')

app.use('/api/v1/urls', urlController);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
const db = require('./db');
const Url = require('./models/Url');
const urlController = require('/routes/urlController')