const Cohort = require("../models/Cohort");
const Student = require("../models/Student");
const IdGenerator = require("../utils/id-generator");

const javaScript = new Cohort();

javaScript.addStudent(
  new Student(
    IdGenerator.generate(),
    "Donny",
    "Hamilton",
    "https://placekitten.com/g/200/300"
  )
);
javaScript.addStudent(
  new Student(
    IdGenerator.generate(),
    "Ben",
    "Williams",
    "https://placekitten.com/g/300/400"
  )
);
javaScript.addStudent(
  new Student(
    IdGenerator.generate(),
    "Lacey",
    "Nichols",
    "https://placekitten.com/g/400/500"
  )
);

module.exports = {
  readAllStudents() {
    return javaScript.getStudentsArray();
  },
  readSingleStudent(id) {
    return javaScript.getStudent(id);
  }
};
