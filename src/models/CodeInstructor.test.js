const CodeInstructor = require("./CodeInstructor");
const Student = require("./Student");
const CodeAssignment = require("./CodeAssignment");
const Cohort = require("./Cohort");

describe("CodeInstructor", () => {
  describe("giveAssignment", () => {
    test("should throw an error when not given a student", () => {
      const underTest = new CodeInstructor();
      const testStudent = "Student";
      const assignment = new CodeAssignment(
        "Virtual Pet",
        "An application that tracks Virtual Pets"
      );

      expect(() => {
        underTest.giveAssignment(testStudent, assignment);
      }).toThrow("giveAssignment method must be passed an AssignmentReceiver");
    });

    test("should increase the number of assignments in a given student", () => {
      const underTest = new CodeInstructor();
      const testStudent = new Student("hnjastm54235", "Donny", "Hamilton");
      const assignment = new CodeAssignment(
        "Virtual Pet",
        "An application that tracks Virtual Pets"
      );

      underTest.giveAssignment(testStudent, assignment);
      const studentAssignments = testStudent.getAssignmentsLength();

      expect(studentAssignments).toEqual(1);
    });

    test("should add given assignment to Student assignments", () => {
      const underTest = new CodeInstructor();
      const testStudent = new Student("hnjastm54235", "Donny", "Hamilton");
      const assignment = new CodeAssignment(
        "Virtual Pet",
        "An application that tracks Virtual Pets"
      );

      underTest.giveAssignment(testStudent, assignment);
      const studentAssignments = testStudent.getAssignments();

      expect(studentAssignments).toContain(assignment);
    });

    test("should have giveAssignment as an Assigner", () => {
      const underTest = new CodeInstructor();

      expect(typeof underTest.giveAssignment === "function").toBeTruthy();
    });
  });

  describe("addStudentToCohort", () => {
    test("should add a new student to the cohort", () => {
      const underTest = new CodeInstructor(new Cohort());
      const testStudent = new Student("asdfgdfasgh235");

      underTest.addStudentToCohort(testStudent);

      expect(underTest.getCohortStudents()).toContain(testStudent);
    });
  });

  describe("giveAssignmentToCohort", () => {
    test("should give an assignment to all students in a given cohort", () => {
      const underTest = new CodeInstructor(new Cohort());
      const testAssignment = new CodeAssignment("title", "description");

      const studentOne = new Student("asdgfkjloow34e452154");
      const studentTwo = new Student("asdgfkgdfasgyghr54");
      const studentThree = new Student("asdgfkjlo6547856");

      underTest.addStudentToCohort(studentOne);
      underTest.addStudentToCohort(studentTwo);
      underTest.addStudentToCohort(studentThree);

      underTest.giveAssignmentToCohort(testAssignment);

      expect(studentOne.getAssignments()).toContain(testAssignment);
      expect(studentTwo.getAssignments()).toContain(testAssignment);
      expect(studentThree.getAssignments()).toContain(testAssignment);
    });
  });
});
