const Assignment = require("./Assignment");

describe("Assignment", () => {
  test("should be abstract", () => {
    expect(() => {
      new Assignment();
    }).toThrow("Assignment is abstract!");
  });
});
