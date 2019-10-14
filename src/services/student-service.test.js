const studentService = require('./student-service')
const Student = require('../models/Student.sequelize')

describe("student-service", () => {
  describe("findAll", () => {
    test("Should call findAll from sequelize model", () => {
      // Stubs the `findAll method so our test doesn't
      // send an actual request to the db`
      Student.findAll = jest.fn(() => [])

      // Will call the stubbed `Student.findAll()` method
      studentService.findAll()

      expect(Student.findAll).toHaveBeenCalledTimes(1)
    })
  })
})
