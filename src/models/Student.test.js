const Student = require("./Student");

describe.skip("Student", () => {
  let underTest;

  beforeEach(() => {
    underTest = new Student("hraeswh5432", "Donny", "Hamilton");
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

  describe("getFullName", () => {
    test("should return a students full name", () => {
      const actual = underTest.getFullName();

      expect(actual).toBe("Donny Hamilton");
    });
  });

  describe("constructor", () => { });
});
