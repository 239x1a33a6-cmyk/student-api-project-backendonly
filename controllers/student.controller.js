const Student = require("../models/student.models");

async function createStudent(req, res) {
  try {
    const { name, age, email, gender } = req.body;
    if (!name || !age || !email || !gender) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const student = await Student.create({
      name,
      age,
      email,
      gender,
    });
    return res.status(201).json({
      success: true,
      student,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error in user input",
      });
    }
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function getAllStudents(req, res) {
  try {
    const { age, gender, sort, limit, page } = req.query;
    const filter = {};
    const pageLimit = Number(page) || 1;
    const limitValue = Number(limit) || 10;
    const skipValue = (pageLimit - 1) * limitValue;
    if (age) {
      filter.age = Number(age);
    }
    if (gender) {
      filter.gender = gender;
    }
    let query = Student.find(filter);
    if (sort) {
      query = query.sort(sort);
    } else {
      query = query.sort({ createdAt: -1 });
    }
    query = query.skip(skipValue).limit(limitValue);
    const students = await query;
    return res.status(200).json({
      success: true,
      students,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
}

async function getStudentById(req, res) {
  try {
    const student = await Student.findById(req.params.id);
    if (student === null) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        student: student,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err,
    });
  }
}

async function updateStudentById(req, res) {
  try {
    const updates = req.body;
    const student = await Student.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found with given ID",
      });
    }
    return res.status(200).json({
      success: true,
      student: student,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err,
    });
  }
}

async function deleteStudentById(req, res) {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found with given ID",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      student: student,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
