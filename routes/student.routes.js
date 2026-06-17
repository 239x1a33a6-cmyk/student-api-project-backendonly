const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} = require("../controllers/student.controller");

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.patch("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);

module.exports = router;
