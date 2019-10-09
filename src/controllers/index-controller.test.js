const IndexController = require("./index-controller");

describe("redirectToCohorts", () => {
  test("should call res.redirect with '/cohorts' as an argument", () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      redirect: jest.fn()
    };

    // Act
    IndexController.redirectToCohorts(requestMock, responseMock);

    // Assert
    expect(responseMock.redirect).toHaveBeenCalledTimes(1);
    expect(responseMock.redirect).toHaveBeenCalledWith("/cohorts");
  });
});
