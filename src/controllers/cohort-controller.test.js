const CohortController = require('./cohort-controller')
const cohortService = require("../services/cohort-service")

describe("CohortController", () => {
  describe("renderAll", () => {
    let requestMock
    let responseMock

    beforeEach(() => {
      requestMock = {}
      responseMock = {
        render: jest.fn()
      }
    })

    test("should call res.render once with values 'cohorts/all' and a valid model object", async () => {
      cohortService.findAll = jest.fn(() => [])
      await CohortController.renderAll(requestMock, responseMock)

      expect(responseMock.render).toHaveBeenCalledTimes(1)
      expect(responseMock.render).toHaveBeenCalledWith("cohorts/all", { cohorts: [] })
    })

    it("should call cohortService.findAll once", () => {
      const spy = jest.spyOn(cohortService, 'findAll')
      CohortController.renderAll(requestMock, responseMock)

      expect(spy).toHaveBeenCalled()
    })
  })
})
