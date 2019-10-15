var express = require("express");
var router = express.Router();

const AssignmentController = require("../controllers/assignment-controller");

/* GET all students. */
router.get("/", AssignmentController.renderAll);

// // GET single student.
router.get("/:id", AssignmentController.renderSingle);

// // POST single student
router.post("/", AssignmentController.add)

module.exports = router;
