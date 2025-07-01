const Student = require('../models/Student');

// Create
exports.createStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, age } = req.body;
    if (!firstName || !lastName || !email || !age) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existing = await Student.findOne({ email });
    if (existing) return res.status(409).json({ message: 'Email already exists' });

    const student = await Student.create({ firstName, lastName, email, age });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read All (+ Filtering + Pagination)
exports.getAllStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10, lastName } = req.query;
    const filter = lastName ? { lastName: new RegExp(lastName, 'i') } : {};
    const students = await Student.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Count
exports.getCount = async (req, res) => {
  try {
    const count = await Student.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
