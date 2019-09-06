const Student = require("./Student");

describe("Student", () => {
  describe("enroll", () => {
    test("should change the value of enrolled on a given Student", () => {
      // Arrange
      const underTest = new Student();

      // Act
      underTest.enroll();

      // Assert
      expect(underTest.isEnrolled()).toBeTruthy();
    });
  });
});
