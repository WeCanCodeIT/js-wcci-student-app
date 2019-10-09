var express = require("express");
var router = express.Router();

const CohortController = require("../controllers/cohort-controller");

/* GET all students. */
router.get("/", CohortController.renderAll);

// // GET single student.
// router.get("/:id", StudentController.renderStudent);

// // POST single student
// router.post("/", StudentController.addStudent)

module.exports = router;
