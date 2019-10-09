var express = require("express");
var router = express.Router();

const IndexController = require("../controllers/index-controller");

/* GET home page. */
router.get("/", IndexController.redirectToStudents);

module.exports = router;
