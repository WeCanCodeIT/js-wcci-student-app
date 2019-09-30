/**
 * implements: AssignmentReceiver
 */

class Student {
  isEnrolled() {
    return this.enrolled;
  }

  constructor(id, firstName = "John", lastName = "Doe") {
    this.assignments = [];
    this.enrolled = false;
    this.firstName = firstName;
    this.id = id;
    this.lastName = lastName;
  }

  enroll() {
    this.enrolled = true;
  }

  getAssignments() {
    return this.assignments;
  }

  getAssignmentsLength() {
    return this.assignments.length;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getId() {
    return this.id;
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
