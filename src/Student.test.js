const Student = require("./Student");

describe("Student", () => {
  let underTest;

  beforeEach(() => {
    underTest = new Student("Entrance Project");
  });

  describe("enroll", () => {
    test("should change the value of enrolled on a given Student", () => {
      underTest.enroll();

      // Assert
      expect(underTest.isEnrolled()).toBeTruthy();
    });
  });

  describe("graduate", () => {
    test("should change the value of 'enrolled' to false", () => {
      underTest.enroll();
      underTest.graduate();

      expect(underTest.isEnrolled()).toBeFalsy();
    });

    test("should throw an Error if called when student isn't enrolled", () => {
      expect(() => {
        underTest.graduate();
      }).toThrow("Student must be enrolled to be eligible for graduation.");
    });
  });

  describe("receiveAssignment", () => {
    test("should add an assignment to a student", () => {
      const initialNumberOfAssignments = underTest.getAssignmentsLength();
      underTest.receiveAssignment("Virtual Pet");
      const numberOfAssignmentsAfterAdding = underTest.getAssignmentsLength();

      expect(initialNumberOfAssignments + 1).toEqual(
        numberOfAssignmentsAfterAdding
      );
    });
  });

  describe("constructor", () => {
    test("should be able to initialize a student with an assignment", () => {
      expect(underTest.getAssignmentsLength()).toEqual(1);
    });
  });
});
