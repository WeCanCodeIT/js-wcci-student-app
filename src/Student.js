class Student {
  isEnrolled() {
    return this.enrolled;
  }

  constructor(firstAssignment) {
    this.assignments = [];
    this.enrolled = false;

    this.assignments.push(firstAssignment);
  }

  enroll() {
    this.enrolled = true;
  }

  getAssignmentsLength() {
    return this.assignments.length;
  }

  graduate() {
    if (!this.enrolled) {
      throw new Error(
        "Student must be enrolled to be eligible for graduation."
      );
    }
    this.enrolled = false;
  }

  receiveAssignment(assignment) {
    this.assignments.push(assignment);
  }
}

module.exports = Student;
