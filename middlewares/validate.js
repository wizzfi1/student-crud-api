const Joi = require('joi');

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      const err = new Error('Validation error');
      err.isJoi = true;
      err.details = errors;
      return next(err);
    }
    
    next();
  };
};

module.exports = validate;