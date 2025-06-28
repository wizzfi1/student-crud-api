const Joi = require('joi');

const studentValidationSchema = {
  // POST /students
  createStudent: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(5).max(120).required(),
  }),

  // PUT /students/:id
  updateStudent: Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    age: Joi.number().integer().min(5).max(120),
  }).min(1),
};

module.exports = studentValidationSchema;