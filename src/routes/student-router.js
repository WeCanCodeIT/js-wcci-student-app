var express = require("express");
var router = express.Router();

const StudentController = require("../controllers/student-controller");

/* GET all students. */
router.get("/", StudentController.renderAll);

// GET single student.
router.get("/:id", StudentController.renderStudent);

module.exports = router;
