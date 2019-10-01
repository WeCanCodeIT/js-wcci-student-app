const Cohort = require("../models/Cohort");
const Student = require("../models/Student");
const IdGenerator = require("../utils/id-generator");

const javaScript = new Cohort();

javaScript.addStudent(new Student(IdGenerator.generate(), "Donny", "Hamilton"));
javaScript.addStudent(new Student(IdGenerator.generate(), "Ben", "Williams"));
javaScript.addStudent(new Student(IdGenerator.generate(), "Lacey", "Nichols"));

module.exports = {
  readAllStudents() {
    return javaScript.getStudentsArray();
  }
};
