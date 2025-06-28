const Student = require('../models/Student');

// @desc    Get all students
// @route   GET /students
// @access  Public
exports.getStudents = async (req, res, next) => {
  try {
    // Bonus: Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Bonus: Filter by lastName
    const filter = {};
    if (req.query.lastName) {
      filter.lastName = new RegExp(req.query.lastName, 'i');
    }

    const students = await Student.find(filter).skip(skip).limit(limit);
    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single student
// @route   GET /students/:id
// @access  Public
exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    
    if (!student) {
      return res.status(404).json({
        success: false,
        error: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create student
// @route   POST /students
// @access  Public
exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      success: true,
      data: student,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update student
// @route   PUT /students/:id
// @access  Public
exports.updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        error: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete student
// @route   DELETE /students/:id
// @access  Public
exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      data: { id: req.params.id },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get students count
// @route   GET /students/count
// @access  Public
exports.getStudentsCount = async (req, res, next) => {
  try {
    const count = await Student.countDocuments();
    res.status(200).json({
      success: true,
      data: { count },
    });
  } catch (err) {
    next(err);
  }
};