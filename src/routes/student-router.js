var express = require("express");
var router = express.Router();

const StudentController = require("../controllers/student-controller");

/* GET home page. */
router.get("/", StudentController.renderAll);

module.exports = router;
