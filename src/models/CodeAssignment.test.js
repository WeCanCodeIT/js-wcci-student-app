const Assignment = require("./Assignment");
const CodeAssignment = require("./CodeAssignment");

describe("CodeAssignment", () => {
  test("should extend Assignment", () => {
    const underTest = new CodeAssignment("test title", "test description");

    expect(underTest instanceof Assignment).toBeTruthy();
  });
});
