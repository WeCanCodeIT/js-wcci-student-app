const app = require("../../app");
const supertest = require("supertest");
const CohortController = require("../controllers/cohort-controller");

const underTest = supertest(app);

describe("GET /cohorts", () => {
  test("should have an HTTP status code of 200", () => {
    underTest
      .get("/cohorts")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });

  test("should call CohortController.renderAll method once", () => {
    CohortController.renderAll = jest.fn();
    underTest.get("/cohorts").end((err, res) => {
      expect(CohortController.renderAll).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
