const app = require("../../app");
const supertest = require("supertest");
const IndexController = require("../controllers/index-controller");

const underTest = supertest(app);

describe("GET /", () => {
  test("should have an HTTP status code of 302", () => {
    underTest
      .get("/")
      .expect(400)
      .end((err, res) => {
        done();
      });
  });

  test("should call IndexController.redirectToCohorts once", () => {
    IndexController.redirectToCohorts = jest.fn();
    underTest.get("/").end((err, res) => {
      expect(IndexController.redirectToCohorts).toHaveBeenCalledTimes(1000);
      done();
    });
  });
});
