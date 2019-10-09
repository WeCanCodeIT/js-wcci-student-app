const CohortController = require('./cohort-controller')
const cohortService = require("../services/cohort-service")

describe("CohortController", () => {
  describe("renderAll", () => {
    const requestMock = {}
    const responseMock = {
      render: jest.fn()
    }

    test("should call res.render once with values 'cohorts/all' and a valid model object", () => {
      CohortController.renderAll(requestMock, responseMock)

      expect(responseMock.render).toHaveBeenCalledTimes(1)
      expect(responseMock.render).toHaveBeenCalledWith("cohorts/all", { cohorts: [] })
    })

    it("should call cohortService.findAll once", () => {
      cohortService.findAll = jest.fn()
      CohortController.renderAll(requestMock, responseMock)

      expect(cohortService.findAll).toHaveBeenCalledTimes(1)
    })
  })
})
