const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Single root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Student CRUD API' });
});

// Routes
app.use('/students', studentRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;