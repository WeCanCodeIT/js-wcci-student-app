const Cohort = require("./Cohort");
const Student = require("./Student");

describe("Cohort", () => {
  describe("getStudentsArray", () => {
    test("should return an array", () => {
      const underTest = new Cohort();

      const actual = underTest.getStudentsArray();

      expect(actual instanceof Array).toBeTruthy();
    });

    test("should return an array containing Students", () => {
      const underTest = new Cohort();
      const student = new Student("hte54135");

      underTest.addStudent(student);
      const actual = underTest.getStudentsArray();

      expect(actual).toContain(student);
    });
  });

  describe("getStudent", () => {
    test("should return a student from the cohort when given an ID", () => {
      const underTest = new Cohort();
      const student = new Student("hte54135");

      underTest.addStudent(student);
      const actual = underTest.getStudent("hte54135");

      expect(actual).toBe(student);
    });
  });
});
