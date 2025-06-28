const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Add this before other routes
app.get('/', (req, res) => {
  res.json( 'Welcome to my Student CRUD API' );
});

// Routes
app.use('/students', studentRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;