const cohortService = require("../services/cohort-service")
const studentService = require("../services/student-service");
const StudentController = require("./student-controller");

describe("rerenderAll", () => {
  test("should call res.render with 'students/all' and a valid model object", async () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      render: jest.fn()
    };
    cohortService.findAll = jest.fn(() => [])
    studentService.findAll = jest.fn(() => []);

    // Act
    await StudentController.renderAll(requestMock, responseMock);

    // Assert
    expect(responseMock.render).toHaveBeenCalledTimes(1);
    expect(responseMock.render).toHaveBeenCalledWith("students/all", {
      cohorts: [],
      students: []
    });
  });
});
