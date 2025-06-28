const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const studentValidation = require('../validations/studentValidation');
const validate = require('../middlewares/validate'); // Fixed import

router.get('/', studentController.getStudents);
router.post('/', validate(studentValidation.createStudent), studentController.createStudent);
router.get('/:id', studentController.getStudent);
router.put('/:id', validate(studentValidation.updateStudent), studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.get('/count', studentController.getStudentsCount);

module.exports = router;