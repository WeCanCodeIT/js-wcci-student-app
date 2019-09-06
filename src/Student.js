class Student {
  isEnrolled() {
    return this.enrolled;
  }

  constructor() {
    this.enrolled = false;
  }

  enroll() {
    this.enrolled = true;
  }
}

module.exports = Student;
