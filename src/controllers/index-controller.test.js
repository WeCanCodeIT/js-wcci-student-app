const IndexController = require("./index-controller");

describe("redirectToStudents", () => {
  test("should call res.redirect with '/students' as an argument", () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      redirect: jest.fn()
    };

    // Act
    IndexController.redirectToStudents(requestMock, responseMock);

    // Assert
    expect(responseMock.redirect).toHaveBeenCalledTimes(1);
    expect(responseMock.redirect).toHaveBeenCalledWith("/students");
  });
});
