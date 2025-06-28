const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Joi validation error
  if (err.isJoi) {
    return res.status(400).json({
      success: false,
      error: err.details || err.message,
    });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      error: 'Duplicate key error',
    });
  }

  // Default to 500 server error
  res.status(500).json({
    success: false,
    error: 'Server error',
  });
};

module.exports = errorHandler;