const express = require('express');
const app = express();
const connectDB = require('./config/db');
const studentRoutes = require('./routes/students');
require('dotenv').config();

connectDB();

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(express.json());

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('🎓 Welcome to my Student Crud API!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
