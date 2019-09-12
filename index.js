const input = require("readline-sync");

const Cohort = require("./src/Cohort");
const Student = require("./src/Student");
const CodeInstructor = require("./src/CodeInstructor");

console.log("Welcome to NotPoliSchool!");
console.log("-------------------------");
console.log();
console.log("Please select an option: ");
console.log("-------------------------");
console.log();
console.log("1. Print current cohort roster");
console.log("2. Retrieve a specific Student");
console.log("3. Give an assignment to the cohort");
console.log();
console.log();

const javaScript = new Cohort();
const codeInstructor = new CodeInstructor();
javaScript.addStudent(new Student("hrtwyhsx4436"));
javaScript.addStudent(new Student("hremnsdrf62366", "Donny", "Hamilton"));

const userSelection = input.question("Which option would you like to choose? ");

switch (userSelection) {
  case "1":
    printCurrentRoster();
    break;

  case "2":
    printIndividualStudent();
    break;

  case "3":
    // codeInstructor.getCohortStudents().forEach(student => {
    //   codeInstructor.giveAssignment(
    //     student,
    //     new Assignment("title", "description")
    //   );
    // });
    break;

  default:
    break;
}

function printCurrentRoster() {
  const students = javaScript.getStudentsArray();
  students.forEach(student => {
    console.log(`${student.getId()}: ${student.getFullName()}`);
  });
}

function printIndividualStudent() {
  console.log("Here is the list of current students:");
  console.log("-------------------------------------");
  console.log();
  printCurrentRoster();
  console.log("-------------------------------------");
  console.log();
  const selectedStudentId = input.question(
    "Please enter the ID of the student to select: "
  );
  const student = javaScript.getStudent(selectedStudentId);
  console.log(`${student.getId()}: ${student.getFullName()}`);
}
