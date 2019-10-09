const studentService = require("../services/student-service");
const StudentController = require("./student-controller");

// static renderAll(req, res) {
//     res.render("students/all", { students: studentService.findAll() });
// }

describe("rerenderAll", () => {
  test.skip("should call res.render with 'students/all' and a valid model object", () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      render: jest.fn()
    };
    studentService.findAll = jest.fn(() => []);

    // Act
    StudentController.renderAll(requestMock, responseMock);

    // Assert
    expect(responseMock.render).toHaveBeenCalledTimes(1);
    expect(responseMock.render).toHaveBeenCalledWith("students/all", {
      students: []
    });
  });
});
